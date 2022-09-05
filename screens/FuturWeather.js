import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View ,ActivityIndicator, Image} from 'react-native';
import Weather from '../components/Weather';
const getIcon = (icon) => `http://openweathermap.org/img/wn/${icon}@2x.png`

export default function FuturWeather(props) {
  let forecast = props.route.params;

  return (
    <View style ={styles.container}>
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
  container: {
    flex: 1,
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
  },
});