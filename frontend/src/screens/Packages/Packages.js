import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  FlatList,
  Alert
} from "react-native";
import React from "react";
import myData from "../../DummyData/SalonPackageData.json";
import AntDesign from "@expo/vector-icons/AntDesign";

const Packages = () => {
  const AddToCart = () => {
    Alert.alert("", "Added to cart.");
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <SafeAreaView>
        <Text style={styles.heading}>Packages</Text>
        <FlatList
          data={myData}
          renderItem={({ item, id }) => (
            <TouchableOpacity
              key={id}
              style={styles.card}
              onPress={() => navigation.navigate({ myData })}
            >
              <View style={styles.container}>
                <Image source={{ uri: item.img }} style={styles.cardImg} />
                <View style={styles.ViewTextSalon}>
                  <Text style={styles.salonText}>Name: {item.label}</Text>
                  <Text style={styles.salonText}>Price: {item.price}</Text>
                </View>
                <AntDesign
                  name="plussquare"
                  size={24}
                  color="black"
                  onPress={AddToCart}
                  style={styles.addToCartIcon}
                />
              </View>
            </TouchableOpacity>
          )}
        />
      </SafeAreaView>
    </ScrollView>
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

export default Packages;
