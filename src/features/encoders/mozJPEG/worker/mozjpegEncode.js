import mozjpeg_enc from '../../../../../codecs/mozjpeg/enc/mozjpeg_enc.js';
import { initEmscriptenModule } from '../../../../features/worker-utils';
let emscriptenModule;
export default async function encode(data, options) {
    if (!emscriptenModule) {
        emscriptenModule = initEmscriptenModule(mozjpeg_enc);
    }
    const module = await emscriptenModule;
    const resultView = module.encode(data.data, data.width, data.height, options);
    return resultView.buffer;
}
