import React from 'react'
import Head from '../component/header/Head'
import Footer from '../component/footer/Footer'
import Mainone from '../component/aboutPages/main/mainone'
import Concrete from '../component/projectPages/concrete/Concrete'
import Works from '../component/projectPages/works/Works'

const Projects = () => {
  return (
    <>
      <Head />
      <Mainone />
      <Concrete />
      <Works />
      <Footer />
    </>
  )
}

export default Projects
