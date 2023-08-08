import { getContainOffsets } from '../shared/util';
import initResizeWasm, { resize as wasmResize } from '../../../../../codecs/resize/pkg/squoosh_resize.js';
import initHqxWasm, { resize as wasmHqx } from '../../../../../codecs/hqx/pkg/squooshhqx.js';
function optsIsHqxOpts(opts) {
    return opts.method === 'hqx';
}
function crop(data, sx, sy, sw, sh) {
    const inputPixels = new Uint32Array(data.data.buffer);
    for (let y = 0; y < sh; y += 1) {
        const start = (y + sy) * data.width + sx;
        inputPixels.copyWithin(y * sw, start, start + sw);
    }
    return new ImageData(new Uint8ClampedArray(inputPixels.buffer.slice(0, sw * sh * 4)), sw, sh);
}
function clamp(num, { min = Number.MIN_VALUE, max = Number.MAX_VALUE }) {
    return Math.min(Math.max(num, min), max);
}
const resizeMethods = [
    'triangle',
    'catrom',
    'mitchell',
    'lanczos3',
];
let resizeWasmReady;
let hqxWasmReady;
async function hqx(input, opts) {
    if (!hqxWasmReady) {
        hqxWasmReady = initHqxWasm();
    }
    await hqxWasmReady;
    const widthRatio = opts.width / input.width;
    const heightRatio = opts.height / input.height;
    const ratio = Math.max(widthRatio, heightRatio);
    const factor = clamp(Math.ceil(ratio), { min: 1, max: 4 });
    if (factor === 1)
        return input;
    const result = wasmHqx(new Uint32Array(input.data.buffer), input.width, input.height, factor);
    return new ImageData(new Uint8ClampedArray(result.buffer), input.width * factor, input.height * factor);
}
export default async function resize(data, opts) {
    let input = data;
    if (!resizeWasmReady) {
        resizeWasmReady = initResizeWasm();
    }
    if (optsIsHqxOpts(opts)) {
        input = await hqx(input, opts);
        opts = { ...opts, method: 'catrom' };
    }
    await resizeWasmReady;
    if (opts.fitMethod === 'contain') {
        const { sx, sy, sw, sh } = getContainOffsets(data.width, data.height, opts.width, opts.height);
        input = crop(input, Math.round(sx), Math.round(sy), Math.round(sw), Math.round(sh));
    }
    const result = wasmResize(new Uint8Array(input.data.buffer), input.width, input.height, opts.width, opts.height, resizeMethods.indexOf(opts.method), opts.premultiply, opts.linearRGB);
    return new ImageData(new Uint8ClampedArray(result.buffer), opts.width, opts.height);
}
