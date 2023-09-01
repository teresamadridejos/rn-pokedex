import {
  StyleSheet,
  Text,
  SafeAreaView,
  FlatList,
  View,
} from 'react-native';
import { useContext } from 'react';
import { AppContext } from '../context/Context';
import { PokemonCard } from '../components/PokemonCard';
import { Pokemon } from '../interfaces/Pokemon.interface';


export default function HomeScreen() {
  const { state } = useContext(AppContext); // Obtén el estado de tu contexto global

  // const { pokemons } = state; // Extrae el arry de Pokémon del estado
  console.log(state.pokemons);
  // console.log(pokemons[1].url);
  


  return (
    <SafeAreaView >
    {state.pokemons.length === 0 ? (
      <Text>Cargando...</Text>
    ) : (

      // state.pokemons[0].map((item)=> item.name)
      <FlatList
        data={state.pokemons[0]}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          
          <PokemonCard url={item.url} />
            // <Text>{item.url}</Text>
          
        )}
      />
    )}
  </SafeAreaView>
  );
}

