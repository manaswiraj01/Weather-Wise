import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

export default function WeatherInfo(){
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Delhi",
        feels_like: 10.48,
        temp: 11.05,
        temp_min: 11.05,
        temp_max: 11.05,
        humidity: 87,
        weather: "mist",
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }

    return(
        <div style={{textAlign: "center"}}>
            <h1>Weather Wise</h1>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info = {weatherInfo}/>
        </div>
    )
}