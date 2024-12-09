import React, { useState } from 'react'
import "../stylecss/Contact.css"    

function Contact() {
    const [formData,setFormData] =useState({name:"Raghul", email:"raghulselvaraj25@gmail.com", message: "I’d like to collaborate on a design challenge."})
    const handleChange =(e)=>{
      setFormData({...formData,[e.target.name]:e.target.value});
    }
    const handleSubmit=(e)=>{
       e.preventDefault();
       alert("Message Sent");
    };

  return (
    <section id='contact' className='contact'>
        <h2>Contact Me</h2>
        <form onSubmit={handleSubmit}>
           <input type='text' name='name' placeholder='Your Name' value={formData.name} onChange={handleChange} required />
        
           <input type='email' name='email' placeholder='Your Email' value={formData.email} onChange={handleChange} required />
           <textarea name='message' placeholder='Your Message' value={formData.message} onChange={handleChange} required />
           <button type='submit'>Send</button>
        </form>

    </section>
  )
}

export default Contact
