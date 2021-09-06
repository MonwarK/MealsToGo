import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import CameraScreen from "../../features/settings/screens/CameraScreen";
import FavouritesScreen from "../../features/settings/screens/FavouritesScreen";
import SettingsScreen from "../../features/settings/screens/SettingsScreen";

const SettingsNavigator = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{ headerShown: false, title: "Settings" }}
      />
      <Stack.Screen
        name="CameraScreen"
        component={CameraScreen}
        options={{ title: "Camera" }}
      />
      <Stack.Screen
        name="FavouritesScreen"
        component={FavouritesScreen}
        options={{ title: "Favourites" }}
      />
    </Stack.Navigator>
  );
};

export default SettingsNavigator;
