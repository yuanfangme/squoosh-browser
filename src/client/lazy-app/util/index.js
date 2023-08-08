import * as WebCodecs from '../util/web-codecs';
import { drawableToImageData } from './canvas';
export function shallowEqual(one, two) {
    for (const i in one)
        if (one[i] !== two[i])
            return false;
    for (const i in two)
        if (!(i in one))
            return false;
    return true;
}
async function decodeImage(url) {
    const img = new Image();
    img.decoding = 'async';
    img.src = url;
    const loaded = new Promise((resolve, reject) => {
        img.onload = () => resolve();
        img.onerror = () => reject(Error('Image loading error'));
    });
    if (img.decode) {
        await img.decode().catch(() => null);
    }
    await loaded;
    return img;
}
const canDecodeCache = new Map();
export function canDecodeImageType(type) {
    if (!canDecodeCache.has(type)) {
        const resultPromise = (async () => {
            const picture = document.createElement('picture');
            const img = document.createElement('img');
            const source = document.createElement('source');
            source.srcset = 'data:,x';
            source.type = type;
            picture.append(source, img);
            await 0;
            return !!img.currentSrc;
        })();
        canDecodeCache.set(type, resultPromise);
    }
    return canDecodeCache.get(type);
}
export function blobToArrayBuffer(blob) {
    return new Response(blob).arrayBuffer();
}
export function blobToText(blob) {
    return new Response(blob).text();
}
const magicNumberMapInput = [
    [/^%PDF-/, 'application/pdf'],
    [/^GIF87a/, 'image/gif'],
    [/^GIF89a/, 'image/gif'],
    [/^\x89PNG\x0D\x0A\x1A\x0A/, 'image/png'],
    [/^\xFF\xD8\xFF/, 'image/jpeg'],
    [/^BM/, 'image/bmp'],
    [/^I I/, 'image/tiff'],
    [/^II*/, 'image/tiff'],
    [/^MM\x00*/, 'image/tiff'],
    [/^RIFF....WEBPVP8[LX ]/s, 'image/webp'],
    [/^\xF4\xFF\x6F/, 'image/webp2'],
    [/^\x00\x00\x00 ftypavif\x00\x00\x00\x00/, 'image/avif'],
    [/^\xff\x0a/, 'image/jxl'],
    [/^\x00\x00\x00\x0cJXL \x0d\x0a\x87\x0a/, 'image/jxl'],
];
const magicNumberToMimeType = new Map(magicNumberMapInput);
export async function sniffMimeType(blob) {
    const firstChunk = await blobToArrayBuffer(blob.slice(0, 16));
    const firstChunkString = Array.from(new Uint8Array(firstChunk))
        .map((v) => String.fromCodePoint(v))
        .join('');
    for (const [detector, mimeType] of magicNumberToMimeType) {
        if (detector.test(firstChunkString)) {
            return mimeType;
        }
    }
    return '';
}
export async function blobToImg(blob) {
    const url = URL.createObjectURL(blob);
    try {
        return await decodeImage(url);
    }
    finally {
        URL.revokeObjectURL(url);
    }
}
export async function builtinDecode(blob, mimeType) {
    if (await WebCodecs.isTypeSupported(mimeType)) {
        try {
            return await WebCodecs.decode(blob, mimeType);
        }
        catch (e) { }
    }
    const drawable = 'createImageBitmap' in self ? await createImageBitmap(blob) : await blobToImg(blob);
    return drawableToImageData(drawable);
}
export function inputFieldValueAsNumber(field, defaultVal = 0) {
    if (!field)
        return defaultVal;
    return Number(inputFieldValue(field));
}
export function inputFieldCheckedAsNumber(field, defaultVal = 0) {
    if (!field)
        return defaultVal;
    return Number(inputFieldChecked(field));
}
export function inputFieldChecked(field, defaultVal = false) {
    if (!field)
        return defaultVal;
    return field.checked;
}
export function inputFieldValue(field, defaultVal = '') {
    if (!field)
        return defaultVal;
    return field.value;
}
export function konami() {
    return new Promise((resolve) => {
        const expectedPattern = '38384040373937396665';
        let rollingPattern = '';
        const listener = (event) => {
            rollingPattern += event.keyCode;
            rollingPattern = rollingPattern.slice(-expectedPattern.length);
            if (rollingPattern === expectedPattern) {
                window.removeEventListener('keydown', listener);
                resolve();
            }
        };
        window.addEventListener('keydown', listener);
    });
}
export async function transitionHeight(el, opts) {
    const { from = el.getBoundingClientRect().height, to = el.getBoundingClientRect().height, duration = 1000, easing = 'ease-in-out', } = opts;
    if (from === to || duration === 0) {
        el.style.height = to + 'px';
        return;
    }
    el.style.height = from + 'px';
    getComputedStyle(el).transform;
    el.style.transition = `height ${duration}ms ${easing}`;
    el.style.height = to + 'px';
    return new Promise((resolve) => {
        const listener = (event) => {
            if (event.target !== el)
                return;
            el.style.transition = '';
            el.removeEventListener('transitionend', listener);
            el.removeEventListener('transitioncancel', listener);
            resolve();
        };
        el.addEventListener('transitionend', listener);
        el.addEventListener('transitioncancel', listener);
    });
}
export function preventDefault(event) {
    event.preventDefault();
}
export function assertSignal(signal) {
    if (signal.aborted)
        throw new DOMException('AbortError', 'AbortError');
}
export async function abortable(signal, promise) {
    assertSignal(signal);
    return Promise.race([
        promise,
        new Promise((_, reject) => {
            signal.addEventListener('abort', () => reject(new DOMException('AbortError', 'AbortError')));
        }),
    ]);
}
