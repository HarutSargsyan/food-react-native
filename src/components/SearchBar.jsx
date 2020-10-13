import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather name="search" style={styles.iconStyle} />
      <TextInput
        placeholder="Search"
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.inputStyle}
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    marginVertical: 10,
    marginHorizontal: 15,
    backgroundColor: "#F0EEEE",
    height: 50,
    borderRadius: 5,
    display: "flex",
    flexDirection: "row",
  },

  inputStyle: {
    flex: 1,
    fontSize: 18,
  },

  iconStyle: {
    fontSize: 35,
    alignSelf: "center",
  },
});

export default SearchBar;
