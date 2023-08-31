import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import { useState, useEffect } from 'react';
import { PokemonCard } from './src/components/PokemonCard';
import Pokemon from './src/interfaces/Pokemon.interface'



export default function App() {
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={pokemon}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => <PokemonCard url={item.url} />}
        
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});