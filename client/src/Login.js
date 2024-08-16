import React, {useState} from 'react';
import axios from 'axios'

export default function Login() {
    
    return (
        <>
            <div className="Login">
                <input 
                    type="text"
                    placeholder='Enter your ID'
                /> <br />
                <input 
                    type="password"
                    placeholder='Enter your Password'
                />
                <button onClick={console.log("login clicked")}>Login</button>
            </div>
            
        </>
    );
}