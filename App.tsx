import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { Navigator } from './src/navigator/Navigator'
const App = () => {
  return (

    <NavigationContainer>
     <Navigator></Navigator>
    </NavigationContainer>
  )
}

export default App
