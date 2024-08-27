import React from 'react'
import Head from '../component/header/Head'
import Footer from '../component/footer/Footer'
import Mainone from '../component/aboutPages/main/mainone'
import Years from '../component/aboutPages/years/Years'
import Choose from '../component/aboutPages/choose/Choose'
import Quality from '../component/aboutPages/quality/Quality'
import Team from '../component/aboutPages/team/Team'

const About = () => {
  return (
    <>
      <Head />
      <Mainone />
      <Years />
      <Choose />
      <Quality />
      <Team />
      <Footer />
    </>
  )
}

export default About
