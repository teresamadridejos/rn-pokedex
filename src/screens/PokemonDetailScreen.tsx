import { useRoute } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { View, Text, SafeAreaView, ScrollView, Image } from 'react-native';
import useFetch from '../hooks/useFetch';
import { Pokemon } from '../interfaces/Pokemon.interface';


const PokemonDetailScreen = () => {
  const route = useRoute();
  const { url } = route.params;

  const Stack = createStackNavigator();

  console.log(url);
  const { data, loading, error } = useFetch<Pokemon>(url);
  console.log(data);

  if (loading) {
    return (
      <SafeAreaView>
        <Text>Loading...</Text>
      </SafeAreaView>
    )
  }

  if (data) {
    const { name, order, sprites, types } = data;

    return (
      <SafeAreaView>
        <ScrollView>
          <Image
            source={{ uri: sprites.other['official-artwork'].front_default }}
            style={{ width: 200, height: 200 }}
          />
          <Text>Name: {name}</Text>
          <Text>Order: {order}</Text>
          <Text>Types:</Text>
          <View>
            {types.map((type, index) => (
              <Text key={index}>{type.type.name}</Text>
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }


  
  


  return (
    <SafeAreaView>
    <Text>Details</Text>
  </SafeAreaView>
  );
};



export default PokemonDetailScreen;