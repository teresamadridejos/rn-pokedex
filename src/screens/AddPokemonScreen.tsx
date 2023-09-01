import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

export default function AddPokemonScreen() {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [level, setLevel] = useState("");

  const handleAddPokemon = () => {
    // Aquí puedes realizar la lógica para agregar el Pokémon a tu lista de Pokémon
    // Puedes utilizar los valores de 'name', 'type' y 'level' que se han guardado en los estados
    // También puedes validar los datos antes de agregar el Pokémon

    // Por ejemplo, podrías almacenarlos en un array o enviarlos a través de una API
    const newPokemon = {
      name: name,
      type: type,
      level: level,
    };

    // Realizar alguna acción con 'newPokemon'

    // Luego puedes redirigir al usuario a la página principal o hacer lo que desees
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nombre:</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={(text) => setName(text)}
        placeholder="Nombre del Pokémon"
      />

      <Text style={styles.label}>Tipo:</Text>
      <TextInput
        style={styles.input}
        value={type}
        onChangeText={(text) => setType(text)}
        placeholder="Tipo del Pokémon"
      />

      <Text style={styles.label}>Nivel:</Text>
      <TextInput
        style={styles.input}
        value={level}
        onChangeText={(text) => setLevel(text)}
        placeholder="Nivel del Pokémon"
      />

      <Button title="Submit" onPress={handleAddPokemon} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
});
