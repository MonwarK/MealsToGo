import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import React, { useContext, useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { Avatar, List, Text } from "react-native-paper";
import styled from "styled-components";
import { Spacer } from "../../../components/Spacer";
import { SafeArea } from "../../../components/utility/SafeArea.component";
import { AuthenticationContext } from "../../../services/authentication/AuthenticationContext";

const AvatarContainer = styled(View)`
  text-align: center;
  align-items: center;
  padding: ${(props) => props.theme.space[3]};
`;

const SettingsScreen = ({ navigation }) => {
  const { onLogout, user } = useContext(AuthenticationContext);
  const [image, setImage] = useState(null);

  const profilePicture = async () => {
    const res = await AsyncStorage.getItem(`${user.uid}-photo`);
    if (res) {
      setImage(res);
    }
  };

  useFocusEffect(() => {
    profilePicture();
  });

  return (
    <SafeArea>
      <AvatarContainer>
        <TouchableOpacity onPress={() => navigation.navigate("CameraScreen")}>
          <Avatar.Image source={{ uri: image }} size={150} />
        </TouchableOpacity>
        <Spacer size="large">
          <Text variant="label">{user.email}</Text>
        </Spacer>
      </AvatarContainer>
      <List.Section>
        <List.Item
          style={{ padding: 16 }}
          title="Favourites"
          description="View your favourites"
          left={(props) => <List.Icon {...props} color="black" icon="heart" />}
          onPress={() => navigation.navigate("FavouritesScreen")}
        />
        <List.Item
          style={{ padding: 16 }}
          title="Logout"
          left={(props) => <List.Icon {...props} color="black" icon="door" />}
          onPress={onLogout}
        />
      </List.Section>
    </SafeArea>
  );
};

export default SettingsScreen;
