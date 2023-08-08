import { initEmscriptenModule } from '../../../../features/worker-utils';
import { threads } from 'wasm-feature-detect';
import avifEncoderMt from '../../../../../codecs/avif/enc/avif_enc_mt.js';
import avifEncoder from '../../../../../codecs/avif/enc/avif_enc.js';
let emscriptenModule;
async function init() {
    if (await threads()) {
        return initEmscriptenModule(avifEncoderMt);
    }
    return initEmscriptenModule(avifEncoder);
}
export default async function encode(data, options) {
    if (!emscriptenModule)
        emscriptenModule = init();
    const module = await emscriptenModule;
    const result = module.encode(data.data, data.width, data.height, options);
    if (!result)
        throw new Error('Encoding error');
    return result.buffer;
}
