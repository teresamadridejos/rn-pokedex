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
          {/*INFO ON THE TOP */}
          <View style={styles.topView}>
            <View style={styles.imageContainer}>
              <Image
                source={{
                  uri: sprites.other["official-artwork"].front_default,
                }}
                style={styles.image}
              />
              <Image
                source={require("../../assets/pokemonBall.png")}
                style={styles.pokeBall}
              />
            </View>

            <View style={styles.nameId}>
              <Text style={styles.id}>#{id}</Text>
              <Text style={styles.name}>{name}</Text>
            </View>
            <View style={styles.typeContainer}>
              {types.map((type: { type: { name: string } }, index: number) => (
                <Text key={index} style={styles.typeText}>
                  {type.type.name.toUpperCase()}
                </Text>
              ))}
            </View>
          </View>

          {/*INFO ON THE BOTTOM */}
          <View style={styles.bottomView}>
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
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
};

const styles = StyleSheet.create({
  topView: {
    marginTop: 60,
    flex: 1,
    padding: 16,
  },
  loadingText: {
    fontSize: 18,
    textAlign: "center",
  },
  imageContainer: {
    marginBottom: 16,
    position: "relative", // Añade posición relativa al contenedor
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: "cover",
    zIndex: 1000,
  },
  pokeBall: {
    color: "grey",
    fontSize: 300,
    fontWeight: "bold",
    position: "absolute",
    opacity: 0.1,
    width: 200,
    height: 200,
    transform: [{ rotate: "-20deg" }],
  },
  nameId: {
    alignItems: "center",
  },
  name: {
    fontSize: 55,
    fontWeight: "bold",
    marginBottom: 18,
    textAlign: "left",
    color: "grey",
    textShadowColor: "rgba(0, 0, 0, 0.4)", // Color de la sombra
    textShadowOffset: { width: 1, height: 1 }, // Desplazamiento de la sombra
    textShadowRadius: 7, // Radio de la sombra
  },
  id: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "left",
    color: "grey",
  },
  typeContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 16,
  },
  typeText: {
    fontSize: 18,
    backgroundColor: "#48F10E",
    color: "white",
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  bottomView: {
    backgroundColor: "white",
    padding: 26,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
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
    justifyContent: "space-evenly",
    marginBottom: 16,
  },
  spriteImage: {
    width: 70,
    height: 70,
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
