import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View ,ActivityIndicator} from 'react-native';
import * as Location from 'expo-location';
import axios from 'axios';

// import des components fait à la mano 
import Forecasts from '../components/Forecasts';


const API_URL = (lat,lon)=> `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=407165e99deffff1d3b70d3360f1edd0&lang=fr&units=metric`


export default function Home({navigation}) {
  // 1- recupération des coordonnées de user
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState(null)

  useEffect(()=> {
    const getCoordinates = async()=>{
      // demande autorisation
      const {status} = await Location.requestForegroundPermissionsAsync()
      if (status !== "granted"){
        return
      }
      // avoir la position
    const userLocation = await Location.getCurrentPositionAsync()
    getWeather(userLocation)
    }
    getCoordinates()
  },[])

  // 2- sréaliser une requête vers nos serveurs
    // city
    // météo du moment
    // prévisions
    const getWeather = async(location)=>{
      try  {
        const reponse = await axios.get(API_URL(location.coords.latitude, location.coords.longitude ))
        setData(reponse.data)
        setLoading(false)
      }catch(e){
        console.log("Erreur dans getWeather")
      }
    }

// si pas de location 
  if(loading){
    return <View style={styles.container}>
      <ActivityIndicator />
   </View>
  }
  
// location de la personne après autorisation 
  return (
        <View style={styles.container}>
            <Forecasts data={data} navigation={navigation} />
        </View>
  );
}

// style
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

