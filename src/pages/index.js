import React from 'react'
import { alpha } from '@mui/material/styles';

import {
  Avatar,
  Badge,
  Box,
  IconButton,
  Stack,
  SvgIcon,
  Tooltip,
  useMediaQuery
} from '@mui/material';

const SIDE_NAV_WIDTH = 280;

const TOP_NAV_HEIGHT = 64;

export default function Home() {
  return (
    <>
      <Box
        component="header"
        sx={{
          backdropFilter: 'blur(6px)',
          backgroundColor: (theme) => alpha(theme.palette.background.default, 0.8),
          backgroundColor: '#ff3d00',
          position: 'sticky',
          left: {
            lg: `${SIDE_NAV_WIDTH}px`
          },
          top: 0,
          width: {
            lg: `calc(100% - ${SIDE_NAV_WIDTH}px)`
          },
          minHeight: TOP_NAV_HEIGHT,
          zIndex: (theme) => theme.zIndex.appBar
        }}
      >
        2334
      </Box>
      1234134134
    </>
  )
}
