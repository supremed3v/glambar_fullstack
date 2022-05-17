import {
    ImageBackground,
    StyleSheet,
    Text,
    View,
    ScrollView,
  } from "react-native";
  import background from "../../../assets/bg.jpeg";
  import CustomInput from "../../components/CustomInput";
  import CustomButton from "../../components/CustomButton";
  
  import React from "react";
  
  import { useForm } from "react-hook-form";
  
  const EMAIL_REGEX =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
  const Profile = ({ navigation }) => {
    const { control, handleSubmit } = useForm();

  
    const onUpdatePressed = (data) => {
      console.log(data);
      navigation.navigate("SalonHome");
    };
  
    // try {
    //   const reponse = await axios.post(
    //     "http://10.0.2.2:5000/api/manager/register",
    //     {
    //       salonName,
    //       email,
    //       password,
    //       contactNumber,
    //       address,
    //     }
    //   );
    //   if (reponse.status === 201) {
    //     alert(` You have created: ${JSON.stringify(reponse.data)}`);
    //   } else {
    //     throw new Error(console.log(Error));
    //   }
    // } catch (err) {
    //   console.log(err.message);
    // }
  
    const onSignIn = () => {
      navigation.goBack();
    };
  
    return (
      <ImageBackground
        source={background}
        resizeMode="cover"
        style={styles.container}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.container_center}>
            <Text style={styles.heading}>Profile</Text>
            <CustomInput
              name="contactNumber"
              placeholder="Enter your Contact Number"
              control={control}
              keyboardType={"phone-pad"}
              rules={{
                required: "Contact number is required",
                minLength: {
                  value: 12,
                  message: "Contact number should be 12 numbers long",
                },
              }}
            />
            <CustomInput
              name="city"
              placeholder="Enter City"
              control={control}
              rules={{ required: "City is required" }}
            />
            <CustomInput
              name="area"
              placeholder="Enter Area"
              control={control}
              rules={{ required: "Area is required" }}
            />
            <CustomInput
              name="address"
              placeholder="Enter your Salon Address"
              control={control}
              rules={{ required: "Address is required" }}
            />
           
            <CustomButton
              text="Update"
              onPress={handleSubmit(onUpdatePressed)}
            />
  
          </View>
        </ScrollView>
      </ImageBackground>
    );
  };
  
  const styles = StyleSheet.create({
    heading: {
      marginTop: 55,
      fontSize: 26,
      fontWeight: "bold",
      color: "#5085E1",
      marginBottom: 20,
    },
    container: {
      flex: 1,
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
      marginBottom: 100,
    },
  
    button: {
      color: "#5085E1",
    },
  
    signInText: {
      marginTop: 5,
      color: "#827676",
    },
  });
  export default Profile;
  