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
import React, { useState } from "react";
import CustomInput from "../../components/CustomInput";
import Ionicons from "@expo/vector-icons/Ionicons";
import Feather from "@expo/vector-icons/Feather"; 
import Entypo from "@expo/vector-icons/Entypo"; 
import AntDesign from "@expo/vector-icons/AntDesign"; 
import myData from "../../DummyData/SalonHomeData";

const Home = ({ navigation }) => {
  const [search, setSearch] = useState("");

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
          data={myData}
          ListHeaderComponent={
            <View style={styles.container}>
              <CustomInput
                placeholder="Search"
                value={search}
                setValue={setSearch}
              />
            </View>
          }
          renderItem={({ item, id }) => (
            <TouchableOpacity
              key={id}
              style={styles.card}
              onPress={() => navigation.navigate("SalonServices", { myData })}>
              <Image source={{ uri: item.img }} style={styles.cardImg} />
              <View style={styles.textSalon}>
                <Text>{item.name}</Text>
                <Text style={styles.textRating}>
                  <Ionicons name="star" size={14} color="yellow" />{" "}
                  {item.rating}
                </Text>
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
    marginTop: 10,
    paddingHorizontal: 20,
  },

  card: {
    width: 250,
    height: 200,
    paddingLeft: 50,
    paddingRight: 50,
    marginTop: 20,
    marginBottom: 10,
  },
  cardImg: {
    borderRadius: 15,
    width: 250,
    height: 150,
    resizeMode: "cover",
  },

  textSalon: {
    fontSize: 48,
    flexDirection: "row",
    fontWeight: "bold",
    color: "#5085E1",
    alignItems: "center",
    justifyContent: "space-between",
    paddingRight: 20,
  },
  textRating: {
    paddingLeft: 90,
  },
  topnav:{
    flexDirection: "row",
    marginTop: 10,
    padding: 10,
    justifyContent: "space-between",
    alignItems: "center"
  },
  topnav2:{
    flexDirection: "row",
    marginTop: 10,
    padding: 10,
    justifyContent: "space-between",
    alignItems: "center"
  }
});

export default Home;
