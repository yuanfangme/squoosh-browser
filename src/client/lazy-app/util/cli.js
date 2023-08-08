const typeMap = new Map([
    ['avif', '--avif'],
    ['jxl', '--jxl'],
    ['mozJPEG', '--mozjpeg'],
    ['oxiPNG', '--oxipng'],
    ['webP', '--webp'],
    ['wp2', '--wp2'],
]);
function cliJson(v) {
    return "'" + JSON.stringify(v) + "'";
}
export function generateCliInvocation(encoder, processor) {
    if (!typeMap.has(encoder.type)) {
        throw Error(`Encoder ${encoder.type} is unsupported in the CLI`);
    }
    return [
        'npx',
        '@squoosh/cli',
        ...(processor.resize.enabled
            ? ['--resize', cliJson(processor.resize)]
            : []),
        ...(processor.quantize.enabled
            ? ['--quant', cliJson(processor.quantize)]
            : []),
        typeMap.get(encoder.type),
        cliJson(encoder.options),
    ].join(' ');
}
