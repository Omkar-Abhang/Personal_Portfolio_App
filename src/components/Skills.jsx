import React from 'react'
import java from '../images/java.jpeg'
import python from '../images/python-logo-1-300x300.jpg'
import html from '../images/html5.png'
import mysql from '../images/mysql-logo-1-300x300.jpg'
import nodejs from '../images/nodejs.png'
import css from '../images/css3.png'
import react from '../images/react.png'
import github from '../images/github.png'
import eclipse from '../images/eclipse.jpeg'
import vscode from '../images/vs.jpeg'
import linux from '../images/linux.jpeg'
import './style.css'
const Skills = () => {
  return (
    <div>
       <h1 style={{backgroundColor: '#4F6F52', color: 'aliceblue'}} className="p-2 mt-2" id="skill"><center>Skills</center></h1>
    <div className="skill">
        <div style={{margin: '20px',boxShadow:'0 0 10px black ',padding: '10px'}}>
            <h2>Languages And Databases</h2><hr/>
        <div className="item" style={{display: 'flex',height:'10rem',gap:' 80px',justifyContent: 'center',alignItems: 'center',
        flexWrap:' wrap',overflowY:' scroll'}}>
            <div><img src={python} alt="Python" style={{height: '110px',width: '130px'}}/><br/><center>Python</center></div>
            <div><img src={nodejs} alt="Nodejs" style={{height: '110px',width: '130px'}}/><br/><center>Node.Js</center></div>
            <div><img src={java} alt="Java" style={{height: '110px',width: '130px'}}/> <br/><center>Java</center></div>
            <div><img src={mysql} alt="mysql" style={{height: '110px',width: '130px'}}/><br/><center>MYSQL</center></div>
            <div><img src={html} alt="HTML5" style={{height: '110px',width: '130px'}}/><br/><center>HTML</center></div>
            <div><img src={css} alt="CSS" style={{height: '110px',width: '130px'}}/><br/><center>CSS</center></div>
            <div><img src={react} alt="ReactJS" style={{height: '110px',width: '130px'}}/><br/><center>ReactJS</center></div>
        </div>
        </div>
        <div style={{margin:' 20px',boxShadow:'0 0 10px black' ,padding: '10px'}}>
            <h2>Tools And OS</h2><hr/>
        <div className="item" style={{display: 'flex','height':'10rem',gap:' 80px',justifyContent:' center',
        alignItems:' center',flexWrap: 'wrap',overflowY: 'scroll'}}>
            <div><img src={github} alt="Github" style={{height: '110px',width: '130px'}}/><br/><center>Github</center></div>
            <div><img src={linux} alt="Linux" style={{height: '110px',width: '130px'}}/><br/><center>Linux</center></div>
            <div><img src={vscode} alt="vs code" style={{height: '110px',width: '130px'}}/><br/><center>VS Code</center></div>
            <div><img src={eclipse} alt="Eclipse" style={{height: '110px',width: '130px'}}/><br/><center>Eclipse</center></div>
            
        </div>
        </div>
        
    
        
    </div>

    </div>
  )
}

export default Skills