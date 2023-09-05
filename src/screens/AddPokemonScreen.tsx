import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  SafeAreaView,
} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

export default function AddPokemonScreen() {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [level, setLevel] = useState("");

  const handleAddPokemon = () => {
    const newPokemon = {
      name: name,
      type: type,
      level: level,
    };
  };

  return (
    <SafeAreaView style={styles.flexContainer}>
      <LinearGradient
        colors={[
          'rgb(254, 240, 138)',
          'rgb(187, 247, 208)',
          'rgb(134, 239, 172)'
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
          <Text style={styles.title}>Create your own Pokemon</Text>
          <Text style={styles.label}>Name</Text>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={(text) => setName(text)}
            placeholder="Pokémon name"
          />

          <Text style={styles.label}>Type</Text>
          <TextInput
            style={styles.input}
            value={type}
            onChangeText={(text) => setType(text)}
            placeholder="Pokémon type"
          />

          <Text style={styles.label}>Level</Text>
          <TextInput
            style={styles.input}
            value={level}
            onChangeText={(text) => setLevel(text)}
            placeholder="Pokemon level"
          />

          <TouchableOpacity
            style={styles.submitButton}
            onPress={handleAddPokemon}
          >
            <Text style={styles.submitButtonText}>Submit</Text>
          </TouchableOpacity>
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
  backgroundImage: {
    opacity: 0.1,
    width: 420,
    height: 420,
    top: -50,
  },
  container: {
    flex: 1,
    padding: 16,
    margin: 20,
    marginTop: 170
  },
  title: {
    fontSize: 34,
    fontWeight: "bold",
    color: "white",
    marginBottom: 20,
    textShadowColor: "rgba(0, 0, 0, 0.4)", // Color de la sombra
    textShadowOffset: { width: 1, height: 1 }, // Desplazamiento de la sombra
    textShadowRadius: 7, // Radio de la sombra
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 6,
  },
  input: {
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 20,
    paddingHorizontal: 12,
    padding: 15,
    marginBottom: 20,
  },
  submitButton: {
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  submitButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
