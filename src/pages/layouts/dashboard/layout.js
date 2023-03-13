import React from 'react'
import SideNav from './side-nav'
import TopNav from './top-nav'
import { Box } from '@mui/material';

const Page = (props) => {
    return (
        <>
            <TopNav />
            <SideNav />
            <Box
                sx={{
                    ml: (theme)=>`${theme.const.sideNavWidth}px`
                }}
            >
                {props.children}
            </Box>
        </>
    )
}

export default Page