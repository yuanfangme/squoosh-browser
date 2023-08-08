import { EncodeOptions } from '../shared/meta';
export declare const featureTest: () => Promise<boolean>;
export declare const browserGIFEncode: (imageData: ImageData, options: EncodeOptions) => Promise<Blob>;
