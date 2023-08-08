export declare function drawDataToCanvas(canvas: HTMLCanvasElement, data: ImageData): void;
export declare function canvasEncode(data: ImageData, type: string, quality?: number): Promise<Blob>;
interface DrawableToImageDataOptions {
    width?: number;
    height?: number;
    sx?: number;
    sy?: number;
    sw?: number;
    sh?: number;
}
export declare function drawableToImageData(drawable: ImageBitmap | HTMLImageElement | VideoFrame, opts?: DrawableToImageDataOptions): ImageData;
export declare type BuiltinResizeMethod = 'pixelated' | 'low' | 'medium' | 'high';
export declare function builtinResize(data: ImageData, sx: number, sy: number, sw: number, sh: number, dw: number, dh: number, method: BuiltinResizeMethod): ImageData;
export declare function canvasEncodeTest(mimeType: string): Promise<boolean>;
export {};
