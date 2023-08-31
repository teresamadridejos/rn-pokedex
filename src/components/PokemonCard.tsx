// PokemonCard.tsx (or .js for JavaScript)
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

// Define the type for the Pokemon prop
interface Pokemon {
  name: string;
  id: number; // Assuming id is a number
}

const PokemonCard: React.FC<{ pokemon: Pokemon }> = ({ pokemon }) => {
  return (
    <View style={styles.card}>
      <Text>Name: {pokemon.name}</Text>
      <Text>Number: {pokemon.id}</Text>
      <Image
        source={{ uri: `https://pokeapi.co/media/sprites/pokemon/${pokemon.id}.png` }}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    marginTop: 8,
  },
});

export default PokemonCard;
