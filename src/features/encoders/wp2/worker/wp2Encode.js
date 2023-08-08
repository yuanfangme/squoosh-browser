import { initEmscriptenModule } from '../../../../features/worker-utils';
import { threads, simd } from 'wasm-feature-detect';
import wp2EncoderSimd from '../../../../../codecs/wp2/enc/wp2_enc_mt_simd.js';
import wp2EncoderMt from '../../../../../codecs/wp2/enc/wp2_enc_mt.js';
import wp2Encoder from '../../../../../codecs/wp2/enc/wp2_enc.js';
let emscriptenModule;
async function init() {
    if (await threads()) {
        if (await simd()) {
            return initEmscriptenModule(wp2EncoderSimd);
        }
        return initEmscriptenModule(wp2EncoderMt);
    }
    return initEmscriptenModule(wp2Encoder);
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
