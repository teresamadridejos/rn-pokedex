import React from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  FlatList,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { useContext } from "react";
import { AppContext } from "../context/Context";
import { useNavigation } from "@react-navigation/native";
import { PokemonCard } from "../components/PokemonCard";
import { LinearGradient } from "expo-linear-gradient";

export default function HomeScreen() {
  const { state } = useContext(AppContext);
  const navigation = useNavigation();

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
        <ImageBackground
          source={require("../../assets/pokemonBall.png")}
          imageStyle={styles.backgroundImage}
        >
          <View>
            <Image
              source={require("../../assets/logo.png")}
              style={styles.logo}
            />
            <Text style={styles.subtitle}>
              Discover and collect Pokémon in your ultimate Pokédex adventure!
            </Text>
          </View>
          {state.pokemons.length === 0 ? (
            <Text>Cargando...</Text>
          ) : (
            <FlatList
              numColumns={2}
              contentContainerStyle={{
                justifyContent: "center",
                alignItems: "center",
              }}
              data={state.pokemons[0]}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("PokemonDetail", { url: item.url });
                  }}
                >
                  <PokemonCard url={item && "url" in item ? item.url : ""} />
                </TouchableOpacity>
              )}
            />
          )}
        </ImageBackground>
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  flexContainer: {
    flex: 1,
  },
  gradientBackground: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.1,
    width: 200,
    height: 200,
    transform: [{ rotate: "-20deg" }],
    marginLeft: 270,
    top: -50,
  },
  logo: {
    marginTop: 20,
    marginLeft: 20,
    width: 200,
    height: 120,
    elevation: 5,
    shadowColor: "rgba(0, 0, 0, 0.2)",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 1,
    shadowRadius: 2,
  },
  subtitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 30,
    textShadowColor: "rgba(0, 0, 0, 0.4)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 7,
    marginBottom: 20,
  },
});
