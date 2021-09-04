import React, { useContext } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { SafeArea } from "../../../components/utility/SafeArea.component";
import { FavouritesContext } from "../../../services/favourites/FavouritesContext";
import RestaurantInfoCard from "../../restaurants/components/RestaurantInfoCard";

const FavouritesScreen = ({ navigation }) => {
  const { favourites } = useContext(FavouritesContext);

  return (
    <SafeArea>
      <FlatList
        data={favourites}
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
        contentContainerStyle={{ padding: 16 }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};

export default FavouritesScreen;
