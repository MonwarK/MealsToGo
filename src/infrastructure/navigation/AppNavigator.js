import React from "react";
import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { SafeArea } from "../../components/utility/SafeArea.component";
import RestaurantsNavigator from "./RestaurantsNavigator";
import { Ionicons } from "@expo/vector-icons";

const AppNavigator = () => {
  const Tab = createBottomTabNavigator();

  const Map = () => (
    <SafeArea>
      <Text>Map</Text>
    </SafeArea>
  );

  const Settings = () => (
    <SafeArea>
      <Text>Settings</Text>
    </SafeArea>
  );

  const TAB_ICON = {
    Restaurants: "md-restaurant",
    Map: "md-map",
    Settings: "md-settings",
  };

  const screenOptions = ({ route }) => ({
    headerShown: false,
    tabBarIcon: ({ focused, color, size }) => {
      let iconName = TAB_ICON[route.name];

      return <Ionicons name={iconName} size={size} color={color} />;
    },
    tabBarActiveTintColor: "tomato",
    tabBarInactiveTintColor: "gray",
  });

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Restaurants"
        screenOptions={screenOptions}
      >
        <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
        <Tab.Screen name="Map" component={Map} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
