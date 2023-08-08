import { builtinResize, drawableToImageData, } from '../../../../client/lazy-app/util/canvas';
import { workerResizeMethods, } from '../shared/meta';
import { getContainOffsets } from '../shared/util';
import resize from '../worker/resize';
function isWorkerOptions(opts) {
    return workerResizeMethods.includes(opts.method);
}
function browserResize(data, opts) {
    let sx = 0;
    let sy = 0;
    let sw = data.width;
    let sh = data.height;
    if (opts.fitMethod === 'contain') {
        ({ sx, sy, sw, sh } = getContainOffsets(sw, sh, opts.width, opts.height));
    }
    return builtinResize(data, sx, sy, sw, sh, opts.width, opts.height, opts.method.slice('browser-'.length));
}
function vectorResize(data, opts) {
    let sx = 0;
    let sy = 0;
    let sw = data.width;
    let sh = data.height;
    if (opts.fitMethod === 'contain') {
        ({ sx, sy, sw, sh } = getContainOffsets(sw, sh, opts.width, opts.height));
    }
    return drawableToImageData(data, {
        sx,
        sy,
        sw,
        sh,
        width: opts.width,
        height: opts.height,
    });
}
export async function resizeImage(source, options) {
    if (options.method === 'vector') {
        if (!source.vectorImage)
            throw Error('No vector image available');
        return vectorResize(source.vectorImage, options);
    }
    if (isWorkerOptions(options)) {
        return resize(source.preprocessed, options);
    }
    return browserResize(source.preprocessed, options);
}
const sizePresets = [0.25, 0.3333, 0.5, 1, 2, 3, 4];
