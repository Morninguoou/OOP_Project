import { useEffect, useState } from "react";
import "./Register.css"
import {Navigate,Link} from 'react-router-dom';

function Register() {
    const [name , setName] = useState("")
    const [lastname , setLastname] = useState("")
    const [email , setEmail] = useState("")
    const [username , setUsername] = useState("")
    const [password , setPassword] = useState("")
    const [user_phone , setUser_phone] = useState("")
    const [role , setRole] = useState("Owner")
    const [isRegis, setIsRegis] = useState(false)
    const [userlist,setUser] = useState({})
    const [errors,setEarror] = useState(false);
    const [message,setMessage] = useState("")
   
    const datauser= async()=>{
        const res = await fetch('http://127.0.0.1:8000/userlist',{
            method:'GET'
        })
        res.json().then(res=>setUser(res))
        .catch(err =>setEarror(err) )
        console.log(userlist)
    }
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await fetch(`http://127.0.0.1:8000/Register?Name=${name}&Lastname=${lastname}&Email=${email}&User_name=${username}&Password=${password}&User_phone=${user_phone}&Role=${role}`, {
          method: 'POST'
        });
        const data = await response.json();
        console.log(data);
         if (data === "unsuccess") {
            setIsRegis(false)
            
        } else {
            setIsRegis(true)
        }
        if(isRegis == false){
            setMessage("Please check your information ")  
        }
        datauser()
        
    };

    return (
        <div className="register-form-container">
            {isRegis ? (
                <Navigate to ="/Login"/>
            ) : (
            <form className="register-form" onSubmit={handleSubmit}>
                <h2 className="Top">Register</h2>
                <label htmlFor="role">Your Role</label>
                <select className="select-role" value = {role} onChange={(e) => setRole(e.target.value)}>
                    <option>Owner</option>
                    <option>User</option>
                </select>
                <label htmlFor="name">Name</label>
                <input value={name} onChange={(e) => setName(e.target.value)}type="name" placeholder="Name" />
                <label htmlFor="lastname">Lastname</label>
                <input value={lastname} onChange={(e) => setLastname(e.target.value)}type="lastname" placeholder="Lastname" />
                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="Email@example.com" />
                <label htmlFor="username">Username</label>
                <input value={username} onChange={(e) => setUsername(e.target.value)}type="username" placeholder="Username" />
                <label htmlFor="password">Password</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)}type="password" placeholder="Password" />
                <label htmlFor="user_phone">Phone Number</label>
                <input value={user_phone} onChange={(e) => setUser_phone(e.target.value)}type="user_phone" placeholder="Phone Number" />
                <button>Submit</button>
                <div className="returnMessage">{message}</div>
            </form>)}
            
        </div>
    )
}
export default Register