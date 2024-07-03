"use client"
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Aboutme from './components/Aboutme';
import Contactme from './components/Contactme';
import Education from './components/Education';
import Projects from './components/Projects';
import Cover from './components/Cover';


const App = () => {
    return (
        <div className='p-1'>
            <BrowserRouter>
                <div>
                    <Navbar />
                    <Cover />
                    <Aboutme />
                    <Education />
                    <Skills />
                    <Projects />
                    <Contactme />

                </div>
                <Routes>
                    <Route path='/navbar' element={<Navbar />} />
                    <Route path='/aboutme' element={<Aboutme />} />
                    <Route path='/education' element={<Education />} />
                    <Route path='/submit' element={<Contactme />} />
                    <Route path='/projects' element={<Projects />} />
                    <Route path='/skills' element={<Skills />} />
                    <Route path='/cover' element={<Cover />} />

                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App