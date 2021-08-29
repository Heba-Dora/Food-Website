import React from 'react'
import '../Styles/Contact.css'


function Contact() {
    return (
        <div className="contactInfo">
            <h2>Contact Us</h2>
                <form>
                    <label htmlFor="name">Full Name</label>
                    <input type="text" placeholder="Enter your name" name="name"/>
                    <label htmlFor="email">Email Address</label>
                    <input type="email" placeholder="Enter your email" name="email"/>
                    <label htmlFor="message">Message</label>
                    <textarea name="message" rows="12" placeholder="Write your message here"></textarea>
                    <button type="submit">Submit</button>
                </form>  
                
        </div>
    )
}

export default Contact
