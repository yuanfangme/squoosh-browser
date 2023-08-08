import { canvasEncode } from '../../../../client/lazy-app/util/canvas';
import { mimeType } from '../shared/meta';
export const browserPNGEncode = (imageData, options) => canvasEncode(imageData, mimeType);
