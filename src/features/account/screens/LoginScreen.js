import React, { useContext, useState } from "react";
import { Text } from "react-native";
import { Spacer } from "../../../components/Spacer";
import { AuthenticationContext } from "../../../services/authentication/AuthenticationContext";
import {
  AccountBackground,
  AccountContainer,
  AccountCover,
  AuthButton,
  AuthError,
  AuthInput,
  AuthTitle,
} from "../components/AccountStyles";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { onLogin, error } = useContext(AuthenticationContext);

  return (
    <AccountBackground>
      <AccountCover />
      <AuthTitle>Meals To Go</AuthTitle>
      <AccountContainer>
        <Spacer size="large">
          <AuthInput
            label="Email"
            value={email}
            textContentType="emailAddress"
            keyboardType="email-address"
            autoCapitalize="none"
            onChangeText={(e) => setEmail(e)}
          />
        </Spacer>
        <Spacer size="large">
          <AuthInput
            label="Password"
            value={password}
            textContentType="password"
            secureTextEntry
            autoCapitalize="none"
            onChangeText={(u) => setPassword(u)}
          />
        </Spacer>
        {error && (
          <Spacer size="large">
            <AuthError>{error}</AuthError>
          </Spacer>
        )}
        <Spacer size="large">
          <AuthButton
            icon="lock-open-outline"
            mode="contained"
            onPress={() => onLogin(email, password)}
          >
            Login
          </AuthButton>
        </Spacer>
      </AccountContainer>
      <Spacer size="large">
        <AuthButton mode="contained" onPress={() => navigation.goBack()}>
          Back
        </AuthButton>
      </Spacer>
    </AccountBackground>
  );
};

export default LoginScreen;
