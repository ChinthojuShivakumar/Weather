import React, { useState } from "react";
import axios from "axios";
import './WhetherData.css'


let Whether = () => {

    const [city, setCity] = useState("")
    const [tem, setTem] = useState(null)
    const [newtem, setNewTem] = useState(null)
    const [speed, setNewSpeed] = useState(null)
    const [country, setCountry] = useState(null)
    const [whetherDisc, setWhetherDisc] = useState(null)



    let apiKey = 'd597fae1a39846cc1264a5a3fd447c2d'


    let Submitting = (e) => {
        e.preventDefault()
        const city = e.target[0].value

        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`).then((val) => {

            setTem(val.data.main.temp)
            setNewTem(val.data.main.humidity)
            setNewSpeed(val.data.wind.speed)

            console.log(val);
            setCity(val.data.name);
            setCountry(val.data.sys.country)
            setWhetherDisc(val.data.weather[0].description)

        }).catch((error)=>{
            console.error(error);
            alert('Input should not be empty')
        })


    }

    return (
        <div className="container d-flex flex-column justify-content-center align-items-center flex-1 dis">
            <div className="title">
                <h1>Whether Api</h1>
            </div>
            
            <form onSubmit={Submitting} className="formbox">
                <div className="formheads">
                    <input id="text" type="text" />
                    <input id='btn' type="submit" value="Submit" />
                </div>
                <div className="formbody">
                    <div className="item1">
                        <p>{city}</p>
                        <p>{country}</p>
                    </div>
                    <div className="item2">
                        <p>{tem}°C</p>
                        <p>{whetherDisc}</p>
                    </div>
                    <div className="item3">
                        <p>Humidity: {newtem}</p>
                        <p>Speed: {speed}</p>
                    </div>
                </div>
                
            </form>



        </div>
    )
}

export default Whether