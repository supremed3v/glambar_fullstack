import {
    ImageBackground,
    TextInput,
    Image,
    StyleSheet,
    Text,
    View,
    useWindowDimensions,
    ScrollView,
  } from "react-native";
  
  import React, { useState } from "react";
  import bgSignup from "../../../assets/signup-bg.jpeg";
  import CustomInput from "../../components/CustomInput";
  import CustomButton from "../../components/CustomButton";
  import Entypo from "@expo/vector-icons/Entypo";
  import AntDesign from "@expo/vector-icons/AntDesign"; 
  
  const AddressDetails = ({ navigation }) => {
  
    const onAddAddressPressed = () => {
        navigation.navigate("AddAddress");
    };

    return (
      <ImageBackground source={bgSignup} style={styles.container}>
        <View style={styles.container_center}>
          <Text style={styles.AddressDetails}>Address Details</Text>
          <View style={styles.Address}>
          <Text style={styles.text}>
            G-14/4 Islamabad.
          </Text>
          <Entypo name="pencil" size={20} color="black" />
          <AntDesign name="delete" size={24} color="black" />
          </View>
          <CustomButton
            text="+ Add New Address"
            onPressed={onAddAddressPressed}
          />
        </View>
      </ImageBackground>
    );
  };
  const styles = StyleSheet.create({
    AddressDetails: {
      marginTop: 60,
      fontSize: 26,
      fontWeight: "bold",
      color: "#5085E1",
    },
    container: {
      flex: 1,
    },
    text: {
      marginTop: 15,
      textAlign: "center",
      paddingLeft: 10,
      paddingRight: 10,
      color: "#827676",
      fontWeight: "normal",
      marginBottom: 10,
    },
    container_center: {
      alignItems: "center",
      marginTop: 30,
    },
  
    button: {
      color: "#5085E1",
    },
    signInText: {
      marginTop: 150,
      color: "#827676",
    },
    Address: {
    fontSize: 48,
    flexDirection: "row",
    fontWeight: "bold",
    color: "#5085E1",
    alignItems: "center",
    justifyContent: "space-between",
    paddingRight: 20,
    }
  });
  export default AddressDetails;
  