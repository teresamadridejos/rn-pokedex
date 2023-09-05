import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchPokemonScreen";
import AddNewScreen from "../screens/AddPokemonScreen";
import PokemonDetailScreen from "../screens/PokemonDetailScreen";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Define la pila de navegación para la pantalla HomeScreen
const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="PokemonDetail"
        component={PokemonDetailScreen}
        options={{
          headerTitle: "",
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
};

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          height: 60,
          paddingHorizontal: 5,
          paddingTop: 0,
          backgroundColor: "#64CCC5",
          borderTopWidth: 0,
          elevation: 5,
          shadowColor: "rgba(0, 0, 0, 5.5)",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 1,
          shadowRadius: 4,
        },
        tabBarShowLabel: false, // Ocultar los labels de manera permanente
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "white",
        tabBarIcon: ({ color, size, focused }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Search") {
            iconName = focused ? "search" : "search-outline";
          } else if (route.name === "AddNew") {
            iconName = focused ? "add-circle" : "add-circle-outline";
          }

          // Agregar resplandor blanco si la pestaña está activa
          const iconColor = focused ? "white" : color;

          return (
            <Ionicons name={iconName} size={size} color={iconColor} />
          );
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="AddNew"
        component={AddNewScreen}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
