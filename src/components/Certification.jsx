import React, { useState } from 'react'
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import postman from '../images/postman.png'
import htmlcer from '../images/htmlcer.png'
import pythoncer from '../images/pythoncer.png'
import sql from '../images/sql.png'

import './style.css'


const Certification = ({filepath}) => {

    const defaultLayoutPluginInstance = defaultLayoutPlugin();
    const workurl='https://unpkg.com/pdfjs-dist@2.7.570/build/pdf.worker.min.js';

return (
        <>
            <h1 style={{ backgroundColor: '#4F6F52', color: 'aliceblue', border: '2px darkgreen' }}
                className="mt-2 p-2" id="education"><center>Certification</center></h1>

            <div style={{ boxShadow: '0 0 10px black', position: 'inherit', display: 'flex' }} className='certificate p-2'>


                <div className="card w-10 h-5" style={{ margin: '10px', border: '2px solid black' }}>
                    <img src={htmlcer} className="w-10 h-2" alt="VideoCard" />
                    <hr />
                    <div className="card-body">
                        <h4 className="card-title">HTML,CSS & Javascript Certification</h4>
                        <p><strong>Udemy</strong></p>
                        <hr />
                        <center> <button className='btn btn-dark' onClick={() => {
                            <div>
                                <Worker workerUrl={workurl}>
                                    <div style={{ height: '750px' }}>
                                        <Viewer fileUrl={filepath} plugins={[defaultLayoutPluginInstance]} />
                                    </div>
                                </Worker>
                            </div>
                        }}
                        >Open certificate</button></center>
                    </div>
                </div>
                <div className="card w-10 h-5" style={{ margin: '10px', border: '2px solid black' }}>
                    <img src={pythoncer} className="w-10 h-2" alt="VideoCard" />
                    <hr />
                    <div className="card-body">
                        <h4 className="card-title">Python Certification</h4>
                        <p><strong>Let's Upgrade</strong></p>
                        <hr />
                        <center> <button className='btn btn-dark' onClick={() => { }}>Open certificate</button></center>
                    </div>

                </div>
                <div className="card w-10 h-5" style={{ margin: '10px', border: '2px solid black' }}>
                    <img src={sql} className="w-10 h-2" alt="VideoCard" />
                    <hr />
                    <div className="card-body">
                        <h4 className="card-title">SQL Basics Certification</h4>
                        <p><strong>iNeuron</strong></p>
                        <hr />
                        <center> <button className='btn btn-dark' onClick={() => { }}>Open certificate</button></center>
                    </div>
                </div>
                <div className="card w-10 h-5" style={{ margin: '10px', border: '2px solid black' }}>
                    <img src={postman} className="w-10 h-2" alt="VideoCard" />
                    <hr />
                    <div className="card-body">
                        <h4 className="card-title">Postman Certification</h4>
                        <p><strong>Let's Upgrade</strong></p>
                        <hr />
                        <center> <button className='btn btn-dark' onClick={() => { }}>Open certificate</button></center>
                    </div>
                </div>


            </div>
        </>
    )
}
export default Certification