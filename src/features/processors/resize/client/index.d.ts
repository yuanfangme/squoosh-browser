import { Options as ResizeOptions } from '../shared/meta';
import type { SourceImage } from '../../../../client/lazy-app/Compress';
export declare function resizeImage(source: SourceImage, options: ResizeOptions): Promise<ImageData>;
