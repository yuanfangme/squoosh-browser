import imagequant from '../../../../../codecs/imagequant/imagequant.js';
import { initEmscriptenModule } from '../../../../features/worker-utils';
let emscriptenModule;
export default async function process(data, opts) {
    if (!emscriptenModule) {
        emscriptenModule = initEmscriptenModule(imagequant);
    }
    const module = await emscriptenModule;
    const result = opts.zx
        ? module.zx_quantize(data.data, data.width, data.height, opts.dither)
        : module.quantize(data.data, data.width, data.height, opts.maxNumColors, opts.dither);
    return new ImageData(result, data.width, data.height);
}
