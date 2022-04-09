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
  
  import bgSignup from "../../../assets/signup-bg.jpeg";
  import salonimage from "../../../assets/salonimage.jpeg";
  import CustomInput from "../../components/CustomInput";
  import CustomButton from "../../components/CustomButton";
  
  import React, { useState } from "react";
  
  const UpcomingAppointment = ({ navigation }) => {
  
    const onPassedPressed = () => {
        navigation.navigate("PassedAppointment");
      };
    const onViewServicesPressed = () => {
      navigation.navigate("ViewServices");
    };

    const onCancelPressed = () => {
        console.warn("Cancel");
    };
  
    const onReschedulePressed = () => {
      navigation.navigate("Reschedule");
    };
  
    return (
      <ImageBackground source={bgSignup} style={styles.container}>
        <View style={styles.container_center}>
          <Text style={styles.SignupText}>Appointmets</Text>
        <View style={styles.UpcomingPassed}>
          <CustomButton text="Upcoming" />
          <CustomButton
            text="Passed" onPress={onPassedPressed}
          />
          </View>
          <View style ={styles.salonDetails}>
            <Image source={salonimage} style={styles.card}></Image>
            <View style={styles.salonName}>
            <Text>Styler</Text>
            <Text>Date: 03/07/2022</Text>
            <Text>Time: 01:00PM</Text>
            </View>
          </View>
          <View style={styles.btn}>
          <CustomButton text="View Services" onPress={onViewServicesPressed} />
          <CustomButton text="Cancel" onPress={onCancelPressed} />
          <CustomButton text="Reschedule" onPress={onReschedulePressed} />
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
  export default UpcomingAppointment;