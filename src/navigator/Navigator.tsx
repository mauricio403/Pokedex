import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import Pokemonscreen from '../screens/Pokemonscreen';

const Stack = createStackNavigator();

export const  Navigator = () =>  {
  return (
    <Stack.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle:{
        backgroundColor:'white'
      }
    }}
    
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="Pokemonscreen" component={Pokemonscreen} />

    </Stack.Navigator>
  );
}