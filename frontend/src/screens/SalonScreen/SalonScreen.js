import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import salonbg from "../../../assets/salonbg.jpeg";
import Ionicons from "@expo/vector-icons/Ionicons";

const SalonScreen = () => {
  return (
    <View style={{ marginTop: 50 }}>
      <View>
        <Image style={styles.image} source={salonbg} resizeMode="cover" />
      </View>
      <Ionicons
        style={styles.backIcon}
        name="md-chevron-back-circle-sharp"
        size={40}
        color="white"
      />
      <View>
        <Text></Text>
      </View>
      <View style={styles.container}>
        <Text style={{ marginTop: 25, marginLeft: 20, fontWeight: "bold", fontSize: 20}}>Stylers Salon</Text>

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
  backIcon: {
    position: "absolute",
  },
});

export default SalonScreen;
