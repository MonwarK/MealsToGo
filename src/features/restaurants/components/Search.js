import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";
import { AntDesign } from "@expo/vector-icons";

import { LocationContext } from "../../../services/location/LocationContext";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

function Search({ isToggled, onToggled }) {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  useEffect(() => {
    search(searchKeyword);
  }, []);

  return (
    <SearchContainer>
      <Searchbar
        placeholder="Search for a location"
        value={searchKeyword}
        onSubmitEditing={() => {
          search(searchKeyword);
        }}
        onChangeText={(text) => {
          setSearchKeyword(text);
        }}
        icon={isToggled ? "heart" : "heart-outline"}
        onIconPress={onToggled}
      />
    </SearchContainer>
  );
}

export default Search;
