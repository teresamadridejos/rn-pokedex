import React from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  FlatList,
  View,
  ImageBackground,
} from "react-native";
import { useContext } from "react";
import { AppContext } from "../context/Context";
import { PokemonCard } from "../components/PokemonCard";
import { Pokemon } from "../interfaces/Pokemon.interface";

export default function HomeScreen() {
  const { state } = useContext(AppContext);

  return (
    <ImageBackground
      source={require("../../assets/pokemonBall.png")}
      imageStyle={styles.backgroundImage}
    >
      <SafeAreaView>
        <View>
          <Text style={styles.title}>Pokedex</Text>
        </View>
        {state.pokemons.length === 0 ? (
          <Text>Cargando...</Text>
        ) : (
          <FlatList
            numColumns={2}
            contentContainerStyle={{justifyContent:"center", alignItems:"center"}}
            data={state.pokemons[0]}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => <PokemonCard url={item.url} />}
          />
        )}
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    opacity: 0.2,
    width: 200,
    height: 200,
    transform: [{ rotate: "-20deg" }],
    marginLeft: 275,
    top: -50,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    paddingHorizontal: 16,
  },
});
