import { useRoute } from "@react-navigation/native";
import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import useFetch from "../hooks/useFetch";
import { Pokemon } from "../interfaces/Pokemon.interface";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "react-native-vector-icons/FontAwesome";
import { background } from "../utils/BackgroundsByType";

interface Ability {
  ability: {
    name: string;
  };
}

interface RouteParams {
  url: string;
}

const PokemonDetailScreen = () => {
  const route = useRoute();
  const { url } = route.params as RouteParams;

  const { data, loading, error } = useFetch(url);
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
  };

  const backgroundSelected = background[data?.types[0]?.type?.name];

  if (loading) {
    return (
      <SafeAreaView>
        <Text style={styles.loadingText}>Loading...</Text>
      </SafeAreaView>
    );
  }

  if (data) {
    const { name, id, sprites, types, abilities, weight } = data;

    return (
      <SafeAreaView style={styles.flexContainer}>
        <LinearGradient
          colors={[
            "rgb(254, 240, 138)",
            "rgb(187, 247, 208)",
            "rgb(134, 239, 172)",
          ]}
          style={styles.gradientBackground}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <View>
            <ScrollView>
              <TouchableOpacity
                style={styles.heartIcon}
                onPress={handleFavoriteClick}
              >
                <Icon
                  name={isFavorite ? "heart" : "heart-o"}
                  size={24}
                  color={isFavorite ? "black" : "black"}
                />
              </TouchableOpacity>
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
                  {" "}
                  {types.map(
                    (type: { type: { name: string } }, index: number) => (
                      <Text
                        key={index}
                        style={[
                          styles.typeText,
                          { backgroundColor: backgroundSelected },
                        ]}
                      >
                        {type.type.name.toUpperCase()}
                      </Text>
                    )
                  )}
                </View>
              </View>

              {/*INFO ON THE BOTTOM */}
              <View style={styles.bottomView}>
                <View style={styles.infoContainer}>
                  <Text style={styles.info}>Info</Text>
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
                    {abilities.map((ability: Ability, index: number) => (
                      <Text key={index} style={styles.abilityText}>
                        {ability.ability.name}
                      </Text>
                    ))}
                  </View>
                </View>
              </View>
            </ScrollView>
          </View>
        </LinearGradient>
      </SafeAreaView>
    );
  }
};

const styles = StyleSheet.create({
  flexContainer: {
    flex: 1,
  },
  gradientBackground: {
    flex: 1,
  },
  topView: {
    marginTop: 60,
    flex: 1,
    padding: 16,
    marginBottom: 40,
  },
  heartIcon: {
    position: "absolute",
    top: 25,
    right: 25,
    zIndex: 1001,
  },
  loadingText: {
    fontSize: 18,
    textAlign: "center",
  },
  imageContainer: {
    marginBottom: 16,
    position: "relative",
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: "cover",
    zIndex: 1000,
  },
  pokeBall: {
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
    color: "white",
    textShadowColor: "rgba(0, 0, 0, 0.4)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 7,
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
    marginBottom: 6,
  },
  typeText: {
    fontSize: 18,
    color: "black",
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    marginRight: 10,
  },
  bottomView: {
    backgroundColor: "rgba(255, 255, 255, 0.75)",
    color: "black",
    paddingTop: 26,
    paddingHorizontal: 40,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    flex: 1,
  },
  infoContainer: {},
  info: {
    fontSize: 25,
    color: "#64CCC5",
    fontWeight: "bold",
    textDecorationLine: "underline",
    marginBottom: 15,
  },
  weight: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 16,
    color: "grey",
  },
  sprites: {
    fontSize: 18,
    fontWeight: "bold",
    color: "grey",
  },
  spritesContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginBottom: 10,
  },
  spriteImage: {
    width: 70,
    height: 70,
  },
  abilitiesContainer: {
    marginBottom: 26,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
  },
  abilities: {
    fontSize: 18,
    fontWeight: "bold",
    color: "grey",
  },
  abilityText: {
    fontSize: 18,
    marginBottom: 10,
    backgroundColor: "transparent",
    color: "black",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
    textAlign: "center",
    marginRight: 10,
    marginTop: 10,
    borderColor: "#64CCC5",
    borderWidth: 2,
  },
});

export default PokemonDetailScreen;
