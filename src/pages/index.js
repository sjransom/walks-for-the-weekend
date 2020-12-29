import React from 'react'
import { Helmet } from 'react-helmet'

import Header from './components/Header'
import NavBar from './components/NavBar'

import './styles/styles.scss'

export default function Home() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Walks for the Weekend</title>
        <link rel="canonical" href="https://walksfortheweekend.co.uk/" />
      </Helmet>
      <Header />
      <NavBar />
    </>
  )
}
