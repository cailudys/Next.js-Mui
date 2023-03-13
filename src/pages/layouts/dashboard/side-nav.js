import React from 'react'
import { Drawer, Box, Typography, SvgIcon } from '@mui/material';
import { Scrollbar } from '@/components/scrollbar';
import { alpha } from '@mui/material/styles';
import NextLink from 'next/link';
import { Logo } from 'src/components/logo';
import ChevronUpDownIcon from '@heroicons/react/24/solid/ChevronUpDownIcon';



const Page = () => {

  const Content = () => {

    return (<>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%'
        }}
      >
        <Box sx={{
          p: 3,
        }}>
          <Box
            component={NextLink}
            href="/"
            sx={{
              display: 'inline-flex',
              height: 32,
              width: 32
            }}
          >
            <Logo />
          </Box>
          <Box
            sx={{
              alignItems: 'center',
              backgroundColor: 'rgba(255, 255, 255, 0.04)',
              borderRadius: 1,
              cursor: 'pointer',
              display: 'flex',
              justifyContent: 'space-between',
              mt: 2,
              p: '12px'
            }}
          >
            <div>
              <Typography
                color="inherit"
                variant="subtitle1"
              >
                Devias
              </Typography>
              <Typography
                color="neutral.400"
                variant="body2"
              >
                Production
              </Typography>
            </div>
            <SvgIcon
              fontSize="small"
              sx={{ color: 'neutral.500' }}
            >
              <ChevronUpDownIcon />
            </SvgIcon>
          </Box>
        </Box>

      </Box>
    </>)
  }


  return <>
    <Drawer
      anchor='left'
      PaperProps={{
        sx: {
          backgroundColor: 'neutral.800',
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
          <Content />
        </Box>
      </Scrollbar>
    </Drawer>
  </>
}

export default Page
