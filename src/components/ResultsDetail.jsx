import React from "react";
import { Text, Image, View, StyleSheet } from "react-native";

const ResultDetail = ({ result }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: result.image_url }} />
      <Text style={styles.name}>{result.name}</Text>
      <Text>
        {result.rating} Stars, {result.review_count} Reviews{" "}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
  },
  image: {
    width: 220,
    height: 110,
    borderRadius: 4,
  },

  name: {
    fontWeight: "800",
  },
});

export default ResultDetail;
