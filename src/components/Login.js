import React from 'react';
import { useSession, signIn, signOut } from "next-auth/react"

const Login = () => {
    return (
        <div className='grid place-items-center m-5'>
            <button onClick={signIn} className='bg-blue-500 rounded-full p-2'>Facebook login</button>
        </div>
    );
};

export default Login;