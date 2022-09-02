import React, {useEffect, useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={screenOption.basic}/>
            {/* <Stack.Screen name="CurrentWeather" component={CurrentWeather} options={screenOption.basic}/> */}
            {/* <Stack.Screen name="HistoryCity" component={HistoryCity} options={screenOption.basic}/> */}
          </Stack.Navigator>
        </NavigationContainer>
      );
    }
    
    const screenOption = {
        basic : {
          headerShown: false,
          animation: "none"
        }
      }