declare type BrowserResizeMethods = 'browser-pixelated' | 'browser-low' | 'browser-medium' | 'browser-high';
declare type WorkerResizeMethods = 'triangle' | 'catrom' | 'mitchell' | 'lanczos3' | 'hqx';
export declare const workerResizeMethods: WorkerResizeMethods[];
export declare type Options = BrowserResizeOptions | WorkerResizeOptions | VectorResizeOptions;
export interface ResizeOptionsCommon {
    width: number;
    height: number;
    fitMethod: 'stretch' | 'contain';
}
export interface BrowserResizeOptions extends ResizeOptionsCommon {
    method: BrowserResizeMethods;
}
export interface WorkerResizeOptions extends ResizeOptionsCommon {
    method: WorkerResizeMethods;
    premultiply: boolean;
    linearRGB: boolean;
}
export interface VectorResizeOptions extends ResizeOptionsCommon {
    method: 'vector';
}
export declare const defaultOptions: Options;
export {};
