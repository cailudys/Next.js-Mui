import { createTheme as createMuiTheme } from '@mui/material';
import { createPalette } from './create-palette';
import { createComponents } from './create-components';
import { createShadows } from './create-shadows';
import { createTypography } from './create-typography';

export function createTheme() {
  // 调色板 (定义了颜色相关的属性)
  const palette = createPalette();
  // 组件 （定义所有组件样式）
  const components = createComponents({ palette });
  // 阴影 
  const shadows = createShadows();
  // 排版 （定义了文本样式）
  const typography = createTypography();

  return createMuiTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1440
      }
    },
    components,
    palette,
    shadows,
    shape: {
      borderRadius: 8
    },
    typography
  });
}
