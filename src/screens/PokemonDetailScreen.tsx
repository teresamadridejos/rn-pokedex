import { useRoute } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { View, Text, SafeAreaView, ScrollView, Image } from "react-native";
import useFetch from "../hooks/useFetch";
import { Pokemon } from "../interfaces/Pokemon.interface";

const PokemonDetailScreen = () => {
  const route = useRoute();
  const { url } = route.params;

  // const Stack = createStackNavigator();

  // console.log(url);
  const { data, loading, error } = useFetch<Pokemon>(url);
  console.log(data);

  if (loading) {
    return (
      <SafeAreaView>
        <Text>Loading...</Text>
      </SafeAreaView>
    );
  }

  if (data) {
    const { ame, order, sprites, types, abilities } = data;

    return (
      <SafeAreaView>
        <ScrollView>
          <Text>{data.name}</Text>
          <Text>#{order}</Text>
          <Image
            source={{ uri: sprites.other["official-artwork"].front_default }}
            style={{ width: 200, height: 200 }}
          />
          <Text>Type: {data.type}</Text>
          <View>
            {types.map((type, index) => (
              <Text key={index}>{type.type.name}</Text>
            ))}
            <Text>Weight:</Text>
              
             <Text>{data.weight} kg</Text>
            <Text>Sprites:</Text>
            <Image
              source={{ uri: sprites.back_default }}
              style={{ width: 50, height: 50 }}
            />
            <Image
              source={{ uri: sprites.back_shiny }}
              style={{ width: 50, height: 50 }}
            />
            <Image
              source={{ uri: sprites.front_default }}
              style={{ width: 50, height: 50 }}
            />
            <Image
              source={{ uri: sprites.front_shiny }}
              style={{ width: 50, height: 50 }}
            />

            <Text>Abilities:</Text>
            {abilities.map((ability, index) => (
              <Text key={index}>{ability.ability.name}</Text>
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
};

export default PokemonDetailScreen;