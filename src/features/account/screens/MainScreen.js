import React from "react";
import { Spacer } from "../../../components/Spacer";
import {
  AccountBackground,
  AccountContainer,
  AccountCover,
  AuthButton,
} from "../components/AccountStyles";

const MainScreen = ({ navigation }) => {
  return (
    <AccountBackground>
      <AccountCover />
      <AccountContainer>
        <Spacer position="bottom" size="large">
          <AuthButton
            icon="lock-open-outline"
            mode="contained"
            onPress={() => navigation.navigate("LoginScreen")}
          >
            Login
          </AuthButton>
        </Spacer>
        <AuthButton
          icon="lock-open-outline"
          mode="contained"
          onPress={() => console.log("Press")}
        >
          Register
        </AuthButton>
      </AccountContainer>
    </AccountBackground>
  );
};

export default MainScreen;
