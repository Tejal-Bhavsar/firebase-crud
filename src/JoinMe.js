import React, { useState } from 'react'
import './JoinMe.css'
import  db  from './firebases'


export default function JoinMe() {
    const  [ name,setName ] = useState()
    const [ email, setEmail ] = useState()
    const [ message , setMessage ] = useState()

    const Submit = (e) => {
        e.preventDefault()
        db.collection("contacts").add({
            name: name,
            email: email,
            message: message
        })
        .then(() =>(
            alert("Message Submitted Successfully.")
        ))
        .catch((error) =>(
            alert(error.message)
        ))
        setName("");
        setEmail("");
        setMessage("");
    }

    return (
        <div className="joinme">
            <h1>Contacat Me</h1>
            
            <input type="text" value={name} placeholder="enter your name here"
            onChange={(e) => setName(e.target.value)} />
            
            <input type="email" value={email} placeholder="enter your email here" onChange={(e)=> setEmail(e.target.value)} />

          
            <textarea placeholder="message" value={message} onChange={ (e)=> setMessage(e.target.value)} ></textarea>
            <button type="submit" onClick={Submit} >Submit</button>

        </div>
    )
}
