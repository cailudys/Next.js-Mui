import React from 'react'
import { alpha } from '@mui/material/styles';
import { Box } from '@mui/material';

const Page = () => {
    return (
        <>
            <Box
                component="header"
                sx={(theme) => ({
                    backdropFilter: 'blur(6px)',
                    backgroundColor: alpha(theme.palette.background.default, 0.8),
                    backgroundColor: '#ff3d00',
                    position: 'sticky',
                    left: {
                        lg: theme.const.sideNavWidth

                    },
                    top: 0,
                    width: {
                        lg: `calc(100% - ${theme.const.sideNavWidth}px)`
                    },
                    minHeight: theme.const.topNavHight,
                    zIndex: theme.zIndex.appBar,
                })}
            >
                topNav
            </Box>
        </>
    )
}


export default Page