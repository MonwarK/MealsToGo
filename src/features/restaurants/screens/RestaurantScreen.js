import React, { useContext, useState } from "react";
import { FlatList, TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";
import { SafeArea } from "../../../components/utility/SafeArea.component";
import RestaurantInfoCard from "../components/RestaurantInfoCard";
import { RestaurantsContext } from "../../../services/restaurants/RestaurantsContext";
import Search from "../components/Search";
import { ActivityIndicator, Colors } from "react-native-paper";
import { FavouritesContext } from "../../../services/favourites/FavouritesContext";
import FavouritesBar from "../../../components/FavouritesBar";
import FadeAnimation from "../../../components/animations/FadeAnimation";

const LoadingContainer = styled(View)`
  flex: 1;
  justify-content: center;
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const RestaurantScreen = ({ navigation }) => {
  const { restaurants, isLoading } = useContext(RestaurantsContext);
  const { favourites } = useContext(FavouritesContext);
  const [isToggled, setIsToggled] = useState(false);

  return (
    <SafeArea>
      <Search
        isToggled={isToggled}
        onToggled={() => favourites.length && setIsToggled(!isToggled)}
      />
      {isToggled && (
        <FavouritesBar navigation={navigation} favourites={favourites} />
      )}
      {isLoading ? (
        <LoadingContainer>
          <ActivityIndicator
            size="large"
            color={Colors.purple400}
            animating={true}
          />
        </LoadingContainer>
      ) : (
        <FadeAnimation>
          <RestaurantList
            data={restaurants}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("RestaurantDetail", { restaurant: item })
                  }
                >
                  <RestaurantInfoCard restaurant={item} />
                </TouchableOpacity>
              );
            }}
            keyExtractor={(item) => item.name}
          />
        </FadeAnimation>
      )}
    </SafeArea>
  );
};

export default RestaurantScreen;
