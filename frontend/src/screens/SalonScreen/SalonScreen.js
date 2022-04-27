import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Alert,
} from "react-native";

import salonbg from "../../../assets/salonbg.png";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { useForm } from "react-hook-form";

const SalonScreen = ({ navigation }) => {

  const onBackPress = () => {
    // set route
    navigation.push("Home");
  };
  return (
    <>
      <ImageBackground
        source={salonbg}
        style={styles.image}
        resizeMode="cover"
      />
      <Ionicons
        style={styles.backIcon}
        name="md-chevron-back-circle-sharp"
        onPress={onBackPress}
        size={40}
        color="white"
      />
      <View style={styles.container}>
      <Text style={styles.title}>Stylers Salon</Text>

        <Text style={{ marginTop: 15, marginStart: 20 }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
          corporis laudantium ratione, sapiente voluptatibus pariatur
          repellendus, exercitationem asperiores illo saepe rem! Ullam omnis
          odio recusandae consequuntur veritatis assumenda perspiciatis. Minima!
        </Text>
        <Text style={{ marginTop: 10, marginStart: 20}}>Open Hours: Monday - Friday | 09:00AM - 09:00PM</Text>
        <Text style={{ marginTop: 10, marginStart: 20}}>Contact #: 123 4567 890</Text>
        <Text style={{ marginTop: 10, marginStart: 20}}>Address: ABC Lane, 2nd Floor, G/13-1</Text>
      </View>
      </>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 260,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#5085E1",
    marginBottom: 20,
    borderBottomWidth: 2,
    borderColor: "#A2BCED",
    paddingBottom: 10,
    marginRight: 100,
    marginLeft: 100,
    marginTop: 20,
    textAlign: "center"
  },
  container: {
    position: "absolute",
    width: "100%",
    height: "65%",
    backgroundColor: "white",
    bottom: 0,
    borderTopLeftRadius: 45,
    borderTopRightRadius: 45,
    borderColor: "#5085E1",
  },

  backIcon: {
    position: "absolute",
    marginLeft: 15,
    marginTop: 15,
  },
});

export default SalonScreen;
