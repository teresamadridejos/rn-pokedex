import { Text, View, StyleSheet, Image } from 'react-native';
import useFetch from '../hooks/useFetch';

interface PokemonCardProps {
  url: string;
}



export function PokemonCard({ url }: PokemonCardProps) {
  const {data, loading, error } = useFetch(url);
  console.log(data);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error || !data) {
    return <Text>Error loading Pokémon data</Text>;
  }

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: data.sprites.other['official-artwork'].front_default,
        }}
        style={styles.image}
      />
      <Text style={styles.name}>{data.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
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