import React from "react";
import { useEffect,useState } from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import "./Reserve.css"

function Reserve() {
    const [id , setId] = useState('')
    const [username, setUsername] = useState('');
    const [email , setEmail] = useState('')
    const [dormitory , setDormitory] = useState('')
    const [room_id , setRoom_id] = useState('')
    const [room_rental, setRoom_rental] = useState('')
    const [check_in  , setCheck_in ] = useState('')
    const [check_out  , setCheck_out ] = useState('')
    const [formUser,setUser] = useState({})
    const [reserlist,setReservation  ] = useState([])
    const [checkinfo,setStatus] = useState(false)
    const [isReserve, setIsreserve] = useState(false)

    let use = "oakoak22"
    const datauser= async()=>{
        const res = await fetch(`http://127.0.0.1:8000/getuserdata?user=${use}`,{
            method:'GET'
        })
        res.json().then(res=>{setUser(res)
            setReservation(res.Reservation)})
        
        setStatus(true)
        
    }

    useEffect(()=>{ 
    
        datauser()
        
    },[])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(`http://127.0.0.1:8000/createReservations?email=${email}&check_in_date=${check_in}&check_out_date=${check_out}&dorm_name=${dormitory}&room_id=${room_id}`, {
          method: 'POST'
        });
        const data = await response.json();
        console.log(data)
        if (data!="unsuccess") {
            setIsreserve(true)
        } else { 
            setIsreserve(false)
        }
        console.log(id);
    }
    return (
        <div className="reserve_form_container">
            {isReserve ? (
                <h1>Reservation Success!</h1>
            ) : (
            <form className="reserve-form" onSubmit={handleSubmit}>
                <h2 className="Top">Reservation Form</h2>
                
                <label>Name : {formUser.Name}</label>
                <label>Username : {formUser.Username}</label>
                <label>Phone Number : {formUser.Phone_number}</label>
                
                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="text" placeholder="Email" />

                <label htmlFor="dormitory">Dormitory name</label>
                <input value={dormitory} onChange={(e) => setDormitory(e.target.value)}type="text" placeholder="Dormitory name" />
                
                <label htmlFor="room_id">Room ID</label>
                <input value={room_id} onChange={(e) => setRoom_id(e.target.value)}type="text" placeholder="Room ID" />
                
                <label htmlFor="room_rental">Rental</label>
                <input value={room_rental} onChange={(e) => setRoom_rental(e.target.value)}type="text" placeholder="Room Rental" />
                
                <label htmlFor="check_in">Date CheckIn</label>
                <input value={check_in} onChange={(e) => setCheck_in(e.target.value)}type="text" placeholder="Date CheckIn" />

                <label htmlFor="check_out">Date CheckOut</label>
                <input value={check_out} onChange={(e) => setCheck_out(e.target.value)}type="text" placeholder="Date CheckIn" />
                <button type="submit">Reserve</button>
            </form>
            )}
        </div>
    );
}
export default Reserve