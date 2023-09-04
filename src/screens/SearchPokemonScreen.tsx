import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

export default function SearchScreen() {
  return (
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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 34,
    fontWeight: "bold",
    paddingHorizontal: 16,
    color: "grey",
    marginBottom: 25,
    marginTop: 50,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 20,
    paddingHorizontal: 12,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 10,
    color: "grey"
  },
  searchIcon: {
    padding: 10,
  },
});