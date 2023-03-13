import React from 'react'
import { Drawer, } from '@mui/material';


const Page = () => {
  return <>
    <Drawer
      anchor='left'
      PaperProps={{
        sx: {
          backgroundColor: 'neutral.800',
          color: 'common.white',
          width: (theme)=>theme.const.sideNavWidth
        }
      }}
      variant="permanent"
    >
      sideNav
    </Drawer>
  </>
}

export default Page
