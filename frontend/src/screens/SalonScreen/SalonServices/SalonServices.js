import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import CustomButton from "../../../components/CustomButton";

const SalonServices = () => {
  const AddToCart = () => {
    console.log("Pressed");
  };
  return (
    <>
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
        <View>
         {/* new service */}
        <View style={styles.card}>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1605980766335-d3a41c7332a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
            }}
            resizeMode="cover"
            style={styles.cardImage}
          />
          <View style={styles.textWrapper}></View>
          <Text>Hair Color {"\n"}Balayage {"\n"}Price: 1900/=</Text>
        </View>
        
        <View style={{ marginTop: 10 }}>
            <TouchableOpacity
              onPress={AddToCart}
              style={{
                backgroundColor: "#c4c4c4",
                padding: 10,
                width: "40%",
                marginStart:30,
                borderRadius: 10,
              }}
            >
              <Text style={{textAlign: "center"}}>Add to cart</Text>
            </TouchableOpacity>
          </View>
           {/* new service */}
           <View style={styles.card}>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1551392505-f4056032826e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=693&q=80",
            }}
            resizeMode="cover"
            style={styles.cardImage}
          />
          <View style={styles.textWrapper}></View>
          <Text>Makeup {"\n"}Eye Makeup {"\n"}Price: 3000/=</Text>
        </View>
        
        <View style={{ marginTop: 10 }}>
            <TouchableOpacity
              onPress={AddToCart}
              style={{
                backgroundColor: "#c4c4c4",
                padding: 10,
                width: "40%",
                marginStart:30,
                borderRadius: 10,
              }}
            >
              <Text style={{textAlign: "center"}}>Add to cart</Text>
            </TouchableOpacity>
          </View>
           </View>
      </View>
    </>
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
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  card: {
    marginTop: 30,
    marginLeft:30,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  textWrapper: {
    marginTop: 40,
    marginStart: 20,
    marginVertical: 20,
  },
});

export default SalonServices;
