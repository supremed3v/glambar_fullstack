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
  import myData from "../../DummyData/SalonHomeData";
  
  const SalonServices2 = ({ navigation }) => {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
      <SafeAreaView>
        <FlatList
          data={myData}
          ListHeaderComponent={
            <View style={styles.container}>
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
              </View>
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
      marginTop: 50,
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
      width: 100,
      height: 100,
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
  });
  
  export default SalonServices2;
  