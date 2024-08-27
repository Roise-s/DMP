import './team.css'
import man1 from '../../../assets/man1.jpeg'
import man2 from '../../../assets/man2.jpeg'
import man3 from '../../../assets/man3.jpeg'
import man4 from '../../../assets/man4.jpeg'

const Team = () => {
  return (
    <div className='team'>
      <p className="dfdkb7098">Meet Our Team</p>
      <p className="dcfvfhkj54785sdf">Creative Minds Always Think Something.</p>
      <div className="vhbdsmmnxc234">
        <div className="vhbfvj089cjhdb324">
            <img src={man1} alt="" className='dfjdfkbhb23jkf90rkjewe2' />
            <p className="sadkn34jsdb23097kbcc">Peter Maswanganyi</p>
            <p className="dsnfdhkbfhkbhjfbkfbh234bhvfdv">Director</p>
        </div>

        <div className="vhbfvj089cjhdb324">
            <img src={man2} alt="" className='dfjdfkbhb23jkf90rkjewe2' />
            <p className="sadkn34jsdb23097kbcc">Ndivhuwo Silunwe</p>
            <p className="dsnfdhkbfhkbhjfbkfbh234bhvfdv">Technical Manager</p>
        </div>
        
        <div className="vhbfvj089cjhdb324">
            <img src={man3} alt="" className='dfjdfkbhb23jkf90rkjewe2' />
            <p className="sadkn34jsdb23097kbcc">Lawrence Seakamela</p>
            <p className="dsnfdhkbfhkbhjfbkfbh234bhvfdv">Electrician</p>
        </div>
        
        <div className="vhbfvj089cjhdb324">
            <img src={man4} alt="" className='dfjdfkbhb23jkf90rkjewe2' />
            <p className="sadkn34jsdb23097kbcc">Gidion Phaswane</p>
            <p className="dsnfdhkbfhkbhjfbkfbh234bhvfdv">Carpenter</p>
        </div>
      </div>
    </div>
  )
}

export default Team
