import BellIcon from '@heroicons/react/24/solid/BellIcon';
import UsersIcon from '@heroicons/react/24/solid/UsersIcon';
import Bars3Icon from '@heroicons/react/24/solid/Bars3Icon';
import MagnifyingGlassIcon from '@heroicons/react/24/solid/MagnifyingGlassIcon';
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
import { alpha } from '@mui/material/styles';
import { AccountPopover } from './account-popover';
import { usePopover } from 'src/hooks/use-popover';


const Page = () => {

    // useMediaQuery 钩子函数返回一个布尔值，用于控制元素是否显示
    const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'));
    const accountPopover = usePopover();


    return (
        <>
            <Box
                component="header"
                sx={(theme) => ({
                    backdropFilter: 'blur(6px)',
                    backgroundColor: alpha(theme.palette.background.default, 0.8),
                    position: 'sticky',
                    left: {
                        lg: theme.const.sideNavWidth

                    },
                    top: 0,
                    width: {
                        lg: `calc(100vw - ${theme.const.sideNavWidth}px)`
                    },
                    minHeight: theme.const.topNavHight,
                    zIndex: theme.zIndex.appBar,
                })}
            >
                <Stack
                    alignItems="center"
                    direction="row"
                    justifyContent="space-between"
                    spacing={2}
                    sx={{
                        minHeight: '64px',
                        px: 2
                    }}
                >
                    <Stack
                        alignItems="center"
                        direction="row"
                        spacing={2}
                    >
                        {!lgUp && (
                            <IconButton onClick={() => { }}>
                                <SvgIcon fontSize="small">
                                    <Bars3Icon />
                                </SvgIcon>
                            </IconButton>
                        )}
                        <Tooltip title="Search">
                            <IconButton>
                                <SvgIcon fontSize="small">
                                    <MagnifyingGlassIcon />
                                </SvgIcon>
                            </IconButton>
                        </Tooltip>
                    </Stack>
                    <Stack
                        alignItems="center"
                        direction="row"
                        spacing={2}
                    >
                        <Tooltip title="Contacts">
                            <IconButton>
                                <SvgIcon fontSize="small">
                                    <UsersIcon />
                                </SvgIcon>
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Notifications">
                            <IconButton>
                                <Badge
                                    badgeContent={4}
                                    color="success"
                                    variant="dot"
                                >
                                    <SvgIcon fontSize="small">
                                        <BellIcon />
                                    </SvgIcon>
                                </Badge>
                            </IconButton>
                        </Tooltip>
                        <Avatar
                            onClick={accountPopover.handleOpen}
                            ref={accountPopover.anchorRef}
                            sx={{
                                cursor: 'pointer',
                                height: 40,
                                width: 40
                            }}
                            src="/assets/avatars/avatar-anika-visser.png"
                        />
                    </Stack>
                </Stack>
            </Box>
            <AccountPopover
                anchorEl={accountPopover.anchorRef.current}
                open={accountPopover.open}
                onClose={accountPopover.handleClose}
            />
        </>
    )
}


export default Page