import React from 'react'
import Head from 'next/head'

const HeadData = () => {
  return (
    <Head>
      <title>Pokemon App</title>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
      />

      <meta name="description" content="Pokemon App" />

      <meta content="Pokemon App" property="og:title" />
      <meta content="Pokemon App" property="twitter:title" />
      <meta content="Pokemon App" property="og:description" />
      <meta content="Pokemon App" property="twitter:description" />
      <meta property="og:site_name" content="Pokemon App" />
    </Head>
  )
}

export default HeadData
