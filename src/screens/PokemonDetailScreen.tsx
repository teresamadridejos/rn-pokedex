import { useRoute } from "@react-navigation/native";
import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  StyleSheet,
} from "react-native";
import useFetch from "../hooks/useFetch";
import { Pokemon } from "../interfaces/Pokemon.interface";

const PokemonDetailScreen = () => {
  const route = useRoute();
  const { url } = route.params;

  const { data, loading, error } = useFetch<Pokemon>(url);

  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.loadingText}>Loading...</Text>
      </SafeAreaView>
    );
  }

  if (data) {
    const { name, id, sprites, types, abilities, weight } = data;

    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.id}>#{id}</Text>
          <View style={styles.imageContainer}>
            <Image
              source={{ uri: sprites.other["official-artwork"].front_default }}
              style={styles.image}
            />
          </View>
          <View style={styles.typeContainer}>
            {types.map((type: { type: { name: string } }, index: number) => (
              <Text key={index} style={styles.typeText}>
                {type.type.name.toUpperCase()}
              </Text>
            ))}
          </View>

          <Text style={styles.weight}>Weight: {weight} kg</Text>
          <Text style={styles.sprites}>Sprites:</Text>
          <View style={styles.spritesContainer}>
            <Image
              source={{ uri: sprites.back_default }}
              style={styles.spriteImage}
            />
            <Image
              source={{ uri: sprites.back_shiny }}
              style={styles.spriteImage}
            />
            <Image
              source={{ uri: sprites.front_default }}
              style={styles.spriteImage}
            />
            <Image
              source={{ uri: sprites.front_shiny }}
              style={styles.spriteImage}
            />
          </View>
          <Text style={styles.abilities}>Abilities:</Text>
          <View style={styles.abilitiesContainer}>
            {abilities.map((ability, index) => (
              <Text key={index} style={styles.abilityText}>
                {ability.ability.name}
              </Text>
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    margin: 25,
    marginTop: 60,
    flex: 1,
    padding: 16,
  },
  loadingText: {
    fontSize: 18,
    textAlign: "center",
  },
  name: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 8,
    textAlign: "left",
  },
  id: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "left",
  },
  imageContainer: {
    alignItems: "center",
    marginBottom: 16,
  },
  image: {
    width: 270,
    height: 270,
    resizeMode: "cover",
  },
  typeContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 16,
  },
  typeText: {
    fontSize: 16,
    marginRight: 8,
    backgroundColor: "#48F10E",
    color: "white",
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 20,
  },
  weight: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 16,
  },
  sprites: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  spritesContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginBottom: 16,
  },
  spriteImage: {
    width: 150,
    height: 150,
  },
  abilities: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  abilitiesContainer: {
    marginBottom: 16,
  },
  abilityText: {
    fontSize: 16,
    marginBottom: 4,
    backgroundColor: "#078716",
    color: "white",
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 20,
    textAlign: "center",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
});

export default PokemonDetailScreen;
