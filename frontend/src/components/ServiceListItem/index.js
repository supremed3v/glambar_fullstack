import { View, Text, Image, FlatList, StyleSheet } from 'react-native'
import React from 'react'

const ServiceListItem= ({salon})=>{
  return (
    <View style={styles.container}>
        <View style={{flex: 1}}>
       <Text style={styles.name}>{salon.servicename}</Text>
       <Text style={styles.label}>{salon.label}</Text>
       <Text style={styles.description} numberOfLines={2}>{salon.description}</Text>
       <Text style={styles.price}>{salon.price}</Text>
       </View>
       {salon.img && ( <Image source={{uri: salon.img}} style={styles.image} />)}
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
        marginVertical: 10,
        marginHorizontal: 20,
        borderBottomColor: "lightgrey",
        borderBottomWidth: 1,
        flexDirection: "row"
    },
    name: {
        fontWeight: "700",
        fontSize: 16,
        letterSpacing: 0.5,
    },
    label: {
    },
    description: {
        color: "gray",
        marginVertical: 5,
    },
    price: {
        fontSize: 16,
    },
    image :{
        height: 75,
        aspectRatio: 1,
    }
})

export default ServiceListItem;