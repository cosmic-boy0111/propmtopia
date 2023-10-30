'use client'
import React, { useState } from 'react'

const Login = () => {

    const [user, setUser] = useState({
        name : '',
        email : '',
        password : '',
    })

    const handleInput = (e) => {
        const name = e.target.name
        const value = e.target.value
        setUser((prev)=>{
            return {...prev, [name]: value}
        })
    }

    const handleSubmit = async () => {

        console.log('under submit')

        const response = await fetch('/api/user/login',{
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(user)
        })
        const data = await response.json();
        console.log(data);

    }

  return (
    <div style={{
        width : '450px',
        padding : '1rem',
        display : 'flex',
        flexDirection : 'column',
    }} >
        <div  style={{
            display:'flex',
            flexDirection: 'column',
            marginBottom:'.5rem'
        }}>
            <label htmlFor="name">Name</label>
            <input 
                type="text" 
                name="name" 
                id="name" 
                value={user.name}
                onChange={handleInput}
                placeholder='Enter your name' 
                style={{
                    marginTop:'.5rem',
                    border : 'none',
                    outline : 'none',
                    padding : '.5rem'
                }}
            />
        </div>
        <div  style={{
            display:'flex',
            flexDirection: 'column',
            marginBottom:'.5rem'
        }}>
            <label htmlFor="email">Email</label>
            <input 
                type="email" 
                name="email" 
                id="email" 
                value={user.email}
                onChange={handleInput}
                placeholder='Enter your email' 
                style={{
                    marginTop:'.5rem',
                    border : 'none',
                    outline : 'none',
                    padding : '.5rem'
                }}
            />
        </div>
        <div  style={{
            display:'flex',
            flexDirection: 'column',
            marginBottom:'.5rem'
        }}>
            <label htmlFor="password">Password</label>
            <input 
                type="password" 
                name="password" 
                id="password" 
                value={user.password}
                onChange={handleInput}
                placeholder='Enter your password' 
                style={{
                    marginTop:'.5rem',
                    border : 'none',
                    outline : 'none',
                    padding : '.5rem'
                }}
            />
        </div>
        <div  style={{
            display:'flex',
            flexDirection: 'column',
            marginTop:'1rem'
        }}>
            <button onClick={handleSubmit} style={{
                width:'100%',
                padding:'.5rem',
                backgroundColor:'#d66031'
            }} >
                Create Account
            </button>
        </div>
    </div>
  )
}

export default Login