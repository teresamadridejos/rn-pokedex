import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  ImageBackground,
  SafeAreaView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function SearchScreen() {
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
          source={require("../../assets/shapes.png")}
          imageStyle={styles.backgroundImage}
        >
        <View style={styles.container}>
          <Image
            source={require("../../assets/pikachu.png")}
            style={styles.pikachu}
          />

          <Text style={styles.title}>What Pokemon are you looking for?</Text>
          <View style={styles.searchContainer}>
            <View style={styles.searchIcon}>
              <Text>🔍</Text>
            </View>
            <TextInput
              style={styles.searchInput}
              placeholder="Search Pokemon, ability, move..."
            />
          </View>
        </View>
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
  container: {
    flex: 1,
    padding: 16,
    marginTop: 170
  },
  backgroundImage: {
    opacity: 0.1,
    width: 420,
    height: 420,
    top: -50,
  },
  title: {
    fontSize: 34,
    fontWeight: "bold",
    paddingHorizontal: 16,
    color: "white",
    marginBottom: 25,
    marginTop: 5,
    textShadowColor: "rgba(0, 0, 0, 0.4)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 7,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 20,
    paddingHorizontal: 12,
    margin: 10,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 10,
    color: "grey",
  },
  searchIcon: {
    padding: 10,
  },
  pikachu: {
    opacity: 0.5,
    width: 250,
    height: 150,
    marginLeft: 20,
    zIndex: 1000
  },
});
