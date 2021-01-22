import React from 'react';
import './contact.styles.scss';

function Contact() {
    return (
        <div className='contact__container'>
           <div className='contact__addressDetails'> 
                <h1 className='contact__heading'> In Case of any concern, Contact US </h1>
                <h2 className='contact__title'>Registered Office Address</h2>
                <p>Shivkrupa Colony,</p>
                <p>Shirur Tajband, Latur, Maharshtra</p>
                <p>Latur -413214, India</p>
           </div>  
           <div className='contact__phoneNumber'>
                <h3>Telephone: 7972544311</h3>
                <p>Email: <a href="mailto:dure.kb@gmail.com"> dure.kb@gmail.com </a></p>
           </div>
        </div>
    )
}

export default Contact
