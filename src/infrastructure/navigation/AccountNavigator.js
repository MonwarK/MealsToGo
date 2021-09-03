import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import LoginScreen from "../../features/account/screens/LoginScreen";
import MainScreen from "../../features/account/screens/MainScreen";

const AccountNavigator = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="MainScreen"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="MainScreen" component={MainScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
    </Stack.Navigator>
  );
};

export default AccountNavigator;
