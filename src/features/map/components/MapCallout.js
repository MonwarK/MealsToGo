import React from "react";
import { View, Text, Image } from "react-native";
import styled from "styled-components/native";

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

const Mytext = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  text-align: center;
  margin-top: ${(props) => props.theme.space[1]};
`;

const MapCallout = ({ restaurant }) => {
  return (
    <Container>
      <RestaurantImage source={{ uri: restaurant.photos[0] }} />
      <Mytext>{restaurant.name}</Mytext>
    </Container>
  );
};

export default MapCallout;
