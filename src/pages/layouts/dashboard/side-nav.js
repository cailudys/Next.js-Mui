import React from 'react'
import { Drawer, Box } from '@mui/material';
import { Scrollbar } from '@/components/scrollbar';
import { alpha } from '@mui/material/styles';

const Page = () => {
  return <>
    <Drawer
      anchor='left'
      PaperProps={{
        sx: {
          backgroundColor: alpha('#757575',0.8),
          color: 'common.white',
          width: (theme) => theme.const.sideNavWidth,
          height: '100vh'
        }
      }}
      variant="permanent"
    >
      <Scrollbar
        sx={{
          // 这里的height设置的是滚动条容器的高度，Scrollbar的包裹容器的height值应该和这里保持一致，否则有可能导致出现默认的滚动条。
          height: '100vh',
          // 这里是设置滚动条的颜色
          '& .simplebar-scrollbar:before': {
            background: 'neutral.400'
          }
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          sideNav
        </Box>
      </Scrollbar>
    </Drawer>
  </>
}

export default Page
