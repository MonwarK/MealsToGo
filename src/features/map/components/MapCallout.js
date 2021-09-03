import React from "react";
import { View, Text, Image, Platform } from "react-native";
import styled from "styled-components/native";
import WebView from "react-native-webview";

const Container = styled.View`
  padding: ${(props) => props.theme.space[2]};
  width: 100%;
`;

const RestaurantImage = styled.Image`
  width: 100px;
  height: 100px;
  margin: auto;
  border-radius: 10px;
`;

const RestaurantWebView = styled(WebView)`
  width: 100px;
  height: 100px;
  margin: auto;
  border-radius: 10px;
`;

const Mytext = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  text-align: center;
  margin-top: ${(props) => props.theme.space[1]};
`;

const isAndroid = Platform.OS === "android";

const MapCallout = ({ restaurant, isMap }) => {
  const Image = (isAndroid && isMap) ? RestaurantWebView : RestaurantImage;

  return (
    <Container>
      <Image source={{ uri: restaurant.photos[0] }} />
      <Mytext>{restaurant.name}</Mytext>
    </Container>
  );
};

export default MapCallout;
