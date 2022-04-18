import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Alert,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import background from "../../../assets/bg.jpeg";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import React from "react";
import { useForm } from "react-hook-form";

const Complain = ({ navigation }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSave = (data) => {
    console.log(data);
    Alert.alert("Your Complain is Registered", "We'll make sure to resolve your issue as soon as possible.");
  };
  const onBackPress = () => {
    // set route
    navigation.push("PassedAppointment");
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
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container_center}>
          <Text style={styles.heading}>Complain</Text>

          <CustomInput
          name="complain"
          placeholder="Enter Your Complain here"
          control={control}
          rules={{ required: "To proceed further you need to file a complain here." }}
        />

<CustomButton text="Submit" onPress={handleSubmit(onSave)} />

        </View>
        </ScrollView>
      </ImageBackground>
    );
  };
  
  const styles = StyleSheet.create({
    heading: {
      marginTop: 30,
      fontSize: 26,
      fontWeight: "bold",
      color: "#5085E1",
      marginBottom: 20,
      borderBottomWidth: 2,
      borderColor: "#A2BCED",
      paddingBottom: 10,
      marginRight: 180,
    },
    container: {
      flex: 1,
    },
    container_center: {
      alignItems: "center",
      marginTop: 30,
      marginBottom: 100,
    },
    backIcon: {
      marginTop: 10,
      marginLeft: 10,
    },
  });
  export default Complain;