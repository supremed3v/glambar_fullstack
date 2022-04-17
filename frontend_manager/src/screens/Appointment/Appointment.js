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
  
  import background from "../../../assets/bg.jpeg";
  import salonimage from "../../../assets/salonimage.jpeg";
  import CustomButton from "../../components/CustomButton";
  
  import React, { useState } from "react";
  
  const Appointment = ({ navigation }) => {
  
    const onAppointmentPressed = () => {
        navigation.navigate("CustomerRequest");
      };
    const onViewDetailsPressed = () => {
      navigation.navigate("Service");
    };

    const onRejectPressed = () => {
        console.warn("Reject");
    };
  
    const onAcceptPressed = () => {
      console.warn("Accept");
  };
  
    return (
      <ImageBackground source={background} style={styles.container}>
        <View style={styles.container_center}>
          <Text style={styles.SignupText}>Appointmets</Text>
        <View style={styles.UpcomingPassed}>
          <CustomButton text="Appointment" onPress={onAppointmentPressed} />
          <CustomButton
            text="Request"
          />
          </View>
          <View style ={styles.salonDetails}>
            <Image source={salonimage} style={styles.card}></Image>
            <View style={styles.salonName}>
            <Text>Anaya</Text>
            <Text>Date: 03/07/2022</Text>
            <Text>Time: 01:00PM</Text>
            </View>
          </View>
          <View style={styles.btn}>
          <CustomButton text="View Services" onPress={onViewDetailsPressed} />
          <CustomButton text="Reject" onPress={onRejectPressed} />
          <CustomButton text="Accept" onPress={onAcceptPressed} />
          </View>
        </View>
      </ImageBackground>
    );
  };
  
  const styles = StyleSheet.create({
    SignupText: {
      marginTop: 60,
      fontSize: 26,
      fontWeight: "bold",
      color: "#5085E1",
      marginBottom: 20,
    },
    container: {
      flex: 1,
    },
    UpcomingPassed:{
        flexDirection: "row",
        width: 200,
        marginRight: 100,
      alignItems: "center",
      alignContent: "space-between"
      
    },
    salonDetails:{
        flexDirection: "row"
    },
    text: {
      marginTop: 20,
      textAlign: "left",
      color: "#827676",
      fontWeight: "normal",
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
    card: {
      borderRadius: 15,
      width: 150,
      height: 100,
      resizeMode: "cover",
      padding: 20,
    },
    salonName:{
      flexDirection: "column",
      padding: 20,
    },
    btn: {
      flexDirection: "row",
      width: 150,
      marginRight: 200,
      alignItems: "center",
      alignContent: "space-between"
    }
  });
  export default Appointment;