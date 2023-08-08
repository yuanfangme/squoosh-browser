import { canvasEncode } from '../../../../client/lazy-app/util/canvas';
import { mimeType } from '../shared/meta';
export const browserJPEGEncode = (imageData, options) => canvasEncode(imageData, mimeType, options.quality);
