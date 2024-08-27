import React from 'react'
import Convert from '../component/convert/Convert'
import Flowing from '../component/flowinng/Flowing'
import Footer from '../component/footer/Footer'
import Hallowen from '../component/hallowen/Hallowen'
import Head from '../component/header/Head'
import Looperman from '../component/looperman/Looperman'
import MainSection from '../component/mainsection/MainSection'
import Something from '../component/something/Something'
import Talks from '../component/talks/Talks'

const Home = () => {
  return (
    <>
    <Head />
    <MainSection />
    <Something />
    <Flowing />
    <Looperman />
    <Convert />
    <Hallowen />
    <Talks />
    <Footer />
    </>
  )
}

export default Home
