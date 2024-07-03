import React, { useState } from 'react'
import videocard from '../images/videocard.png'
import dark from '../images/dark.png'
import portfolio from '../images/portfolio.png'
import './style.css'
const Projects = () => {

    // const [ispulsing, setIspulsing] = useState(false);
    // const handleClick = () => {
    //     setIspulsing(true);
    // }

    // const handleAnimationEnd = () => {
    //     setIspulsing(false);
    // }


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
                        <center><a href="https://omkar-abhang.github.io/VideoCard/" className="btn btn-primary">Open Project</a>
                        </center>
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
                        <center><a href="https://omkar-abhang.github.io/Dark_Chuckels/" className="btn btn-primary">Open Project</a>
                        </center>
                    </div>
                </div>
                <div className="card" >
                    <img src={portfolio} className="card-img-top" alt="Personal_Portfolio" />
                    <div className="card-body">
                        <h5 className="card-title">Personal_Portfolio</h5>
                        <p className="card-text">This is personal portfolio page where i put my acdemics and all about me </p>
                        <center><a href="Add link here" className="btn btn-primary">Open Project</a></center>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Projects