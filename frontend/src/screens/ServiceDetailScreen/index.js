import { View, Text, StyleSheet, Image, Button } from "react-native";
import React, { useState } from "react";
import service from "../../DummyData/SalonServiceData.json";
const data = service[0];

const ServiceDetailScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: data.img }} style={styles.image} />
      <View style={styles.wrapper}>
        <Text style={styles.title}>{data.servicename}</Text>
        <Text style={styles.label}>{data.label}</Text>
        <Text style={styles.description}>{data.description}</Text>
      </View>

      <View style={styles.cart}>
        <Text style={styles.price}>Add to Cart PKR: {data.price}/=</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cart: {
    marginTop: "auto",
    backgroundColor: "#5085E1",
    padding: 20,
    width: "80%",
    alignSelf: "center",
    justifyContent: "center",
    marginBottom: 10,
    borderRadius: 20,
  },
  container: {
    flex: 1,
    width: "100%",
  },
  wrapper: {
    padding: 10,
  },
  separator: {
    height: 1,
    backgroundColor: "lightgrey",
    marginVertical: 10,
  },
  image: {
    marginTop: 30,
    width: "100%",
    aspectRatio: 5 / 4,
  },

  title: {
    fontSize: 24,
    fontWeight: "700",
    marginVertical: 5,
  },
  label: {
    fontSize: 20,
    color: "grey",
  },

  description: {
    fontSize: 16,
    fontWeight: "700",
    color: "blue",
    marginTop: 30,
  },

  price: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
});

export default ServiceDetailScreen;
