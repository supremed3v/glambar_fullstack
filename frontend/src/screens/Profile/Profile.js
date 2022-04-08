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
  
  const Profile = ({ navigation }) => {
    const [Firstname, setFirstname] = useState("");
    const [lastname, setlastname] = useState("");
    const [contact, setcontact] = useState("");
    const { height } = useWindowDimensions();
  
    const onUpdateProfilePressed = () => {
      navigation.navigate("Home");
    };
    const onForgotPasswordPressed = () => {
        navigation.push("ForgotPassword");
      };

    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <ImageBackground source={image} resizeMode="cover" style={styles.image}>
            
            <View style={styles.centerItems}>
              <Text style={styles.text}>Profile</Text>
  
              <CustomInput
                placeholder="Firstname"
                value={Firstname}
                setValue={setFirstname}
              />
              <CustomInput
                placeholder="Lastname"
                value={lastname}
                setValue={setlastname}
              />
              <CustomInput
                placeholder="contact"
                value={contact}
                setValue={setcontact}
              />
  
              <CustomButton text="Update Profile" onPress={onUpdateProfilePressed} />
  
              <CustomButton
                text="Forgot Password?"
                onPress={onForgotPasswordPressed}
                type="SECONDARY"
              />
  
            </View>
          </ImageBackground>
        </View>
      </ScrollView>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
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
  
  export default Profile;
  