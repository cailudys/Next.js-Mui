import React from 'react'
import SideNav from './side-nav'
import TopNav from './top-nav'
import { Box } from '@mui/material';
import { alpha } from '@mui/material/styles';


const Page = (props) => {
    return (
        <>
            <TopNav />
            <SideNav />
            <Box
                sx={{
                    ml: (theme) => `${theme.const.sideNavWidth}px`,
                    height: (theme) => `calc(100vh - ${theme.const.topNavHight}px)`,
                    backgroundColor: alpha('#98ec65', 0.1)
                }}
            >
                {props.children}
            </Box>
        </>
    )
}

export default Page