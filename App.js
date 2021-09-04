import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { Navigation } from "./src/infrastructure/navigation/";
import * as firebase from "firebase";
import { AuthenticationContextProvider } from "./src/services/authentication/AuthenticationContext";

const firebaseConfig = {
  apiKey: "AIzaSyA80LXVQB5uWRdQLEZKOwHeVIhqJd99vno",
  authDomain: "meals-to-go-44a8b.firebaseapp.com",
  projectId: "meals-to-go-44a8b",
  storageBucket: "meals-to-go-44a8b.appspot.com",
  messagingSenderId: "101425868985",
  appId: "1:101425868985:web:09aff0fedd3b7542626b68",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  let [latoLoaded] = useLato({
    Lato_400Regular,
  });

  let [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  if (!latoLoaded || !oswaldLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <Navigation />
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
