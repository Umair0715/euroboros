/* eslint-disable */
import { useState } from 'react';
import './style.css';
import axios from 'axios';

const Contact = ( { setShowContact }) => {
   const [name ,setName] = useState('');
   const [email ,setEmail] = useState('');
   const [description ,setDescription] = useState('');
   const [attachements,setAttachements] = useState('');
   const [loading , setLoading] = useState(false);

   const handleSubmit = async e => {
      e.preventDefault();
      const data = { email , description , name , attachements};
      if(email.length === 0) return alert('Please enter Your email.')
      if(description.length === 0) return alert('description is required.')
      try {
         setLoading(true);
         const { data : { message } } = await axios.post('http://localhost:5000/sendEmail' , data );
         alert(message);
         setLoading(false);
         setShowContact(false);
      } catch (err) {
         setLoading(false);
         alert(err);
         console.log(err);
      }
   }


   return (
      <div className='contact__popup'>
         <div className="contact__header">
            <i className="exit_icon" onClick={() => setShowContact(false)}></i>
            <h3>Leave us a message</h3>
         </div>
         <div className="contact__body">
            <form className="contact__form" onSubmit={handleSubmit}>
               <div>
                  <label htmlFor="name">Your name <span>(optional)</span></label>
                  <input 
                  type="text" 
                  id="name" 
                  value={name} 
                  placeholder='eg: harry , john etc'
                  onChange={e => setName(e.target.value)}
                  />
               </div>
               <div className='email'>
                  <label htmlFor="email">Email Address </label>
                  <input 
                  type="email" 
                  id="email" 
                  value={email} 
                  onChange={e => setEmail(e.target.value)}
                  placeholder='eg:john@gmail.com'
                  required
                  />
                  {  
                     (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/).test(email) ? '' :
                     email.length > 0 && <span 
                     className="font-14 color-red ml-2">
                        Invalid Email. Please Enter Valid Email
                     </span>
                  }
               </div>
               <div>
                  <label htmlFor="desc">How can we help you? </label>
                  <input 
                  type="text" 
                  id="desc" 
                  value={description} 
                  onChange={e => setDescription(e.target.value)}
                  placeholder='Description...'
                  required
                  />
               </div>
               <div>
                  <label htmlFor="attc">Attachements</label>
                  <input 
                  type="text" 
                  id="attc" 
                  value={attachements} 
                  placeholder='Add attachement'
                  onChange={e => setAttachements(e.target.value)}
                  />
               </div>
               <div className="contact__submit__btn">
                  <button type="submit"
                  disabled={!(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/).test(email)}
                  >
                     { loading ? "Sending..." : "Send"}
                  </button>
               </div>
            </form>
         </div>
      </div>
   )
}

export default Contact