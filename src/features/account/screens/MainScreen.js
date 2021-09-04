import React from "react";
import { Spacer } from "../../../components/Spacer";
import {
  AccountBackground,
  AccountContainer,
  AccountCover,
  AnimationWrapper,
  AuthButton,
} from "../components/AccountStyles";
import LottieView from "lottie-react-native";

const MainScreen = ({ navigation }) => {
  return (
    <AccountBackground>
      <AccountCover />
      <AnimationWrapper>
        <LottieView
          key="animation"
          autoPlay
          loop
          resizeMode="cover"
          source={require("../../../../assets/watermelon.json")}
        />
      </AnimationWrapper>
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
          icon="mail"
          mode="contained"
          onPress={() => navigation.navigate("RegisterScreen")}
        >
          Register
        </AuthButton>
      </AccountContainer>
    </AccountBackground>
  );
};

export default MainScreen;
