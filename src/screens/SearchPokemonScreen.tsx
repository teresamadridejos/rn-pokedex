import React from "react";
import { View, Text, TextInput, StyleSheet, SafeAreaView } from "react-native";
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
        <View style={styles.container}>
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
  },
  title: {
    fontSize: 34,
    fontWeight: "bold",
    paddingHorizontal: 16,
    color: "white",
    marginBottom: 25,
    marginTop: 50,
    textShadowColor: "rgba(0, 0, 0, 0.4)", // Color de la sombra
    textShadowOffset: { width: 1, height: 1 }, // Desplazamiento de la sombra
    textShadowRadius: 7, // Radio de la sombra
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
});
