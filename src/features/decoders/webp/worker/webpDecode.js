import { initEmscriptenModule, blobToArrayBuffer } from '../../../../features/worker-utils';
let emscriptenModule;
import decoder from '../../../../../codecs/webp/dec/webp_dec.js';
export default async function decode(blob) {
    if (!emscriptenModule) {
        emscriptenModule = initEmscriptenModule(decoder);
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
