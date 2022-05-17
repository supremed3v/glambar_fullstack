import { View, Text, Image, StyleSheet } from "react-native";
import { LogBox } from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";

LogBox.ignoreLogs(["Setting a timer"]);

export default function Salonsalon({ salon }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: salon.image }} style={styles.cardImg} />

      <View style={styles.row}>
          <View>
       
          <Text>{salon.name}</Text>
          <Text>{" "} {salon.gender}</Text>
        
        </View>
        <View style={styles.rating}>
          <Text>
            <Ionicons name="star" size={14} color="yellow" />{" "}
            {salon.rating.toFixed(1)}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  rating: {
    marginLeft: "auto",
  },
  container: {
    alignItems: "center",
    marginTop: 5,
  },

  card: {
    width: 350,
    height: 200,
    paddingLeft: 40,
    paddingRight: 50,
    marginTop: 20,
    marginBottom: 10,
  },
  cardImg: {
    borderRadius: 15,
    width: 280,
    height: 150,
    resizeMode: "cover",
  },

  textRating: {
    paddingLeft: 40,
  },
  topnav: {
    flexDirection: "row",
    marginTop: 10,
    padding: 10,
    paddingRight: 20,
    paddingLeft: 20,
    justifyContent: "space-between",
    alignItems: "center",
  },
  topnav2: {
    flexDirection: "row",
    marginTop: 10,
    padding: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },
});
