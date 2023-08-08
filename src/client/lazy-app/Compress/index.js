import {blobToImg, blobToText, builtinDecode, sniffMimeType, canDecodeImageType,} from '../util';
import {encoderMap, defaultPreprocessorState, defaultProcessorState,} from '../feature-meta';
import {drawableToImageData} from '../util/canvas';
import avifDecode from '../../../features/decoders/avif/worker/avifDecode';
import jxlDecode from '../../../features/decoders/jxl/worker/jxlDecode';
import webpDecode from '../../../features/decoders/webp/worker/webpDecode';
import wp2Decode from '../../../features/decoders/wp2/worker/wp2Decode';
import {browserGIFEncode} from '../../../features/encoders/browserGIF/client';
import {avifEncode} from '../../../features/encoders/avif/client';
import {browserJPEGEncode} from '../../../features/encoders/browserJPEG/client';
import {browserPNGEncode} from '../../../features/encoders/browserPNG/client';
import {jxlEncode} from '../../../features/encoders/jxl/client';
import {mozJPEGEncode} from '../../../features/encoders/mozJPEG/client';
import {oxiPNGEncode} from '../../../features/encoders/oxiPNG/client';
import {webPEncode} from '../../../features/encoders/webP/client';
import {wp2Encode} from '../../../features/encoders/wp2/client';
import {resizeImage} from '../../../features/processors/resize/client';
import quantize from '../../../features/processors/quantize/worker/quantize';

async function decodeImage(blob){
  const mimeType = await sniffMimeType(blob);
  const canDecode = await canDecodeImageType(mimeType);
  if (!canDecode) {
    switch (mimeType) {
      case 'image/avif':
        return await avifDecode(blob);
      case 'image/webp':
        return await webpDecode(blob);
      case 'image/jxl':
        return await jxlDecode(blob);
      case 'image/webp2':
        return await wp2Decode(blob);
      default:
        break;
    }
  }
  return await builtinDecode(blob, mimeType);
}

async function preprocessImage(data, preprocessorState){
  let processedData = data;
  if (preprocessorState.rotate.rotate !== 0) {
  }
  return processedData;
}

async function processImage(source, processorState){
  let result = source.preprocessed;
  if (processorState.resize.enabled) {
    result = await resizeImage(source, processorState.resize);
  }
  if (processorState.quantize.enabled) {
    result = await quantize(result, processorState.quantize);
  }
  return result;
}

async function compressImage(image, encodeData, sourceFilename){
  const encoder = encoderMap[encodeData.type];
  let compressedData;
  switch (encodeData.type) {
    case "avif":
      compressedData = await avifEncode(image, encodeData.options);
      break;
    case "browserGIF":
      compressedData = await browserGIFEncode(image, encodeData.options);
      break;
    case "browserJPEG":
      compressedData = await browserJPEGEncode(image, encodeData.options);
      break;
    case "browserPNG":
      compressedData = await browserPNGEncode(image, encodeData.options);
      break;
    case "jxl":
      compressedData = await jxlEncode(image, encodeData.options);
      break;
    case "mozJPEG":
      compressedData = await mozJPEGEncode(image, encodeData.options);
      break;
    case "oxiPNG":
      compressedData = await oxiPNGEncode(image, encodeData.options);
      break;
    case "webP":
      compressedData = await webPEncode(image, encodeData.options);
      break;
    case "wp2":
      compressedData = await wp2Encode(image, encodeData.options);
      break;
    default:
      compressedData = new Blob();
      break;
  }
  const type = encoder.meta.mimeType;
  return new File([compressedData], sourceFilename.replace(/.[^.]*$/, `.${encoder.meta.extension}`), {type});
}

async function processSvg(blob){
  const parser = new DOMParser();
  const text = await blobToText(blob);
  const document = parser.parseFromString(text, 'image/svg+xml');
  const svg = document.documentElement;
  if (svg.hasAttribute('width') && svg.hasAttribute('height')) {
    return blobToImg(blob);
  }
  const viewBox = svg.getAttribute('viewBox');
  if (viewBox === null)
    throw Error('SVG must have width/height or viewBox');
  const viewboxParts = viewBox.split(/\s+/);
  svg.setAttribute('width', viewboxParts[2]);
  svg.setAttribute('height', viewboxParts[3]);
  const serializer = new XMLSerializer();
  const newSource = serializer.serializeToString(document);
  return blobToImg(new Blob([newSource], {type: 'image/svg+xml'}));
}

export default class Compress {
  // file;
  // setting = {
  //     "encoderState": {
  //         type: 'webP',
  //         options: encoderMap.webP.meta.defaultOptions,
  //     }, "processorState": defaultProcessorState, "preprocessorState": defaultPreprocessorState
  // };
  constructor(file, setting){
    this.file = file;
    if (setting) {
      if (!setting.preprocessorState) {
        setting.preprocessorState = defaultPreprocessorState
      }
      if (!setting.processorState) {
        setting.processorState = defaultProcessorState
      }
      console.log(setting)
      this.setting = setting;
    } else {
      this.setting = {encoderState: {type: 'mozJPEG', options: encoderMap.mozJPEG.meta.defaultOptions}};
    }
  }

  async process(){
    let decoded;
    let vectorImage;
    if (this.file.type.startsWith('image/svg+xml')) {
      vectorImage = await processSvg(this.file);
      decoded = drawableToImageData(vectorImage);
    } else {
      decoded = await decodeImage(this.file);
    }
    const preprocessed = await preprocessImage(decoded, this.setting.preprocessorState);
    const source = {"file": this.file, decoded, vectorImage, preprocessed};
    const processed = await processImage(source, this.setting.processorState);
    const file = await compressImage(processed, this.setting.encoderState, source.file.name);
    return file;
  }
}
