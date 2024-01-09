import { useEffect, useState } from "react"
import WeatherForm from "./weatherForm";
import WeatherMainInfo from "./weatherMainInfo";
import styles from './weatherApp.module.css';
import Loading from "./loading";

export default function WeatherApp(){

    const [weather, setWeather] = useState(null);

// useEffect
// 3 Usos
// 1. Para ejecutar codigo al inicio del componente
// 2.
// 3.

    useEffect(() => {
        loadInfo();
    }, []);


    //Este useEffect cambia el titulo de la paigna

    useEffect(()=>{
        document.title = `Weather | ${weather?.location.name ?? ""}`;
    }, [weather]);

    async function loadInfo(city = 'mexico city'){
        try {
            const request = await fetch(`${process.env.REACT_APP_URL}&KEY=${process.env.REACT_APP_KEY}&Q=${city}`);

            const json = await request.json();

            setTimeout(()=> {
                setWeather(json);
            }, 1000)
            
            console.log(json)
        } catch (error) {
            
        }
    }

    function handleChangeCity(city){
        setWeather(null);
        loadInfo(city);
    }

    return (
    <div className={styles.weatherContainer}>
        <WeatherForm onChangeCity={handleChangeCity}/>
        {weather ? <WeatherMainInfo weather={weather}/> : <Loading/>}
    </div>
    );
}