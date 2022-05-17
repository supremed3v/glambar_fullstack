import {
<<<<<<< HEAD
  ImageBackground,
  TextInput,
  StyleSheet,
  Text,
  View,
  Alert,
} from "react-native";

import React, { useState } from "react";
import bgSignup from "../../../assets/signup-bg.jpeg";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import { useNavigation, useRoute } from "@react-navigation/native";

import { useForm } from "react-hook-form";

import { Auth } from "aws-amplify";

const VerificationCode = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { control, handleSubmit, watch } = useForm({
    defaultValues: { email: route?.params?.email },
  });

  const email = watch("email");
  // verification textfields

  const onVerificationCodePressed = async (data) => {
    try {
      await Auth.confirmSignUp(data.email, data.code);
      navigation.navigate("Login");
    } catch (e) {
      Alert.alert("Oops", e.message);
    }
  };

  const onResendPress = async () => {
    try {
      await Auth.resendSignUp(email);
      Alert.alert("Success", "Code was resent to your phone number");
    } catch (e) {
      Alert.alert("Ooops", e.message);
    }
  };
  return (
    <ImageBackground source={bgSignup} style={styles.container}>
      <View style={styles.container_center}>
        <Text style={styles.VerificationCodeText}> Confirm your account</Text>
        {/* <Text style={styles.text}>
            Enter your verification code that we sent you through your email.
          </Text> */}
        {/* verification textfields */}
        <CustomInput
          name="email"
          control={control}
          placeholder="Email"
          rules={{
            required: "Email is required to confirm your account",
          }}
        />

        <CustomInput
          name="code"
          control={control}
          placeholder="Enter your confirmation code"
          rules={{
            required: "Confirmation is required",
          }}
        />
        <CustomButton
          text="Confirm"
          onPress={handleSubmit(onVerificationCodePressed)}
        />
        <CustomButton
          text="Resend Code"
          onPress={onResendPress}
          type="SECONDARY"
        />
      </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  VerificationCodeText: {
    marginTop: 60,
    fontSize: 26,
    fontWeight: "bold",
    color: "#5085E1",
  },
  container: {
    flex: 1,
  },
  text: {
    marginTop: 15,
    textAlign: "center",
    paddingLeft: 10,
    paddingRight: 10,
    color: "#827676",
    fontWeight: "normal",
    marginBottom: 10,
  },
  container_center: {
    alignItems: "center",
    marginTop: 30,
  },

  TextInputView: {
    borderBottomWidth: 2,
    width: 30,
    justifyContent: "center",
    alignItems: "center",
    fontSize: 30,
    marginTop: 40,
    marginLeft: 50,
    marginRight: 20,
    marginEnd: 30,
    marginStart: 20,
  },
  btn: {
    marginTop: 50,
    width: "80%",
    borderRadius: 15,
    padding: 10,
    alignItems: "center",
    marginVertical: 11,
  },
});
export default VerificationCode;
=======
    ImageBackground,
    TextInput,
    Image,
    StyleSheet,
    Text,
    View,
    useWindowDimensions,
    ScrollView
  } from "react-native";
  
  import React, { useState} from "react";
  import bgSignup from "../../../assets/signup-bg.jpeg";
  import CustomInput from "../../components/CustomInput";
  import CustomButton from "../../components/CustomButton";
  
  
  
  const VerificationCode = () => {
    // verification textfields
  
    const [pin1, setPin1] = useState("");
    const [pin2, setPin2] = useState("");
    const [pin3, setPin3] = useState("");
    const [pin4, setPin4] = useState("");
    const onVerificationCodePressed = () => {
      console.warn("Verification Code Submitted");
    }
    return (
      <ImageBackground source={bgSignup} style={styles.container}>
        <View style={styles.container_center}>
          <Text style={styles.VerificationCodeText}> Verification Code</Text>
          <Text style={styles.text}>
            Enter your verification code that we sent you through your email.
          </Text>
          {/* verification textfields */}
          <View style={{ flex: 1,  flexDirection: "row", justifyContent: "space-around" }}>
            {/* textfield:1 */}
            <View>
              <TextInput
                keyboardType={"number-pad"}
                maxLength={1}
                onChange={(pin1) => {
                  setPin1(pin1);
                }}
                style={styles.TextInputView}
              />
            </View>
            {/* textfield:2 */}
            <View>
              <TextInput
                keyboardType={"number-pad"}
                maxLength={1}
                onChange={(pin2) => {
                  setPin2(pin2);
                }}
                style={styles.TextInputView}
              />
            </View>
            {/* textfield:3 */}
            <View>
              <TextInput
                keyboardType={"number-pad"}
                maxLength={1}
                onChange={(pin3) => {
                  setPin3(pin3);
                }}
                style={styles.TextInputView}
              />
            </View>
            {/* textfield:4 */}
            <View>
              <TextInput
                keyboardType={"number-pad"}
                maxLength={1}
                onChange={(pin4) => {
                  setPin4(pin4);
                }}
                style={styles.TextInputView}
              />
            </View>
          </View>
          <View style={styles.btn}>
          <CustomButton  text="Submit" onPressed={onVerificationCodePressed}  />
          </View>
        </View>
        
      </ImageBackground>
    );
  
  };
  const styles = StyleSheet.create({
    VerificationCodeText: {
      marginTop: 60,
      fontSize: 26,
      fontWeight: "bold",
      color: "#5085E1",
    },
    container: {
      flex: 1,
    },
    text: {
      marginTop: 15,
      textAlign: "center",
      paddingLeft: 10,
      paddingRight: 10,
      color: '#827676',
      fontWeight: 'normal',
      marginBottom: 10,
    },
    container_center: {
      alignItems: "center",
      marginTop: 30,
    },
  
    TextInputView: {
      borderBottomWidth: 2,
      width: 30,
      justifyContent: "center",
      alignItems: "center",
      fontSize:30,
      marginTop:40,
      marginLeft: 50,
      marginRight:20,
      marginEnd:30,
      marginStart:20
    },
    btn: {
      marginTop: 50,
      width:"80%",
      borderRadius:15,
      padding:10,
      alignItems: "center",
      marginVertical:11
  }
  });
  export default VerificationCode;
  
>>>>>>> c30596f4b1f8e36cff0c4fbc8e9a05c575589576
