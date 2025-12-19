import React from 'react';
import { useEffect } from 'react';
function SignUp() {
    useEffect(() => {
    document.title = "Signup – Zerodha";
  }, []);
    return ( 
        <h1>Sign Up</h1>
     );
}

export default SignUp;