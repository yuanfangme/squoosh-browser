import { drawableToImageData } from '../canvas';
const hasImageDecoder = typeof ImageDecoder !== 'undefined';
export async function isTypeSupported(mimeType) {
    if (!hasImageDecoder)
        return false;
    try {
        return await ImageDecoder.isTypeSupported(mimeType);
    }
    catch (err) {
        return false;
    }
}
export async function decode(blob, mimeType) {
    if (!hasImageDecoder) {
        throw Error(`This browser does not support ImageDecoder. This function should not have been called.`);
    }
    const decoder = new ImageDecoder({
        type: mimeType,
        data: new Response(blob).body,
    });
    const { image } = await decoder.decode();
    return drawableToImageData(image);
}
