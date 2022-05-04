import { View, Text, Image, FlatList, StyleSheet } from 'react-native'
import React from 'react'


const SalonDetailsPage= ({salondetails})=>{
  return (
    <View style={styles.page}>
        <Image source={{uri: salondetails.img}} style={styles.image} resizeMode="cover" />
        <View style={styles.container}>
      <Text style={styles.title}>{salondetails.name}</Text>
      <Text style={styles.subtitle}>{salondetails.gender}</Text>
      <Text style={styles.menuTitle}>Services</Text>
      </View>
     
    </View>
  )
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
    },
    menuTitle: {
        marginTop: 20,
        fontSize: 20,
        letterSpacing: 0.7
    },
    title: {
        fontSize: 35,
        fontWeight: "600",
        marginVertical: 10,
        
    },
    subtitle: {
        fontSize: 15,
        color: 'grey',
    },
    image: {
        width: "100%",
        aspectRatio: 5 / 3
    },
    container: {
        margin: 10,
    },
})

export default SalonDetailsPage;