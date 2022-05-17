import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ImageBackground,
} from "react-native";
import React, { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import background from "../../../assets/bg.jpeg";
const TermsandConditions = ({ navigation }) => {
  const onBackPress = () => {
    // set route
    navigation.push("Home");
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
      <View style={styles.container_center}>
        <Text style={styles.heading}>Terms and Conditions</Text>
        <View>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={styles.text}>
              Glam Bar is an android-based salon application which will provide
              a platform where clients can book their appointment easily,
              moreover, job seekers can find their desired job which suits their
              expertise and skills. Clients can review salons and stylists
              online and schedule appointments through this system. The owner of
              a beauty parlor can create an account on this system and define
              the services they provide as well as the stylist information. This
              system allows clients to rate salons and their service s, as well
              as schedule appointments with their favorite stylists online.
              Appointments can also be cancelled online. The clients can also
              leave feedback about the salon or stylist. Both the client and the
              salon benefit from this system. Clients can quickly choose the
              best salon in their area and read reviews from other salon clients
              online. It aids him in deciding whether to use the services of a
              specific salon. In glam bar people will also be able to seek for
              and apply for available jobs offered by the salon based on their
              abilities and experience and the salon managers can also post job
              applications.
            </Text>
          </ScrollView>
        </View>
      </View>
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
    marginRight: 210,
  },
  container: {
    flex: 1,
  },

  text: {
    textAlign: "justify",
    color: "#827676",
    fontWeight: "normal",
    fontSize: 14,
    paddingRight: 30,
    paddingLeft: 30,
  },
  container_center: {
    alignItems: "center",
    marginTop: 30,
  },
  backIcon: {
    marginTop: 10,
    marginLeft: 10,
  },
});
export default TermsandConditions;
