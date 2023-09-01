import React from "react";
import { Text, View, StyleSheet, Image, ScrollView } from "react-native";
import useFetch from "../hooks/useFetch";

interface PokemonCardProps {
  url: string;
}

export function PokemonCard({ url }: PokemonCardProps) {
  const { data, loading, error } = useFetch(url);
  console.log(data);
  const { color } = useFetch('https://pokeapi.co/api/v2/pokemon-color/');

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error || !data) {
    return <Text>Error loading Pokémon data</Text>;
  }

  return (
    <View style={styles.card}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{data.name}</Text>
        <Text style={styles.text}>#{data.id}</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: data.sprites.other["official-artwork"].front_default,
          }}
          style={styles.image}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 8,
    alignItems: "flex-start",
    width: 130,
    height: 90,
    backgroundColor: "white",
    borderRadius: 8,
    elevation: 5,
    shadowColor: "rgba(0, 0, 0, 0.5)",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 4,
    margin: 8,
  },
  imageContainer: {
    position: "absolute",
    right: -30,
    top: 25,
    width: 100,
    height: 100,
  },
  image: {
    width: "80%",
    height: "80%",
  },
  textContainer: {
    flexDirection: "column",
    marginRight: 32,
  },
  text: {
    fontWeight: "bold",
    fontSize: 16,
  },
});