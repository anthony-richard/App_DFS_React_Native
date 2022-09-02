import React from "react"
import {View, Text, StyleSheet, Image, ScrollView} from "react-native"
import {useEffect, useState} from 'react';
import { format } from "date-fns";
import {fr} from 'date-fns/locale'
import Weather from './Weather'

export default function Forecasts(props){
    const [forecasts, setForecasts] = useState([])
    useEffect(()=>{
        const forecastsData = props.data.list.map(f =>{
            const dt = new Date (f.dt * 1000)
            return({
                date : dt,
                hour : dt.getHours(),
                temp : Math.round(f.main.temp),
                icon : f.weather[0].icon,
                name : format(dt, "EEEE", { locale : fr})
            })
        })
        setForecasts(forecastsData)
    }, [props.data])

    return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
        >
        
            {forecasts.map(f=>(
                <Weather forecast={f} navigation={props.navigation} />
            ))}
        </ScrollView>
    )
}

const styles = StyleSheet.create({

})