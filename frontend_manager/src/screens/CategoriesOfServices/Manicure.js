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
  
  import bgClientDetails from "../../../assets/signup-bg.jpeg";
  
  import CustomInput from "../../components/CustomInput";
  import CustomButton from "../../components/CustomButton";
  import React, { useState } from "react";
  
  const Manicure = ({ navigation }) => {
    const [label, setLabel] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
  
    const onSave = () => {
      navigation.navigate("Home");
    };
    return (
      <ImageBackground source={bgClientDetails} style={styles.container}>
        <View style={styles.container_center}>
          <Text style={styles.ProfileText}>Manicure</Text>
          <CustomInput
            placeholder="Service Label"
            value={label}
            setValue={setLabel}
          />

          <CustomInput
            placeholder="Description "
            value={description}
            setValue={setDescription} 
            
          />
          <CustomInput
            placeholder="Price"
            value={price}
            setValue={setPrice}
            keyboardType= "numeric"
          />
          <CustomButton text="Submit" onPress={onSave} />
        </View>
      </ImageBackground>
    );
  };
  const styles = StyleSheet.create({
    ProfileText: {
      marginTop: 60,
      fontSize: 26,
      fontWeight: "bold",
      color: "#5085E1",
      marginBottom: 20,
    },
    container: {
      flex: 1,
    },
    container_center: {
      alignItems: "center",
      marginTop: 30,
    },
  });
  export default Manicure;
  