import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import PokemonDetailScreen from '../screens/HomeScreen';
import AddPokemonScreen from '../screens/AddPokemonScreen';


// Crea un Stack Navigator
const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="PokemonDetail" component={PokemonDetailScreen} />
      <Stack.Screen name="AddPokemon" component={AddPokemonScreen} />
    </Stack.Navigator>
  );
};


export default AppNavigator;