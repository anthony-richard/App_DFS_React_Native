import React from "react"
import {View, Text, StyleSheet, Image, ScrollView,Alert} from "react-native"
// import {useEffect, useState} from 'react';
// import { format } from "date-fns";
// import {fr} from 'date-fns/locale'

const getIcon = (icon) => `http://openweathermap.org/img/wn/${icon}@2x.png`

export default function Weather({ forecast,navigation }){
    return(
        <View style ={styles.container} onStartShouldSetResponder={() => navigation.navigate('FuturWeather',{itemData : forecast})}>
            <Text>{forecast?.name}</Text>
            <Text>Heure : {forecast?.hour}h</Text>
            <Image
                source={{uri: getIcon(forecast?.icon) }}
                style={{width:50, height:50}}
            />
            <Text>{forecast?.temp}°C</Text>
        </View>
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