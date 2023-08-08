import { canvasEncodeTest, canvasEncode } from '../../../../client/lazy-app/util/canvas';
import { mimeType } from '../shared/meta';
export const featureTest = () => canvasEncodeTest(mimeType);
export const browserGIFEncode = (imageData, options) => canvasEncode(imageData, mimeType);
