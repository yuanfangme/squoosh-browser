import { PreprocessorState, ProcessorState, EncoderState } from '../feature-meta';
export interface SourceImage {
    file: File;
    decoded: ImageData;
    preprocessed: ImageData;
    vectorImage?: HTMLImageElement;
}
interface Setting {
    preprocessorState: PreprocessorState;
    processorState: ProcessorState;
    encoderState: EncoderState;
}
export default class Compress {
    private file;
    private setting;
    constructor(file: File, setting?: Setting);
    process(): Promise<File>;
}
export {};
