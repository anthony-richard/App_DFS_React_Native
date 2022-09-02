import React, {useEffect, useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import Forecast from './screens/Forecast';
import FuturWeather from './screens/FuturWeather'
import { SafeAreaProvider } from 'react-native-safe-area-context';
const Stack = createNativeStackNavigator();


export default function App() {


    return (
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={screenOption.basic}/>
            <Stack.Screen name="Forecast" component={Forecast} options={screenOption.basic}/>
            <Stack.Screen name="FuturWeather" component={FuturWeather} options={screenOption.basic}/>
          </Stack.Navigator>
        </NavigationContainer>
        </SafeAreaProvider>
      );
    }
    
    const screenOption = {
        basic : {
          headerShown: false,
          animation: "none"
        }
      }