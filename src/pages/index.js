import React from 'react'
import Layout from './layouts/dashboard/layout'

const Page = () => {
  return (
    <>
      indexPage
    </>
  )
}

Page.getLayout = (page) => {
  return <Layout>
    {page}
  </Layout>
}

export default Page