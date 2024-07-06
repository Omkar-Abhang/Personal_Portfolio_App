import React, { useState } from 'react'
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

    const language=[
        {
        id:1,
        name:"Python",
        detail:"python is robust language use for machine learning and aftificial intelligence.",
        image:`${python}`
        },
        {
        id:2,
        name:"Node.Js",
        detail:"Nodejs is cross-platform,open source javascript runtime environment.",
        image:`${nodejs}`
        },
        {
        id:3,
        name:"Java",
        detail:"Java is high level,class-based,object-oriented programming language.",
        image:`${java}`
        },
        {
            id:4,
            name:"React.JS",
            detail:"React is library of javascript for web and native user interface.",
            image:`${react}`
            },
        {
        id:5,
        name:"Mysql",
        detail:"Mysql is an open-source relational database management system.",
        image:`${mysql}`
        },
        {
        id:6,
        name:"HTML",
        detail:"HTML is the standard markup language for web pages.",
        image:`${html}`
        },
        {
        id:7,
        name:"CSS",
        detail:"CSS is the language we use to style an HTML document.",
        image:`${css}`
        }
       
        ];

        const tools=[
            {
            id:1,
            name:"Github",
            detail:"Github is a developer platform that allows developers to create,store,manage and share their code.",
            image:`${github}`
            },
            {
            id:2,
            name:"Eclipse",
            detail:"Eclipse is an integrated development environment used in computer programming",
            image:`${eclipse}`
            },
            {
            id:3,
            name:"VScode",
            detail:"vs code is a code editor redefined and optimized  for building and debugging modern web and cloud aplication.",
            image:`${vscode}`
            },
            {
            id:4,
            name:"Linux",
            detail:"Linux is robust operating system.",
            image:`${linux}`
            },
        ]

    const [selectedSkill,setselectedSkill]=useState(null);
    const [selectedtool,setselectedtool]=useState(null);

    const handleDoubleClick=(skill)=>{
        setselectedSkill(prevselectedskill =>prevselectedskill && skill.id?null:skill);
    };

    const handleDoubleClicktool=(item)=>{
        setselectedtool(prevselectedskill =>prevselectedskill && item.id?null:item);
    };

    return (
        <div>
            <h1 style={{ backgroundColor: '#4F6F52', color: 'aliceblue' }} className="p-2 mt-2" id="skill"><center>Skills</center></h1>
            <div className="skill">
            
                <div style={{ margin: '20px', boxShadow: '0 0 10px black ', padding: '10px' }}>
                    <h2>Languages And Databases</h2><hr />
                    <div className="item" style={{
                        display: 'flex', height: '10rem', gap: ' 80px', justifyContent: 'center', alignItems: 'center',
                        flexWrap: ' wrap', overflowY: ' scroll'
                    }}>
                    {language.map((skill)=>(
                        <div><img src={skill.image} alt="Skills" style={{ height: '110px', width: '130px' }} key={skill.id} 
                        onDoubleClick={()=>handleDoubleClick(skill)} className='skill-item' /><br /><center><strong>{skill.name}</strong></center></div>
                        ))}
                        {selectedSkill && (<div className='skill-details'><p>{selectedSkill.detail}</p></div>)}
                    </div>
                </div>


                <div style={{ margin: ' 20px', boxShadow: '0 0 10px black', padding: '10px' }}>
                    <h2>Tools And OS</h2><hr />
                    <div className="item" style={{
                        display: 'flex', 'height': '10rem', gap: ' 80px', justifyContent: ' center',
                        alignItems: ' center', flexWrap: 'wrap', overflowY: 'scroll'
                    }}>
                    {tools.map((item)=>(
                        <div><img src={item.image} alt="Skills" style={{ height: '110px', width: '130px' }} key={item.id} 
                        onDoubleClick={()=>handleDoubleClicktool(item)} className='skill-item' /><br /><center><strong>{item.name}</strong></center></div>
                        ))}
                        {selectedtool && (<div className='skill-details'><p>{selectedtool.detail}</p></div>)}
                        {/* <div><img src={github} alt="Github" style={{ height: '110px', width: '130px' }} /><br /><center>Github</center></div>
                        <div><img src={linux} alt="Linux" style={{ height: '110px', width: '130px' }} /><br /><center>Linux</center></div>
                        <div><img src={vscode} alt="vs code" style={{ height: '110px', width: '130px' }} /><br /><center>VS Code</center></div>
                        <div><img src={eclipse} alt="Eclipse" style={{ height: '110px', width: '130px' }} /><br /><center>Eclipse</center></div> */}

                    </div>
                </div>



            </div>

        </div>
    )
}

export default Skills