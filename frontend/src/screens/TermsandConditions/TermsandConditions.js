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
  const TermsandConditions = () => {
      return (
        <View style={styles.container_center}>
        <Text style={styles.TermsText}>Terms and Condition</Text>
       
         <Text style={styles.text}>
         These Terms of Use (“Terms”) govern your use of the websites and mobile applications provided by foodpanda (or referred to as “us”) (collectively the “Platforms”). Please read these Terms carefully. By accessing and using the Platforms, you agree that you have read, understood and accepted the Terms including any additional terms and conditions and any policies referenced herein, available on the Platforms or available by hyperlink. If you do not agree or fall within the Terms, please do not use the Platforms.
         The Platforms may be used by (i) natural persons who have reached 18 years of age and (ii) corporate legal entities, e.g companies. Where applicable, these Terms shall be subject to country-specific provisions as set out herein.
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
export default TermsandConditions;