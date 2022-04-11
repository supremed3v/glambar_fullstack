import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, SafeAreaView,FlatList } from "react-native";
import React from "react";
import salonbg from "../../../assets/salonbg.jpeg";
import myData from "../../DummyData/SalonPackageData";

const Packages = () => {
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
          Packages
        </Text>
        <View>
             {/* new package */}
        <View style={styles.card}>
          <Image
            source={{
              uri: "https://i.pinimg.com/550x/4e/ab/d3/4eabd3b68c29b33411117742ef10a229.jpg",
            }}
            resizeMode="cover"
            style={styles.cardImage}
          />
          <View style={styles.textWrapper}></View>
          <Text>Mehndi Package {"\n"}Dupatta setting is included. {"\n"}Price: 20000/-</Text>
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
           {/* new package */}
        <View style={styles.card}>
          <Image
            source={{
              uri: "https://i.pinimg.com/originals/04/a7/fb/04a7fbd5418865d88cdc7e8eadc5aebb.jpg",
            }}
            resizeMode="cover"
            style={styles.cardImage}
          />
          <View style={styles.textWrapper}></View>
          <Text>Barat Package {"\n"}Without Services.{"\n"}Price: 50000/-</Text>
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
  textPrice: {
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

export default Packages;
