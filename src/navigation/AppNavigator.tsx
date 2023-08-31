// AppNavigator.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen'; // Importa tu componente HomeScreen aquí
// import AddPokemonScreen from '../screens/AddPokemonScreen'; // Importa tu componente AddPokemonScreen aquí
// import PokemonDetailScreen from '../screens/PokemonDetailScreen'; // Importa tu componente PokemonDetailScreen aquí

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        {/* <Tab.Screen name="Add Pokemon" component={AddPokemonScreen} />
        <Tab.Screen name="Pokemon Detail" component={PokemonDetailScreen} /> */}
      </Tab.Navigator>
    </NavigationContainer>
  );
}
