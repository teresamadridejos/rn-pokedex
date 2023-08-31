import React, { useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { useAppContext } from "../context/AppContext";
import { useFetch } from "../hooks/useFetch";
import PokemonCard from "../components/PokemonCard";

export default function HomeScreen() {
  const { state, dispatch } = useAppContext();
  const { data, loading, error } = useFetch(
    "https://pokeapi.co/api/v2/pokemon?limit=151"
  );

  useEffect(() => {
    if (!loading && data) {
      const mappedPokemons = data.results.map((pokemon: any, index: number) => ({
        name: pokemon.name,
        id: index + 1, // Suponiendo que el índice + 1 sea el número de Pokémon
      }));
      dispatch({ type: 'SET_POKEMONS', payload: mappedPokemons });
    }
  }, [data, loading, dispatch]);
  

  if (loading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

  return (
    <SafeAreaView>
      <FlatList
        data={state.pokemons}
        renderItem={({ item }) => <PokemonCard pokemon={item} />}
        keyExtractor={(item) => item.name}
      />
    </SafeAreaView>
  );
}
