// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

// // Importa las pantallas que usarás en el Stack Navigator
// import HomeScreen from '../screens/HomeScreen';
// import PokemonDetailScreen from '../screens/PokemonDetailScreen';
// import AddPokemonScreen from '../screens/AddPokemonScreen';

// // Crea un objeto Stack Navigator
// const Stack = createStackNavigator();

// // Define el componente AppNavigator
// function AppNavigator() {
//   return (
//       <Stack.Navigator>
//         <Stack.Screen name="Home" component={HomeScreen} />
//         <Stack.Screen
//                 options={{
//                   headerTransparent: true,
//                   title: "",
//                   headerTintColor: "#fefefe",
//                   headerShadowVisible: false,
//                 }}
//                 name="Pokemon"
//                 component={PokemonScreen}
//               />
//        /* <Stack.Screen name="PokemonDetail" component={PokemonDetailScreen} />
//         <Stack.Screen name="AddPokemon" component={AddPokemonScreen} />*/
//       </Stack.Navigator>
//   );
// }

export default AppNavigator;
