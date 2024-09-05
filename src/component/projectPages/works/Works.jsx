import './work.css'
import pro3 from '../../../assets/pro3.jpeg'

const Works = () => {
  return (
    <div className='works'>
      <p className="titleWorks">Works</p>
      <p className="workProjects">Our Projects</p>

      <div className="manyBtns">
        <img src={pro3} alt="" className='pro3'/>
        <button className="dfbd12s">FOUNDATION</button>
        <button className="dfbd12s">CARPENTRY</button>
        <button className="dfbd12s">PLASTERING</button>
        <button className="dfbd12s">ELECTRICAL</button>
        <button className="dfbd12s">PLUMBING</button>
        <button className="dfbd12s">BUILDING</button>
        <button className="dfbd12s">LAPA</button>
        <button className="dfbd12s">SOLAR INSTALLATION</button>
        <button className="dfbd12s">CCTV INSTALLATION</button>
        <button className="dfbd12s">GATE MOTOR INSTALLATION</button>
        <button className="dfbd12s">PAVING</button>
      </div>
    </div>
  )
}

export default Works
