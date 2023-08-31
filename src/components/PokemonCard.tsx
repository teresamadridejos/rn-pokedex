import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

interface Pokemon {
  imageUrl: string | undefined;
  name: string;
  id: number;
}

const PokemonCard: React.FC<{ pokemon: Pokemon }> = ({ pokemon }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{pokemon.name}</Text>
      <Text># {pokemon.id}</Text>
      <Image
        source={{ uri: pokemon.imageUrl }}
        style={styles.image}
      />
    </View>
  );
};


const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFB3CBFF',
    borderRadius: 10,
    marginBottom: 16,
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 32,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 32,
  },
});

export default PokemonCard;

