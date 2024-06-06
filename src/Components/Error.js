import React from 'react'
import {useNavigate } from "react-router-dom";

const Error = () => {
const history = useNavigate();

  return (
   <>
    
    <div className='container'>
        <div className="error d-flex felx-column justify-content-lg-center-items-center">
            {/* <img src="./404.png" alt="error" className='errorimg' /> */}
            <h4>404 Error ! Page Not Found 😭</h4>
            <button className='btn btn-primary' onClick={()=>history("/")}>Redirect Login Page</button>

        </div>

    </div>
   
   </>
  )
}

export default Error
