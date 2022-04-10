import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, SafeAreaView, FlatList } from "react-native";
import React from "react";
import salonbg from "../../../assets/salonbg.jpeg";

const Reviews = () => {
    const AddToCart = () => {
        console.log("Pressed");
    };
    return (
        <View style={{ marginTop: 50 }}>
            <View>
                <Image style={styles.image} source={salonbg} resizeMode="cover" />
            </View>

            <View style={styles.container}>
                <Text
                    style={{
                        marginTop: 30,
                        marginLeft: 25,
                        fontWeight: "bold",
                        fontSize: 20,
                    }}
                >
                    Reviews
                </Text>
        
        <View>
        <Text style={{  marginTop:25 ,marginStart: 25, marginLeft:25, fontWeight:"bold",fontSize:17 }}>
          Anaya Rajpoot
        </Text>
        <Text style={{ marginTop: 5,marginStart: 25, marginLeft:25,}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
          corporis laudantium ratione, sapiente voluptatibus pariatur
          repellendus, exercitationem asperiores illo saepe rem!</Text>
        </View>
        {/* new review */}
        <View>
        <Text style={{  marginTop:25 ,marginStart: 25, marginLeft:25, fontWeight:"bold",fontSize:17 }}>
          Amna Ilyas
        </Text>
        <Text style={{ marginTop: 5,marginStart: 25, marginLeft:25,}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
          corporis laudantium ratione, sapiente voluptatibus pariatur
          repellendus, exercitationem asperiores illo saepe rem!</Text>
        </View>
        {/* new review */}
        <View>
        <Text style={{  marginTop:25 ,marginStart: 25, marginLeft:25, fontWeight:"bold",fontSize:17 }}>
          Sabeena Kiyani
        </Text>
        <Text style={{ marginTop: 5,marginStart: 25, marginLeft:25,}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
          corporis laudantium ratione, sapiente voluptatibus pariatur
          repellendus, exercitationem asperiores illo saepe rem!</Text>
        </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: 500,
    },
    container: {
        bottom: 0,
        width: "100%",
        height: "40%",
        position: "absolute",
        backgroundColor: "white",
        borderTopLeftRadius: 45,
        borderTopRightRadius: 45,
      },
    flexContainer: {
        flexDirection: "row",
        marginLeft: 20,
        marginTop: 20,
    },
    text: {
        paddingRight: 20,
    },
    textPrice: {
        fontWeight: "bold",
        paddingRight: 20,
    },
    cardImage: {
        width: 80,
        height: 80,
        borderRadius: 10,
    },
    card: {
        marginTop: 30,
        marginLeft: 30,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
    textWrapper: {
        marginTop: 40,
        marginStart: 20,
        marginVertical: 20,
    },
});

export default Reviews;
