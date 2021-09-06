import AsyncStorage from "@react-native-async-storage/async-storage";
import { Camera } from "expo-camera";
import React, { useContext, useEffect, useRef, useState } from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-paper";
import styled from "styled-components/native";
import { AuthenticationContext } from "../../../services/authentication/AuthenticationContext";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

const ProfileCamera = styled(Camera)`
  width: 100%;
  height: 100%;
`;

const ButtonContainer = styled(View)`
  bottom: 0;
  padding: 8px;
  position: absolute;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  background-color: white;
`;

const CameraScreen = ({ navigation }) => {
  const cameraRef = useRef();
  const { user } = useContext(AuthenticationContext);
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(false);

  const snap = async () => {
    if (cameraRef) {
      const photo = await cameraRef.current.takePictureAsync();
      AsyncStorage.setItem(`${user.uid}-photo`, photo.uri);
      navigation.navigate("SettingsScreen");
    }
  };

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View>
      <ProfileCamera
        ref={(camera) => (cameraRef.current = camera)}
        type={type ? Camera.Constants.Type.front : Camera.Constants.Type.back}
      >
        <ButtonContainer>
          <Button onPress={() => setType(!type)}>
            <MaterialIcons name="flip-camera-ios" size={24} color="black" />
          </Button>
          <Button onPress={snap}>
            <Ionicons name="ios-camera" size={24} color="black" />
          </Button>
          <Button onPress={() => navigation.navigate("SettingsScreen")}>
            <Ionicons name="md-close" size={24} color="black" />
          </Button>
        </ButtonContainer>
      </ProfileCamera>
    </View>
  );
};

export default CameraScreen;
