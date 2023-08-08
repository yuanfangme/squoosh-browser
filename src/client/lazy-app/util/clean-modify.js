function cleanSetOrMerge(source, keys, toSetOrMerge, merge) {
    const splitKeys = Array.isArray(keys) ? keys : ('' + keys).split('.');
    let last = copy(source);
    const newObject = last;
    const lastIndex = splitKeys.length - 1;
    for (const [i, key] of splitKeys.entries()) {
        if (i !== lastIndex) {
            last = last[key] = copy(last[key]);
        }
        else {
            last[key] = merge
                ? Object.assign(copy(last[key]), toSetOrMerge)
                : toSetOrMerge;
        }
    }
    return newObject;
}
function copy(source) {
    if (Array.isArray(source))
        return [...source];
    return { ...source };
}
export function cleanMerge(source, keys, toMerge) {
    return cleanSetOrMerge(source, keys, toMerge, true);
}
export function cleanSet(source, keys, newValue) {
    return cleanSetOrMerge(source, keys, newValue, false);
}
