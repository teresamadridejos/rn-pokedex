import React from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  FlatList,
  View,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { useContext } from "react";
import { AppContext } from "../context/Context";
import { useNavigation } from "@react-navigation/native"; // Importa useNavigation
import { PokemonCard } from "../components/PokemonCard";
import { LinearGradient } from "expo-linear-gradient";

export default function HomeScreen() {
  const { state } = useContext(AppContext);
  const navigation = useNavigation(); // Obtiene el objeto de navegación

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
          <Text style={styles.title}>Pokedex</Text>
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
                  navigation.navigate('PokemonDetail', { url: item.url });
                }}
              >
                <PokemonCard url={item && 'url' in item ? item.url : ''} />
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
    flex: 1, // Para que el contenedor ocupe toda la pantalla
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
  title: {
    fontSize: 34,
    fontWeight: "bold",
    paddingHorizontal: 16,
    color: "white",
    marginBottom: 5,
    marginLeft: 20,
    marginTop: 50,
    textShadowColor: "rgba(0, 0, 0, 0.4)", // Color de la sombra
    textShadowOffset: { width: 1, height: 1 }, // Desplazamiento de la sombra
    textShadowRadius: 7, // Radio de la sombra
  },
});
