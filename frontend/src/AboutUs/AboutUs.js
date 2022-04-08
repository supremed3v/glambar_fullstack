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
  
  import CustomInput from "../../components/CustomInput";
  import CustomButton from "../../components/CustomButton";
  const AboutUs = () => {
      return (
        <View style={styles.container_center}>
        <Text style={styles.TermsText}>About Us</Text>
       
         <Text style={styles.text}>
         Glam Bar is an android-based salon application which will provide a platform where clients can book their appointment easily, moreover, job seekers can find their desired job which suits their expertise and skills. Clients can review salons and stylists online and schedule appointments through this system. The owner of a beauty parlor can create an account on this system and define the services they provide as well as the stylist information. This system allows clients to rate salons and their service s, as well as schedule appointments with their favorite stylists online. Appointments can also be cancelled online. The clients can also leave feedback about the salon or stylist. Both the client and the salon benefit from this system. Clients can quickly choose the best salon in their area and read reviews from other salon clients online. It aids him in deciding whether to use the services of a specific salon. In glam bar people will also be able to seek for and apply for available jobs offered by the salon based on their abilities and experience and the salon managers can also post job applications. 
     </Text>
     </View>

      );
      
  };
  const styles = StyleSheet.create({
    TermsText: {
      marginTop: 40,
      fontSize: 26,
      fontWeight: "bold",
      color: "#5085E1",
      paddingRight: 80,
    },
    container: {
      flex: 1,
    },
  
    text: {
      marginTop: 10,
      textAlign: "justify",
      color: '#827676',
      fontWeight: 'normal',
      paddingRight: 23,
      paddingLeft: 20,
    },
    container_center: {
      alignItems: "center",
      marginTop: 30,
    }
    
  
});
export default AboutUs;