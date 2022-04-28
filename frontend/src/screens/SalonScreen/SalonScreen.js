import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Alert,
  ActivityIndicator,
} from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";

import salonbg from "../../../assets/salonbg.png";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { DataStore } from "aws-amplify";
import { Salon } from "../../models";

const SalonScreen = ({ navigation }) => {
  const [salon, setSalon] = useState(null);
  const route = useRoute();
  const id = route.params?.id;

  useEffect(() => {
    // Fetch salon with id
    DataStore.query(Salon, id).then(setSalon);
  }, [id]);

  if (!salon) {
    return <ActivityIndicator size={"large"} color="blue" />;
  }

<<<<<<< HEAD
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
=======
  return (
    <>
      <ImageBackground
        source={salonbg}
        style={styles.image}
        resizeMode="cover"
>>>>>>> 08d6cac4395ce025f847ef3802f651e98816bc50
      />

      <View style={styles.container}>
        <Text style={styles.title}>{}</Text>

        <Text style={{ marginTop: 15, marginStart: 20 }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
          corporis laudantium ratione, sapiente voluptatibus pariatur
          repellendus, exercitationem asperiores illo saepe rem! Ullam omnis
          odio recusandae consequuntur veritatis assumenda perspiciatis. Minima!
        </Text>
        <Text style={{ marginTop: 10, marginStart: 20 }}>
          Open Hours: Monday - Friday | 09:00AM - 09:00PM
        </Text>
        <Text style={{ marginTop: 10, marginStart: 20 }}>
          Contact #: 123 4567 890
        </Text>
        <Text style={{ marginTop: 10, marginStart: 20 }}>
          Address: ABC Lane, 2nd Floor, G/13-1
        </Text>
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
    textAlign: "center",
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
