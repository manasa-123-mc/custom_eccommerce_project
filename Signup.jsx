// import { useState } from 'react'

// import './App.css'

// function Signup() {
 

//   return (
//     <>
 
//      <form>
//       <input type='text'placeholder='enter ur name'/>
//       <br/>
//       <input type='email'placeholder='enter ur email'/>
//       <br/>
//       </form>
//       <input type='password'placeholder='enter ur password'/>
//       <br/>
//       <input type='number'placeholder='enter ur number'/>
//           <br/>
//       <button>sign up</button>
//     </>
//   )
// }

// export default Signup
import React from 'react';

function SignUp() {
    return (
        <>
            <h1 className='head1'>Sign Up</h1>
            <form className='h1'>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />
                <br/>

                <label htmlFor="email">Email Address:</label>
                <input type="email" id="email" name="email" required />
                <br/>

                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required />
                <br/>

                <button className="black"  type="submit">Sign Up</button>
                <hr/>
            </form>
        </>
    );
}

export default SignUp;
