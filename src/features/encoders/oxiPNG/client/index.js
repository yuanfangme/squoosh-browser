import { canvasEncode } from '../../../../client/lazy-app/util/canvas';
import { blobToArrayBuffer, } from '../../../../client/lazy-app/util';
import encode from '../worker/oxipngEncode';
export async function oxiPNGEncode(imageData, options) {
    const pngBlob = await canvasEncode(imageData, 'image/png');
    const pngBuffer = await blobToArrayBuffer(pngBlob);
    return encode(pngBuffer, options);
}
