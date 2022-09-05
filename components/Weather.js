import React from "react"
import {View, Text, StyleSheet, Image, ScrollView,Alert, TouchableOpacity} from "react-native"
// import {useEffect, useState} from 'react';
// import { format } from "date-fns";
// import {fr} from 'date-fns/locale'

const getIcon = (icon) => `http://openweathermap.org/img/wn/${icon}@2x.png`

export default function Weather({ forecast,navigation }){
    return(
        <TouchableOpacity activeOpacity={0.4} onPress={()=>{
            navigation.navigate('FuturWeather',forecast)
            }}>
            <View style ={styles.container}>
                <Text>{forecast?.name}</Text>
                <Text>Heure : {forecast?.hour}h</Text>
                <Image
                    source={{uri: getIcon(forecast?.icon) }}
                    style={{width:50, height:50}}
                />
                <Text>{forecast?.temp}°C</Text>
            </View>
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
    container : {
        height:140,
        width : '100%',
        paddingVertical : 6,
        justifyContent : "center",
        alignItems: "center",
        marginRight: 10,
        borderRadius: 50
    }
})