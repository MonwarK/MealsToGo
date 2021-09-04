import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import LoginScreen from "../../features/account/screens/LoginScreen";
import MainScreen from "../../features/account/screens/MainScreen";
import RegisterScreen from "../../features/account/screens/RegisterScreen";

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
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
    </Stack.Navigator>
  );
};

export default AccountNavigator;
