import './work.css'
import pro3 from '../../../assets/pro3.jpeg'
import pro7 from '../../../assets/pro7.jpeg'
import pro8 from '../../../assets/pro8.jpeg'
import pro from '../../../assets/pro.jpeg'
import pro10 from '../../../assets/pro10.jpeg'
import pro2 from '../../../assets/pro2.jpeg'
import pro5 from '../../../assets/pro5.jpeg'
import pro11 from '../../../assets/pro11.jpeg'
import project1 from '../../../assets/projesct1.jpeg'
import pro1 from '../../../assets/pro1.jpeg'
import pro9 from '../../../assets/pro9.jpeg'
import pro4 from '../../../assets/pro4.jpeg'

const Works = () => {
  return (
    <div className='works'>
      <p className="titleWorks">Works</p>
      <p className="workProjects">Our Projects</p>

      <div className="manyBtns">
        <div className="mm">
          <img src={pro3} alt="" className='pro3'/>
          <p className="pppl">POOL</p>
        </div>
        <div className="mm">
          <img src={pro7} alt="" className='pro3'/>
          <p className="pppl">FOUNDATION</p>
        </div>
        <div className="mm">
          <img src={project1} alt="" className='pro3'/>
          <p className="pppl">CARPENTRY</p>
        </div>
        <div className="mm">
          <img src={pro8} alt="" className='pro3'/>
          <p className="pppl">PLASTERING</p>
        </div>
        <div className="mm">
          <img src={pro} alt="" className='pro3'/>
          <p className="pppl">BUILDING</p>
        </div>
        <div className="mm">
          <img src={pro10} alt="" className='pro3'/>
          <p className="pppl">CCTV INSTALLATION</p>
        </div>
        <div className="mm">
          <img src={pro2} alt="" className='pro3'/>
          <p className="pppl">ELECTRICAL</p>
        </div>
        <div className="mm">
          <img src={pro5} alt="" className='pro3'/>
          <p className="pppl">LAPA</p>
        </div>
        <div className="mm">
          <img src={pro11} alt="" className='pro3'/>
          <p className="pppl">GATE MOTOR INSTALLATION</p>
        </div>
        <div className="mm">
          <img src={pro1} alt="" className='pro3'/>
          <p className="pppl">PLUMBING</p>
        </div>
        <div className="mm">
          <img src={pro9} alt="" className='pro3'/>
          <p className="pppl">SOLAR INSTALLATION</p>
        </div>
        <div className="mm">
          <img src={pro4} alt="" className='pro3'/>
          <p className="pppl">PAVING</p>
        </div>
      </div>
    </div>
  )
}

export default Works
