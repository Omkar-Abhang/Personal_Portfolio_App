
import React from 'react'
import git from '../images/github.png'
import linkedin from '../images/linkedin.png'
import './style.css'
import './cover.css'
import profile from '../images/omkar_image.jpg'

const Cover = () => {
        return (

                <div style={{ backgroundColor: '#86A789',padding:'2px' ,boxShadow:'0 0 10px black'}} className='mb-3 card-body'>
                        <div style={{ color: 'aliceblue', position: 'relative',fontSize: '30px' }} className='mb-2 h-4 p-2'>
                                Hi I'm 
                        <div className='container'>
                                <div className='word'>Web Developer.</div>
                                <div className='word'>MERN Stack Developer.</div>
                                <div className='word'>Database Administrator.</div>
                        </div>
                       
                        <img className='profilepic' src={profile} alt='Profile'></img>
                      

                        </div>
                        <p style={{
                                color: 'white',
                                fontSize: '20px',
                                fontWeight: '400',
                                marginLeft: '15px'
                        }}>
                                Self-driven,quick learner,quick starter,Passionate programmer,<br />with a curious mind who enjoy solving a
                                complex and
                                challenging real-world problems.
                        </p>
                        
                        <a href="https://www.linkedin.com/in/omkar-abhang-586236250" style={{
                                position: 'relative',
                                left: '47px',
                                top: '4px',
                               
                        }}>
                                <img  src={linkedin} alt='LinkedIn' style={{ height: '60px',
                                width: '60px', borderRadius: '20px'}} />
                        </a>


                       

                        <a href="https://github.com/Omkar-Abhang" style={{
                                
                                position: 'relative',
                                left: '119px',
                                top: '4px',
                                
                        }} >
                                 <img src={git} alt='git' style={{height: '60px',
                                width: '60px',borderRadius: '20px'}}/>
                        </a>

                </div>
        )
}

export default Cover