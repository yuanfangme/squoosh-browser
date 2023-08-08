import encode from '../worker/webpEncode';
export const webPEncode = (imageData, options) => encode(imageData, options);
const losslessPresets = [
    [0, 0],
    [1, 20],
    [2, 25],
    [3, 30],
    [3, 50],
    [4, 50],
    [4, 75],
    [4, 90],
    [5, 90],
    [6, 100],
];
const losslessPresetDefault = 6;
function determineLosslessQuality(quality, method) {
    const index = losslessPresets.findIndex(([presetMethod, presetQuality]) => presetMethod === method && presetQuality === quality);
    if (index !== -1)
        return index;
    return losslessPresetDefault;
}
