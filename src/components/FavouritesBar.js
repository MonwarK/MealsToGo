import React from "react";
import { FlatList, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { Spacer } from "./Spacer";
import CompactRestaurantCard from "../features/map/components/MapCallout";

const FavouritesWrapper = styled.View`
  padding: 10px;
`;

const FavouritesBar = ({ favourites, navigation }) => {
  return (
    <FavouritesWrapper>
      <FlatList
        data={favourites}
        renderItem={(restaurant) => (
          <Spacer position="left" size="medium">
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("RestaurantDetail", {
                  restaurant: restaurant.item,
                })
              }
            >
              <CompactRestaurantCard restaurant={restaurant.item} />
            </TouchableOpacity>
          </Spacer>
        )}
        keyExtractor={(_, i) => i}
        horizontal={true}
      />
    </FavouritesWrapper>
  );
};

export default FavouritesBar;
