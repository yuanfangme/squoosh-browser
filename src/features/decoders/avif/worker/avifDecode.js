import { initEmscriptenModule, blobToArrayBuffer } from '../../../../features/worker-utils';
import decoder from '../../../../../codecs/avif/dec/avif_dec.js';
let emscriptenModule;
export default async function avifDecode(blob) {
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
