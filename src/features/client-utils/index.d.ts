interface EncodeOptions {
    quality: number;
}
interface Props {
    options: EncodeOptions;
    onChange(newOptions: EncodeOptions): void;
}
interface QualityOptionArg {
    min?: number;
    max?: number;
    step?: number;
}
declare type Constructor<T extends {} = {}> = new (...args: any[]) => T;
