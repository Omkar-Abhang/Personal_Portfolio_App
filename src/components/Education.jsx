import React,{useState} from 'react';
import './style.css'
import { Link } from 'react-router-dom';

const Education = () => {

  const[animate,setAnimate]=useState(false);

  const handleClick=()=>{
    setAnimate(false);
    setTimeout(()=>setAnimate(true),0)
  };


  return (
    <div style={{boxShadow:'0 0 10px black'}}>
      <h1 style={{backgroundColor:'#4F6F52', color: 'aliceblue',border:'2px darkgreen'}} className="mt-2 p-2" id="education"><center>Education</center></h1><hr/>
    <div className="edu">
        <div id="eduitem">
            <h3 style={{color:' #4F6F52'}}>Savitribai Phule Pune University</h3>
            <hr/>
            <p style={{color: 'rgb(230, 171, 94)'}}>Pune,Maharashtra,India</p>
            <p><strong>Degree:</strong>Masters In Computer Application</p>
            <p><strong>CGPA:</strong>8.52/10</p>
            <hr/>
            <p>I had done my graduation from G.H.Raisoni College Wagholi affiliated with Savitribai phule pune
                University.During my graduation i work with
                many technologies like Node.js,React.js,Web Technologies,Java,Python etc. </p>
            <Link to="https://drive.google.com/file/d/1DiBGzKrdMxwtoDt80dzuRXMoBBU6-Lom/view?usp=drivesdk">
            <center><button className={animate?"animated-button btn btn-primary":''} onClick={handleClick}>View Certificate</button></center></Link>
        </div>
        <div id="eduitem">
            <h3 style={{color:'#4F6F52'}}>S.M.G.J.College Ranjangaon Ganpati,Pune</h3>
            <hr/>
            <p style={{color: 'rgb(230, 171, 94)'}}>Pune,Maharashtra,India</p>
            <p><strong>Degree:</strong>12th(Science) (HSC)</p>
            <p><strong>Percentage:</strong>62.30/100</p>
            <hr/>
            <p>I completed my HSC from state board of Maharashtra under science stream.In that I scored 62.30%.</p>
            <Link to="https://drive.google.com/file/d/1DT3aByPtDxv6PdiGPirHolnPwCIX4seJ/view?usp=drivesdk">
            <center><button className={animate?"animated-button btn btn-primary":''} onClick={handleClick}>View Certificate</button></center></Link>
        </div>
        <div id="eduitem">
            <h3 style={{color: '#4F6F52'}}>S.A.P.Vidyalaya Dhoksangvi,Pune </h3>
            <hr/>
            <p style={{color: 'rgb(230, 171, 94)'}}>Pune,Maharashtra,India</p>
            <p><strong>Degree:</strong>10th (SSC)</p>
            <p><strong>Percentage:</strong>76.80/100</p>
            <hr/>
            <p>I completed my SSC from state board of Maharashtra.In that I scored 76.80%.</p>
            <Link to="https://drive.google.com/file/d/1DSn65drT8-HgpryPKLNbEXASyQ8p6mtx/view?usp=drivesdk">
            <center><button className={animate?"animated-button btn btn-primary":''} onClick={handleClick}>View Certificate</button></center></Link>
        </div>


    </div>

    </div>
  )
}

export default Education