import './App.css'
import Convert from './component/convert/Convert'
import Flowing from './component/flowinng/Flowing'
import Hallowen from './component/hallowen/Hallowen'
import Head from './component/header/Head'
import Looperman from './component/looperman/Looperman'
import MainSection from './component/mainsection/MainSection'
import Something from './component/something/Something'
import Talks from './component/talks/Talks'


function App() {
  
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
    </>
  )
}

export default App
