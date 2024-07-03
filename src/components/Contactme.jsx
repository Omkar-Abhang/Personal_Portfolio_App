import React, { useState } from 'react'
import smartphone from '../images/smartphone-call.png'
import github from '../images/github-sign.png'
import linkedin from '../images/linkedin.jpeg'
import email from '../images/email.png'
import './style.css'
import axios from 'axios'

const Contactme = () => {

  const [formData, setFormData] = useState({
      phone: '',
      email: '',
      Message: ''
    })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: [e.target.value] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/submit',formData)
      .then((res) => {
        alert('Data submitted successfully');
      })
      .catch((err) => {
        alert('Error submitting data');
      });

  };

  return (
    <>
      <h1 style={{ backgroundColor: '#4F6F52', color: 'aliceblue' }} className="pt-2 mt-2" id="contact"><center>Contact Me</center></h1>
      <div className="contactme" id="contactme">

        <div className="contactform">
          <form className='card-body' onSubmit={handleSubmit}>
            <center><h1>Get in touch with me!</h1></center>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">Phone Number</label>
              <input type="text" className="form-control" id="phone" placeholder="mob /tel number" name="phone" onChange={handleChange} />
            </div>
            <div className="mb-3">
              <label htmlFor="emailadd" className="form-label">Email address</label>
              <input type="email" className="form-control" id="email" placeholder="name@example.com" name="email" onChange={handleChange} />
            </div>
            <div className="mb-3">
              <label htmlFor="feedback" className="form-label">Feedback</label>
              <textarea className="form-control" id="feedback" rows="4" name="Message" onChange={handleChange}></textarea>
            </div>
            <center><button type="submit" className="btn btn-success" style={{ marginBottom: '10px', width: '50%' }}>Submit</button></center>
          </form>
        </div>

        <div className="contactdet">
          <table>
            <tr className='mb-2'>
              <th colSpan="2">
                <center><h1>Contact Me</h1></center>
              </th>
            </tr>
            <tr>
              <td><img src={smartphone} alt="No."
                style={{ height: '30px', width: ' 30px', backgroundSize: 'cover', marginRight: '10px' }} /></td>
              <td><a href="tel:+91 7249843468">+91 7249843468</a></td>
            </tr>

            <tr>
              <td><img src={email} alt="mailId"
                style={{ height: '30px', width: ' 30px', backgroundSize: 'cover', marginRight: '10px' }} /></td>
              <td><a href="mailto:omkarabhang36@gmail.com">omkarabhang36@gmail.com</a></td>
            </tr>


            <tr>
              <td><img src={github} alt="github"
                style={{ height: '30px', width: ' 30px', backgroundSize: 'cover', marginRight: '10px' }} /></td>
              <td><a href="https://github.com/Omkar-Abhang">https://github.com/Omkar-Abhang</a></td>
            </tr>

            <tr>
              <td><img src={linkedin} alt="linkedin"
                style={{ height: '30px', width: ' 30px', backgroundSize: 'cover', marginRight: '10px' }} /></td>
              <td style={{ overflow: 'clip' }}><a
                href="https://www.linkedin.com/in/omkar-abhang-586236250">https://www.linkedin.com/in/omkar-abhang-586236250</a>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </>
  )
}

export default Contactme