import {
  ImageBackground,
  Image,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";

import background from "../../../assets/bg.jpeg";
import logo from "../../../assets/logo.png";
import CustomButton from "../../components/CustomButton";

const LandingPage = ({ navigation }) => {
  const { height } = useWindowDimensions();

  const getStartedPressed = () => {
    navigation.navigate("Login");
  };

  return (
    <ImageBackground
      source={background}
      resizeMode="cover"
      style={styles.image}
    >
      <View style={styles.centerItems}>
        <Text style={styles.h1}>Glam Bar</Text>
        <Text style={styles.h2}>Your go-to neighbourhood Salon</Text>

        <Image
          source={logo}
          style={[
            styles.logo,
            { height: height * 0.25 },
            { width: "50%" },
            { marginBottom: 60 },
            { marginTop: 60 },
          ]}
        />

        <CustomButton text="Get Started" onPress={getStartedPressed} />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "#000",
    alignItems: "center",
    width: "100%",
  },
  image: {
    flex: 1,
  },
  h1: {
    color: "#5085E1",
    fontSize: 40,
    fontWeight: "bold",
    marginTop: 100,
  },
  h2: {
    color: "#A2BCED",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
  },
  centerItems: {
    marginBottom: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
});

export default LandingPage;
