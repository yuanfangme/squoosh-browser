
import Compress from './client/lazy-app/Compress'
import {encoderMap} from "./client/lazy-app/feature-meta"


// console.log('encoderMap', encoderMap)

// console.log(document)

window.squooshCompress = Compress
window.squooshEncoderMap = encoderMap

console.log('init squoosh')
function initSquooshTest(){
  console.log(document.body)
  let ip = document.createElement("input");
  ip.setAttribute("id", "file")
  ip.setAttribute("type", "file")
  document.body.appendChild(ip)


  const file = document.getElementById('file');
  file.onchange = async (event) => {
    const image = event.target.files[0];
    console.log('start');
    const st = new Date().getTime()
    console.log('size', image.size);
    // const compress = new Compress(image, {encoderState: {type: 'mozJPEG',options:encoderMap.mozJPEG.meta.defaultOptions}});


    const compress = new Compress(image, {
      encoderState: {
        type: 'mozJPEG',
        options: {...encoderMap.mozJPEG.meta.defaultOptions, quality: 70}
      },
      processorState: {quantize: {enabled: false}, resize: {enabled: true, width: 1600, height: 900,method: 'lanczos3', fitMethod: 'stretch',   premultiply: true, linearRGB: true,}}
    });

    const compressFile = await compress.process();
    console.log('end');
    console.log('time cost ', new Date().getTime() - st);
    console.log('size', compressFile.size);
    const reader = new FileReader()
    reader.onload = () => {
      const img = new Image()
      img.src = reader.result
      img.style = 'width:100%;'
      document.body.appendChild(img)  // reader.result为获取结果
    }
    reader.readAsDataURL(compressFile)


  }
}

window.SquooshTest = initSquooshTest

