import React, { useState } from 'react'
import videocard from '../images/videocard.png'
import dark from '../images/dark.png'
import portfolio from '../images/portfolio.png'
import './style.css'

import { Link } from 'react-router-dom'
const Projects = () => {

    const [animate, setAnimate] = useState(false);

    const handleClick = () => {
        setAnimate(true);
        setTimeout(() => setAnimate(false),300)
    };



    return (


        <div>
            <h1 style={{ backgroundColor: '#4F6F52', color: 'aliceblue' }} className="p-2 mt-2"><center>Projects</center></h1>

            <div className="project" id="pro" style={{ display: 'flex', flexWrap: 'wrap', msWrapFlow: 'auto' }}>
                <div className="card" >
                    <img src={videocard} className="card-img-top" alt="VideoCard" />
                    <div className="card-body">
                        <h5 className="card-title">Video Card App</h5>
                        <p className="card-text"> This app help you to store your favorite vidoes category vise.In that we can make
                            the Bucket and in that bucket you paste name and the video.
                            <br />
                            <hr /><strong>For developing this webapp I Use React.Js framework of Javascript.</strong>
                        </p>
                        <Link to="https://omkar-abhang.github.io/VideoCard/"> <center> <button className={animate ? "animated-button btn btn-primary" : ''} 
                        onClick={handleClick}>Open Project</button> </center> </Link>

                    </div>
                </div>

                <div className="card">
                    <img src={dark} className="card-img-top" alt="Dark_Chuckels" />
                    <div className="card-body">
                        <h5 className="card-title">Dark_Chuckels App</h5>
                        <p className="card-text">This app gave us some jokes.In that we can choose the which type of jokes we want.
                            <br />
                            <hr /><strong>For developing this webapp I Use React.Js framework of Javascript.</strong>
                        </p>
                        <Link to="https://omkar-abhang.github.io/Dark_Chuckels/"><center> <button className={animate ? "animated-button btn btn-primary" : ''} 
                        onClick={handleClick} >Open Project</button></center></Link>

                    </div>
                </div>
                <div className="card" >
                    <img src={portfolio} className="card-img-top" alt="Personal_Portfolio" />
                    <div className="card-body">
                        <h5 className="card-title">Personal_Portfolio</h5>
                        <p className="card-text">This is personal portfolio page where i put my acdemics and all about me </p>
                        <Link to="Add link here"><center> <button className={animate ? "animated-button btn btn-primary" : ''} 
                        onClick={handleClick} >Open Project </button></center></Link>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Projects