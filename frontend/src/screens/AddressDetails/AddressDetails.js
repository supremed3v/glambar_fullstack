import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";
import Entypo from "@expo/vector-icons/Entypo";
import AntDesign from "@expo/vector-icons/AntDesign";
import background from "../../../assets/bg.jpeg";
import CustomButton from "../../components/CustomButton";
import React from "react";
import { useForm } from "react-hook-form";


const AddressNavigation = ({ navigation }) => {
  const onBackPress = () => {
    // set route
    navigation.push("SalonHome");
  };
  return (
    <ImageBackground
      source={background}
      resizeMode="cover"
      style={styles.container}
    >
      <Ionicons
        style={styles.backIcon}
        name="md-chevron-back-circle-sharp"
        onPress={onBackPress}
        size={40}
        color="#5085E1"
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container_center}>
        <Text style={styles.heading}>Address Details</Text>
        <View style={styles.Address}>
          <Text style={styles.text}>G-14/4 Islamabad.</Text>
          <Entypo name="pencil" size={20} color="black"/>
          <AntDesign name="delete" size={24} color="black"/>
        </View>
        <CustomButton
          text="+ Add New Address"
          onPress={() => navigation.navigate("AddAddress")}
        />
      </View>
      </ScrollView>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#5085E1",
    marginBottom: 20,
    borderBottomWidth: 2,
    borderColor: "#A2BCED",
    paddingBottom: 10,
    marginRight: 130,
  },
  container: {
    flex: 1,
  },
  container_center: {
    alignItems: "center",
    marginTop: 40,
  },
  backIcon: {
    marginTop: 10,
    marginLeft: 10,
  },
  text: {
    marginTop: 15,
    textAlign: "center",
    paddingRight: 100,
    paddingLeft:20,
    color: "#827676",
    fontWeight: "normal",
    marginBottom: 20,
  },
  Address: {
    fontSize: 48,
    flexDirection: "row",
    fontWeight: "bold",
    color: "#5085E1",
    alignItems: "center",
    justifyContent: "space-between",
    paddingRight: 20,
    marginBottom: 300,
  },
});
export default AddressNavigation;
