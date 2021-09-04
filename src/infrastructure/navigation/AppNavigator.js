import React, { useContext } from "react";
import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeArea } from "../../components/utility/SafeArea.component";
import RestaurantsNavigator from "./RestaurantsNavigator";
import { Ionicons } from "@expo/vector-icons";
import MapScreen from "../../features/map/screens/MapScreen";
import { Button } from "react-native-paper";
import { AuthenticationContext } from "../../services/authentication/AuthenticationContext";
import { FavouritesContextProvider } from "../../services/favourites/FavouritesContext";
import { LocationContextProvider } from "../../services/location/LocationContext";
import { RestaurantsContextProvider } from "../../services/restaurants/RestaurantsContext";

const AppNavigator = () => {
  const Tab = createBottomTabNavigator();
  const { onLogout } = useContext(AuthenticationContext);

  const Settings = () => (
    <SafeArea>
      <Text>Settings</Text>
      <Button onPress={onLogout}>Log Out</Button>
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
    <FavouritesContextProvider>
      <LocationContextProvider>
        <RestaurantsContextProvider>
          <Tab.Navigator
            initialRouteName="Restaurants"
            screenOptions={screenOptions}
          >
            <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
            <Tab.Screen name="Map" component={MapScreen} />
            <Tab.Screen name="Settings" component={Settings} />
          </Tab.Navigator>
        </RestaurantsContextProvider>
      </LocationContextProvider>
    </FavouritesContextProvider>
  );
};

export default AppNavigator;
