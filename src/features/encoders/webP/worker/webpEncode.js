import { initEmscriptenModule } from '../../../../features/worker-utils';
import { simd } from 'wasm-feature-detect';
import webpEncoderSimd from '../../../../../codecs/webp/enc/webp_enc_simd.js';
import webpEncoder from '../../../../../codecs/webp/enc/webp_enc.js';
let emscriptenModule;
async function init() {
    if (await simd()) {
        return initEmscriptenModule(webpEncoderSimd);
    }
    return initEmscriptenModule(webpEncoder);
}
export default async function encode(data, options) {
    if (!emscriptenModule)
        emscriptenModule = init();
    const module = await emscriptenModule;
    const result = module.encode(data.data, data.width, data.height, options);
    if (!result)
        throw new Error('Encoding error.');
    return result.buffer;
}
