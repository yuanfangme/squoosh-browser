export declare function initEmscriptenModule<T extends EmscriptenWasm.Module>(moduleFactory: EmscriptenWasm.ModuleFactory<T>): Promise<T>;
export declare function blobToArrayBuffer(blob: Blob): Promise<ArrayBuffer>;
