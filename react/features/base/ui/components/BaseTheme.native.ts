import {colorMap, font, fonts, shape, spacing, typography} from '../Tokens';
import { createNativeTheme } from '../functions.native';

import updateTheme from './updateTheme.native';

export default createNativeTheme(updateTheme({
    font,
    fonts,
    colorMap,
    spacing,
    shape,
    typography
}));
