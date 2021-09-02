import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import RestaurantScreen from "../../features/restaurants/screens/RestaurantScreen";
import RestaurantDetailScreen from "../../features/restaurants/screens/RestaurantDetailScreen";

const RestaurantsNavigator = () => {
  const RestaurantStack = createStackNavigator();

  return (
    <RestaurantStack.Navigator
      screenOptions={{
        ...TransitionPresets.ModalTransition,
        headerShown: false,
      }}
    >
      <RestaurantStack.Screen
        name="RestaurantsList"
        component={RestaurantScreen}
      />
      <RestaurantStack.Screen
        name="RestaurantDetail"
        component={RestaurantDetailScreen}
      />
    </RestaurantStack.Navigator>
  );
};

export default RestaurantsNavigator;
