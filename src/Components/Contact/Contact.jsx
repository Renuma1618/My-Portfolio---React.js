import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import email_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'
const Contact = () => {

    const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "96b9ec5e-ce6d-402a-8114-0bd70550aaee");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
        alert("Emailsent successfully!");
      console.log("Success", res);
    }
  };


  return (
    <div id='contact'className='contact'>
        <div className='contact-title'>
            <h1>Get in Touch</h1>
            <img src={theme_pattern} alt=''></img>
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Lets Talk</h1>
                <p>If you have any questions or just want to say hi, feel free to reach out!</p>
            
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={email_icon} alt=''/><p>renuka.nandikolla@gmail.com</p>
                    </div>

                    <div className="contact-detail">
                     <img src={call_icon} alt=''/><p>  +46 768955970</p>
                    </div>

                    <div className="contact-detail">
                    <img src={location_icon} alt=''/><p>Sweden</p>  </div>
                </div>
            </div>
       

        <form onSubmit={onSubmit}className='contact-right'>
            <label htmlFor=''>Your Name</label>
            <input type='text' placeholder='Enter your name' />
            <label htmlFor=''>Your Email</label>
            <input type='email' placeholder='Enter your email' name='email'/>
            <label htmlFor=''>Your Message</label>
            <textarea placeholder='Enter your message' name='message' rows='8'></textarea>
            <button type='submit' className='contact-submit'>Submit now</button>
            

        </form>

       </div>
    </div>
  )
}

export default Contact
