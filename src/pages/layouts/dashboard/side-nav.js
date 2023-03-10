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
            width: 280
          }
        }}
        variant="permanent"
      >
        文字
      </Drawer>
    </>
}

export default Page
