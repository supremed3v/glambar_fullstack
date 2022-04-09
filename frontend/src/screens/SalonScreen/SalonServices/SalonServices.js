import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import salonbg from "../../../../assets/salonbg.jpeg";
import CustomButton from "../../../components/CustomButton";

const SalonServices = () => {
  const AddToCart = () => {
    console.log("Pressed");
  };
  return (
    <View style={{ marginTop: 50 }}>
      <View>
        <Image style={styles.image} source={salonbg} resizeMode="cover" />
      </View>
      <View style={styles.container}>
        <Text
          style={{
            marginTop: 30,
            marginLeft: 25,
            fontWeight: "bold",
            fontSize: 20,
          }}
        >
          Services
        </Text>
        <View style={styles.card}>
          <Image
            source={{
              uri: "https://images.pexels.com/photos/7142792/pexels-photo-7142792.jpeg?cs=srgb&dl=pexels-koolshooters-7142792.jpg&fm=jpg",
            }}
            resizeMode="cover"
            style={styles.cardImage}
          />
          <View style={styles.textWrapper}></View>
          <Text>asdsadaswd {"\n"}asdasasd</Text>
        </View>
        <View>
          <Text>Price: 1900/=</Text>
          <View style={{ marginTop: 30 }}>
            <TouchableOpacity
              onPress={AddToCart}
              style={{
                backgroundColor: "#c4c4c4",
                padding: 10,
                width: "30%",
                marginLeft: 20,
                borderRadius: 10,
              }}
            >
              <Text>Add to cart</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 500,
  },
  container: {
    bottom: 0,
    width: "100%",
    height: "40%",
    position: "absolute",
    backgroundColor: "white",
    borderTopLeftRadius: 45,
    borderTopRightRadius: 45,
  },
  flexContainer: {
    flexDirection: "row",
    marginLeft: 20,
    marginTop: 20,
  },
  text: {
    paddingRight: 20,
  },
  textAbout: {
    fontWeight: "bold",
    paddingRight: 20,
  },
  cardImage: {
    width: 75,
    height: 75,
    borderRadius: 15,
  },
  card: {
    marginTop: 50,
    marginLeft: 50,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  textWrapper: {
    marginVertical: 10,
  },
});

export default SalonServices;
