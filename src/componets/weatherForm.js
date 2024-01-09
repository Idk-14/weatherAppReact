import { useState } from "react";
import styles from "./weatherForm.module.css"

export default function WeatherForm({onChangeCity}){
    const [city, setCity] = useState('');

    function onChange(e){

        const value = e.target.value;

        if(value !== ''){
            setCity(value);
        }
    }

    function handleSubmint(e){
        e.preventDefault();

        onChangeCity(city);

    }

    return (
        <form onSubmit={handleSubmint} className={styles.container}>
            <input type="text" onChange={onChange} className={styles.input} placeholder="Inserta tu ciudad en Ingles"></input>
        </form>

    )
}