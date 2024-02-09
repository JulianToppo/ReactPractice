import React from 'react'
import { emailVerificationMail } from '../utils/firebase/constants';
import { useNavigate } from 'react-router-dom';

const VerifyMail = () => {
    const navigate = useNavigate()
    const verifyMailOnclickHanlder=async(e)=>{
        e.preventDefault();
        const requestObj={
            requestType:"VERIFY_EMAIL",
            idToken:localStorage.getItem("token"),
           
        }

        try {
            const post = await fetch(emailVerificationMail, {
              method: "POST",
              body: JSON.stringify(requestObj),
              headers: {
                "Content-Type": "application/json",
              },
            });
            
      
            const data = await post.json();
            if (post.ok) {
              console.log(" Email Verification successfully sent");
              console.log(post,data)
              navigate('/loginsuccess')
         
            } else {
              throw new Error(data.error.message);
            }
          } catch (error) {
            console.log(error)
          }
    }
    return (
    <div>
        
        <button className='p-2 bg-green-200' onClick={verifyMailOnclickHanlder}>Verify Mail</button>
    </div>
  )
}

export default VerifyMail