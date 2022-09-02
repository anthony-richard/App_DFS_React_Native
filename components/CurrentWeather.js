import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View ,ActivityIndicator,Image} from 'react-native';
import { isSameDay } from 'date-fns';

const getIcon = (icon) => `http://openweathermap.org/img/wn/${icon}@4x.png`

export default function CurrentWeather ({data}) {
    const [currentWeather, setCurrentWeather] = useState(null)

    useEffect(()=>{
        const currentW = data.list.filter(forecast=>{
            const today = new Date().getTime()+Math.abs(data.city.timezone * 1000)
            const forecastDate = new Date(forecast.dt * 1000)
            return isSameDay(today,forecastDate)
        })
        setCurrentWeather(currentW[0])
    }, [data])

    return ( 
        <>

            <Text style={styles.city}>{data?.city?.name}</Text>
            <Text style={styles.today}>Aujourd'hui</Text>
            <Image 
            source={{uri: getIcon(currentWeather?.weather[0].icon) }}
            style={{width:150, height:150}}
            />
            <Text style={styles.temp}>{Math.round(currentWeather?.main.temp)}°C</Text>
            <Text style={styles.description}>{currentWeather?.weather[0].description}</Text>

        </>
    )
}


const COLOR = "#FFFFFF"

const styles = StyleSheet.create({
    city: {
        color: COLOR,
        fontSize : 36,
        fontWeight : "500"
    },
    today: {
        color: COLOR,
        fontSize : 24,
        fontWeight : "300"
    },
    temp: {
        color: COLOR,
        fontSize : 80,
        fontWeight : "bold"
    },
    description: {
        color: COLOR,
        fontSize : 24,
        fontWeight : "bold"
    }
})