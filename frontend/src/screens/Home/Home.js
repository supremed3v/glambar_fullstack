import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { useForm } from "react-hook-form";
import CustomInput from "../../components/CustomInput";
import Ionicons from "@expo/vector-icons/Ionicons";
import Feather from "@expo/vector-icons/Feather";
import Entypo from "@expo/vector-icons/Entypo";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useState, useEffect } from "react";
import { DataStore } from "aws-amplify";
import { Salon, Service } from "../../models";
import { LogBox } from "react-native";

LogBox.ignoreLogs(["Setting a timer"]);

const Home = ({ navigation }) => {
  const [salon, setSalon] = useState([]);

  useEffect(() => {
    DataStore.query(Salon).then(setSalon);
  }, []);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.topnav}>
        <AntDesign name="menuunfold" size={24} color="black" />
        <Text> G 14/4, Islamabad</Text>
        <View style={styles.topnav2}>
          <Entypo name="bell" size={24} color="black" />
          <Feather name="shopping-cart" size={24} color="black" />
        </View>
      </View>
      <SafeAreaView>
        <FlatList
          data={salon}
          ListHeaderComponent={
            <View style={styles.container}>
              <CustomInput
                name="search"
                placeholder="Search here..."
                control={control}
                rules={{
                  minLength: {
                    value: 30,
                    message: "30 Characters",
                  },
                }}
              />
            </View>
          }
          renderItem={({ item, id }) => (
            <TouchableOpacity
              key={id}
              style={styles.card}
              onPress={() =>
                navigation.navigate("SalonScreen", { id: Salon.id })
              }
            >
              <Image source={{ uri: item.image }} style={styles.cardImg} />
              <View style={styles.textSalon}>
                <Text>{item.name}</Text>
                <View style={styles.textRating}>
                  <Text>
                    <Ionicons name="star" size={14} color="yellow" />{" "}
                    {item.rating.toFixed(1)}
                  </Text>
                </View>
              </View>
              <Text>{item.gender}</Text>
            </TouchableOpacity>
          )}
        />
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
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

  textSalon: {
    fontSize: 48,
    flexDirection: "row",
    fontWeight: "bold",
    color: "#5085E1",
    alignItems: "center",
    marginRight: 60,
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

export default Home;
