import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Salon } from "../../../models";
import { useRoute } from "@react-navigation/native";

<<<<<<< HEAD
const SalonServices = ({}) => {
  const [salon, setSalon] = useState(null);
  const route = useRoute();
  const id = route.params?.id;

  useEffect(() => {
    // Fetch salon with id
    DataStore.query(Salon, id).then(setSalon);
  }, []);

  if (!salon) {
    return <ActivityIndicator size={"large"} color="blue" />;
  }
=======
const SalonServices = ({ navigation }) => {
  
>>>>>>> ffaaa7e0c78a482d983a5f9d0ca6910fd86ec5e0

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
            <Text>
              Hair Color {"\n"}Balayage {"\n"}Price: 1900/=
            </Text>
          </View>

          <View style={{ marginTop: 10 }}>
            <TouchableOpacity
              onPress={AddToCart}
              style={{
                backgroundColor: "#c4c4c4",
                padding: 10,
                width: "40%",
                marginStart: 30,
                borderRadius: 10,
              }}
            >
              <Text style={{ textAlign: "center" }}>Add to cart</Text>
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
            <Text>
              Makeup {"\n"}Eye Makeup {"\n"}Price: 3000/=
            </Text>
          </View>

          <View style={{ marginTop: 10 }}>
            <TouchableOpacity
              onPress={AddToCart}
              style={{
                backgroundColor: "#c4c4c4",
                padding: 10,
                width: "40%",
                marginStart: 30,
                borderRadius: 10,
              }}
            >
              <Text style={{ textAlign: "center" }}>Add to cart</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#5085E1",
    marginBottom: 20,
    borderBottomWidth: 2,
    borderColor: "#A2BCED",
    marginTop: 60,
    marginStart: 25,
    paddingBottom: 10,
    marginRight: 200,
  },
  container: {
    padding: 10,
    borderRadius: 5,
    flexDirection: "row",
    width: 380,
    height: 120,
    backgroundColor: "#f0f0f0",
  },
  ViewTextSalon: {
    marginStart: 15,
    justifyContent: "center",
  },
  salonText: {
    fontSize: 14,
    width: 120,
  },
  card: {
    margin: 10,
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
  },
  cardImg: {
    borderRadius: 5,
    width: 120,
    height: 100,
    resizeMode: "cover",
  },
  addToCartIcon: {
    marginStart: 80,
    marginTop: 40,
    marginEnd: 20,
  },
});

export default SalonServices;
