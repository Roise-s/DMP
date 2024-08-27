import React from 'react'
import Head from '../component/header/Head'
import Footer from '../component/footer/Footer'
import Mainone from '../component/aboutPages/main/mainone'
import Concrete from '../component/projectPages/concrete/Concrete'
import Works from '../component/projectPages/works/Works'
import Dream from '../component/projectPages/dream/Dream'

const Projects = () => {
  return (
    <>
      <Head />
      <Mainone />
      <Concrete />
      <Works />
      <Dream />
      <Footer />
    </>
  )
}

export default Projects
