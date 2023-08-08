import { initEmscriptenModule } from '../../../../features/worker-utils';
import { threads, simd } from 'wasm-feature-detect';
import jxlEncoderSimd from '../../../../../codecs/jxl/enc/jxl_enc_mt_simd.js';
import jxlEncoderMt from '../../../../../codecs/jxl/enc/jxl_enc_mt.js';
import jxlEncoder from '../../../../../codecs/jxl/enc/jxl_enc.js';
let emscriptenModule;
async function init() {
    if (await threads()) {
        if (await simd()) {
            return initEmscriptenModule(jxlEncoderSimd);
        }
        return initEmscriptenModule(jxlEncoderMt);
    }
    return initEmscriptenModule(jxlEncoder);
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
