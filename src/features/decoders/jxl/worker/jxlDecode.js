import jxlDecoder from '../../../../../codecs/jxl/dec/jxl_dec.js';
import { initEmscriptenModule, blobToArrayBuffer } from '../../../../features/worker-utils';
let emscriptenModule;
export default async function decode(blob) {
    if (!emscriptenModule) {
        emscriptenModule = initEmscriptenModule(jxlDecoder);
    }
    const [module, data] = await Promise.all([
        emscriptenModule,
        blobToArrayBuffer(blob),
    ]);
    const result = module.decode(data);
    if (!result)
        throw new Error('Decoding error');
    return result;
}
