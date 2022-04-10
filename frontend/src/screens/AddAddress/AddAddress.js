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

import image from "../../../assets/bg-screen.jpg";
import logo from "../../../assets/logo-white.png";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";

import React, { useState } from "react";

const AddAddress = ({ navigation }) => {
  const [newAddress, setnewAddress] = useState("");
  const { height } = useWindowDimensions();

  const onAddAddressPressed = () => {
    navigation.push("Address Added.");
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
          <View style={styles.centerItems}>
            <Text style={styles.text}>Add Your Address</Text>

            <CustomInput
              placeholder="Address"
              value={newAddress}
              setValue={setnewAddress}
            />
            <CustomButton text="Add" onPress={onAddAddressPressed} />
          </View>
        </ImageBackground>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
  },
  image: {
    flex: 1,
  },
  centerItems: {
    marginTop: 5,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  text: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    width: 250,
    marginBottom: 10,
  },
  logo: {
    width: "50%",
    maxHeight: 300,
    display: "flex",
    zIndex: 2,
    maxWidth: 500,
  },
});

export default AddAddress;
