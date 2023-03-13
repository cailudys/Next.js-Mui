import React from 'react'
import Layout from './layouts/dashboard/layout'
import { Box } from '@mui/material';
import { alpha } from '@mui/material/styles';

const Page = () => {
  return (
    <Box
      component="section"
      sx={{

        backgroundColor:alpha('#111927',0.1)
      }}
    >

    </Box >
  )
}

Page.getLayout = (page) => {
  return <Layout>
    {page}
  </Layout>
}

export default Page