import * as avifEncoderMeta from '../../../features/encoders/avif/shared/meta';
import * as browserGIFEncoderMeta from '../../../features/encoders/browserGIF/shared/meta';
import * as browserJPEGEncoderMeta from '../../../features/encoders/browserJPEG/shared/meta';
import * as browserPNGEncoderMeta from '../../../features/encoders/browserPNG/shared/meta';
import * as jxlEncoderMeta from '../../../features/encoders/jxl/shared/meta';
import * as mozJPEGEncoderMeta from '../../../features/encoders/mozJPEG/shared/meta';
import * as oxiPNGEncoderMeta from '../../../features/encoders/oxiPNG/shared/meta';
import * as webPEncoderMeta from '../../../features/encoders/webP/shared/meta';
import * as wp2EncoderMeta from '../../../features/encoders/wp2/shared/meta';
import * as avifEncoderEntry from '../../../features/encoders/avif/client';
import * as browserGIFEncoderEntry from '../../../features/encoders/browserGIF/client';
import * as browserJPEGEncoderEntry from '../../../features/encoders/browserJPEG/client';
import * as browserPNGEncoderEntry from '../../../features/encoders/browserPNG/client';
import * as jxlEncoderEntry from '../../../features/encoders/jxl/client';
import * as mozJPEGEncoderEntry from '../../../features/encoders/mozJPEG/client';
import * as oxiPNGEncoderEntry from '../../../features/encoders/oxiPNG/client';
import * as webPEncoderEntry from '../../../features/encoders/webP/client';
import * as wp2EncoderEntry from '../../../features/encoders/wp2/client';
export const encoderMap = {
    avif: { meta: avifEncoderMeta, ...avifEncoderEntry },
    browserGIF: { meta: browserGIFEncoderMeta, ...browserGIFEncoderEntry },
    browserJPEG: { meta: browserJPEGEncoderMeta, ...browserJPEGEncoderEntry },
    browserPNG: { meta: browserPNGEncoderMeta, ...browserPNGEncoderEntry },
    jxl: { meta: jxlEncoderMeta, ...jxlEncoderEntry },
    mozJPEG: { meta: mozJPEGEncoderMeta, ...mozJPEGEncoderEntry },
    oxiPNG: { meta: oxiPNGEncoderMeta, ...oxiPNGEncoderEntry },
    webP: { meta: webPEncoderMeta, ...webPEncoderEntry },
    wp2: { meta: wp2EncoderMeta, ...wp2EncoderEntry },
};
import * as quantizeProcessorMeta from '../../../features/processors/quantize/shared/meta';
import * as resizeProcessorMeta from '../../../features/processors/resize/shared/meta';
export const defaultProcessorState = {
    quantize: { enabled: false, ...quantizeProcessorMeta.defaultOptions },
    resize: { enabled: false, ...resizeProcessorMeta.defaultOptions },
};
import * as rotatePreprocessorMeta from '../../../features/preprocessors/rotate/shared/meta';
export const defaultPreprocessorState = {
    rotate: rotatePreprocessorMeta.defaultOptions,
};
