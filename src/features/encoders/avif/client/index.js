import encode from '../worker/avifEncode';
export const avifEncode = (imageData, options) => encode(imageData, options);
const maxQuant = 63;
const maxSpeed = 10;
