// HomeScreen.js (or HomeScreen.tsx for TypeScript)
import React, { useContext, useEffect } from 'react';
import { View, Text, SafeAreaView, FlatList, ActivityIndicator } from 'react-native';
import { useAppContext } from '../context/AppContext';
import { useFetch } from '../hooks/useFetch';

export default function HomeScreen() {
  const { state, dispatch } = useAppContext();
  const { data, loading, error } = useFetch('https://pokeapi.co/api/v2/pokemon?limit=151');

  useEffect(() => {
    // When data is loaded, dispatch an action to update the context state
    if (!loading && data) {
      dispatch({ type: 'SET_POKEMONS', payload: data.results });
    }
  }, [data, loading, dispatch]);

  if (loading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

  return (
    <SafeAreaView>
      <FlatList
        data={state.pokemons} // Use the pokemons data from the context state
        renderItem={({ item }) => (
          <View>
            <Text>{item.name}</Text>
          </View>
        )}
        keyExtractor={(item) => item.name}
      />
    </SafeAreaView>
  );
}
