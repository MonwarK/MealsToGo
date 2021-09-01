import React, { useContext } from "react";
import { ActivityIndicator, FlatList, View } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components";
import { SafeArea } from "../../../components/utility/SafeArea.component";
import RestaurantInfoCard from "../components/RestaurantInfoCard.component";
import { RestaurantsContext } from "../../../services/restaurants/RestaurantsContext";

const LoadingContainer = styled(View)`
  flex: 1;
  justify-content: center;
`;

const SearchContainer = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const RestaurantScreen = () => {
  const { restaurants, isLoading, error } = useContext(RestaurantsContext);

  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar placeholder="Search" />
      </SearchContainer>
      {isLoading ? (
        <LoadingContainer>
          <ActivityIndicator size="large" color="#0000ff" animating={true} />
        </LoadingContainer>
      ) : (
        <RestaurantList
          data={restaurants}
          renderItem={({ item }) => <RestaurantInfoCard restaurant={item} />}
          keyExtractor={(item) => item.name}
        />
      )}
    </SafeArea>
  );
};

export default RestaurantScreen;
