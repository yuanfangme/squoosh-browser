import encode from '../worker/mozjpegEncode';
export function mozJPEGEncode(imageData, options) {
    return encode(imageData, options);
}
