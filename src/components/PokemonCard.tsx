import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  ImageBackground,
} from "react-native";
import useFetch from "../hooks/useFetch";

interface PokemonCardProps {
  url: string;
}

export function PokemonCard({ url }: PokemonCardProps) {
  const { data, loading, error } = useFetch(url);
  console.log(data);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error || !data) {
    return <Text>Error loading Pokémon data</Text>;
  }

  return (
    <View style={styles.card}>
      <View style={styles.textContainer}>
        <Text style={styles.name}>{data.name}</Text>
        <Text style={styles.id}>#{data.id}</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: data.sprites.other["official-artwork"].front_default,
          }}
          style={styles.image}
        />
      </View>
      <View style={styles.pokeBallContainer}>
        <Image
          source={require("../../assets/pokemonBall.png")}
          style={styles.pokeBall}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    alignItems: "flex-start",
    width: 170,
    height: 120,
    backgroundColor: "rgba(255, 255, 255, 0.75)",
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
    right: -25,
    top: 37,
    width: 100,
    height: 100,
    zIndex: 100,
  },
  image: {
    width: "90%",
    height: "90%",
  },
  pokeBallContainer: {
    justifyContent: "center",
    alignItems: "center",
    left: 125,
    bottom: 5,
  },
  pokeBall: {
    opacity: 0.05,
    width: 95,
    height: 95,
    position: "absolute",
  },
  textContainer: {
    flexDirection: "column",
    padding: 15,
  },
  name: {
    fontWeight: "bold",
    fontSize: 20,
  },
  id: {
    fontWeight: "bold",
    color: "grey",
    fontSize: 15,
  },
});
