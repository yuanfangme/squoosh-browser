export function initEmscriptenModule(moduleFactory) {
    return moduleFactory({
        noInitialRun: true,
    });
}
export function blobToArrayBuffer(blob) {
    return new Response(blob).arrayBuffer();
}
