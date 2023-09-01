import React from "react";
import { StyleSheet, Text, SafeAreaView, FlatList, View } from "react-native";
import { useContext } from "react";
import { AppContext } from "../context/Context";
import { PokemonCard } from "../components/PokemonCard";
import { Pokemon } from "../interfaces/Pokemon.interface";

export default function HomeScreen() {
  const { state } = useContext(AppContext);

  return (
    <SafeAreaView>
      <View >
        <Text style={styles.title}>Pokedex</Text>
      </View>
      {state.pokemons.length === 0 ? (
        <Text>Cargando...</Text>
      ) : (
        <FlatList
          data={state.pokemons[0]}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => <PokemonCard url={item.url} />}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    paddingHorizontal: 16,
  },
});
