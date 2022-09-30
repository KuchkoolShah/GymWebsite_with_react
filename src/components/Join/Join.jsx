import  React from  'react'
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Join.css'
const  Join =()=>{
        const form = useRef();
        const sendEmail = (e) => {
                e.preventDefault();
            
                emailjs.sendForm('service_ozfduqp', 'template_izsaz7l', form.current, 'woC4oN8IMp7HTUeTA')
                  .then((result) => {
                      console.log(result.text);
                  }, (error) => {
                      console.log(error.text);
                  });
              };

    return(
       <div className='join'>
             <div className='left-j'>
             <hr/>
                    <div>
                            <span className='strock-text '>Ready To</span>
                            <span>Level Up</span>
                    </div>
                    <div>
                    <span >Your Body </span>
                    <span  className='strock-text '>With Us ?</span>
            </div>


            </div>
                         <div className='right-j'>
                         <form   className='email-container'  ref={form} onSubmit={sendEmail}>
                         <input type="email" name='user_email' placeholder='Please Enter  Email'/>
                         <button className="btn btn-j"> join now</button>
                         </form>
                         </div>
       </div>
    )
}
export default Join