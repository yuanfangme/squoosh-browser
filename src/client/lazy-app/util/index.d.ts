export declare function shallowEqual(one: any, two: any): boolean;
export declare function canDecodeImageType(type: string): Promise<boolean>;
export declare function blobToArrayBuffer(blob: Blob): Promise<ArrayBuffer>;
export declare function blobToText(blob: Blob): Promise<string>;
declare const magicNumberMapInput: readonly [readonly [RegExp, "application/pdf"], readonly [RegExp, "image/gif"], readonly [RegExp, "image/gif"], readonly [RegExp, "image/png"], readonly [RegExp, "image/jpeg"], readonly [RegExp, "image/bmp"], readonly [RegExp, "image/tiff"], readonly [RegExp, "image/tiff"], readonly [RegExp, "image/tiff"], readonly [RegExp, "image/webp"], readonly [RegExp, "image/webp2"], readonly [RegExp, "image/avif"], readonly [RegExp, "image/jxl"], readonly [RegExp, "image/jxl"]];
export declare type ImageMimeTypes = typeof magicNumberMapInput[number][1];
export declare function sniffMimeType(blob: Blob): Promise<ImageMimeTypes | ''>;
export declare function blobToImg(blob: Blob): Promise<HTMLImageElement>;
export declare function builtinDecode(blob: Blob, mimeType: string): Promise<ImageData>;
export declare function inputFieldValueAsNumber(field: any, defaultVal?: number): number;
export declare function inputFieldCheckedAsNumber(field: any, defaultVal?: number): number;
export declare function inputFieldChecked(field: any, defaultVal?: boolean): boolean;
export declare function inputFieldValue(field: any, defaultVal?: string): string;
export declare function konami(): Promise<void>;
interface TransitionOptions {
    from?: number;
    to?: number;
    duration?: number;
    easing?: string;
}
export declare function transitionHeight(el: HTMLElement, opts: TransitionOptions): Promise<void>;
export declare function preventDefault(event: Event): void;
export declare function assertSignal(signal: AbortSignal): void;
export declare function abortable<T>(signal: AbortSignal, promise: Promise<T>): Promise<T>;
export {};
