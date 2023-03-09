import { Drawer, } from '@mui/material';

export default function Home() {
  return (
    <>
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
      1234134134
    </>
  )
}
