import React, {useEffect, useState} from "react";
import Slider from 'react-slider'
import './Sliderp.css'
const MIN = 0;
const MAX = 10000;

function Sliderp(props){
    const [values,setValues] = useState([MIN,MAX])
    const changePrice = ()=>props.price(values)
    useEffect(()=>{
        changePrice()
    },[values])
    return (
        
        <div className="bigbox">
            <div className="box">
                <h4>Price <span>Range</span></h4>
                    <div className={"value"}>${values[0]} - ${values[1]}</div>
                <Slider className = {'newSlider'} 
                onChange = {setValues}
                value = {values}
                min ={MIN}
                max = {MAX}
                />
                
            </div>
        </div>
    )
}
export default Sliderp;