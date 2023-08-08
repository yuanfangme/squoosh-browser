import { threads } from 'wasm-feature-detect';
import initMt, { initThreadPool as initThreadPoolMt, optimise as optimiseMt } from '../../../../../codecs/oxipng/pkg-parallel/squoosh_oxipng.js';
import initSt, { optimise as optimiseSt } from '../../../../../codecs/oxipng/pkg/squoosh_oxipng.js';
async function initMT() {
    await initMt();
    await initThreadPoolMt(navigator.hardwareConcurrency);
    return optimiseMt;
}
async function initST() {
    await initSt();
    return optimiseSt;
}
let wasmReady;
export default async function encode(data, options) {
    if (!wasmReady) {
        wasmReady = threads().then((hasThreads) => hasThreads ? initMT() : initST());
    }
    const optimise = await wasmReady;
    return optimise(new Uint8Array(data), options.level, options.interlace)
        .buffer;
}
