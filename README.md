# squoosh-browser

谷歌squoosh的浏览器移植版本：
https://github.com/GoogleChromeLabs/squoosh

## demo

1. 运行 build/squoosh/index.html

2. 控制台执行 SquooshTest()

## build

```shell
npm run build-wp
```

> 构建到 dist/squoosh 目录，复制到项目public文件夹中，在index.html中通过script标签引入squoosh-browser.js

## usage

```html
<script src="./squoosh/squoosh-browser.js"></script>
```

```js

// 获取图片宽高
const img = new Image();
img.src = URL.createObjectURL(image);
img.onload = function(){
  console.log(img.width); // 图片宽度
  console.log(img.height); // 图片高度
  URL.revokeObjectURL(img.src); // 释放URL对象引用
  console.log('load img cost ',new Date().getTime()-st)
}

// image 输入的图片file对象
const compress = new SquooshCompress(image, {
  encoderState: {
    type: "mozJPEG",
    options: { ...SquooshEncoderMap.mozJPEG.meta.defaultOptions, quality: 70 }
  },
  processorState: { quantize: { enabled: false },
    resize: {
      enabled: true,
      width: 1600,
      height: 900,
      method: "lanczos3",
      fitMethod: "stretch",
      premultiply: true,
      linearRGB: true
    }
  }
})

// compressFile 输出的图片file对象
const compressFile = await compress.process()

const reader = new FileReader()
reader.onload = () => {
  const img = new Image()
  img.src = reader.result
  img.style = "width:100%;"
  document.body.appendChild(img)
}
reader.readAsDataURL(compressFile)
```

## performance

使用上述代码的配置进行测试而得

| 图片类型| 原始分辨率 |原始大小 | 压缩大小 | 压缩耗时 | 压缩率 | 裁剪50%压缩大小 | 裁剪50%压缩耗时 |
| --- | --- | --- |--- |--- |--- |--- |--- |
| 照片JPG | 5792x4344 |  10138KB | 2944K | 5900ms | 71% | 976KB | 5100ms |
| 照片JPG | 4344x5792 | 5704KB | 864KB | 3800ms | 85% | 235KB | 4300ms|
| 截图JPG | 1080x2340 | 763KB | 141KB | 431ms | 82% | 55KB | 420ms|
| 截图PNG | 1470x990 | 263KB | 76KB | 261ms | 71% | 28KB | 200ms|


## tips

webpack内置的wasm loader是按es module规范来的，emscripten编译的wasm是不符合这个规范，不能在项目中直接编译

wasm-bindgen生成的wasm是用的最新的esm规范，要用webpack5的实验性wasm加载功能
