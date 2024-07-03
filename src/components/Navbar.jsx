import React from 'react';
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';


import './style.css'
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <div className='p-1'>
      <nav className="navbar navbar-expand-lg bg-body-tertiary mb-2  bg-light text-dark " style={{ border: '3px solid black' }}>
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link className="navbar-brand " to="/" style={{ color: '#4F6F52',fontSize: "30px",fontWeight: '600', position: 'auto' }}>Omkar
            Abhang</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">

                <Link className="nav-link active" aria-current="page" to='/aboutme' >About Me</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to='education'>Education</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to=''>Skills</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to='/projects'>Projects</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to='/contactme'>Contact Me</Link>
              </li>


            </ul>
          </div>
          <Link to="https://drive.google.com/file/d/1DjjeYvCFiMkw-dSV40j_XJiEAf1UxDyG/view?usp=drivesdk">
          <button type="button" className="btn btn-primary">View Resume</button>
          </Link>
        </div>
      </nav></div>
  )
}

export default Navbar