import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import salonbg from '../../../../assets/salonbg.jpeg'

const SalonServices = () => {
  return (
    <View style={{marginTop: 50}} >
      <View>
        <Image style={styles.image} source={salonbg} resizeMode="cover" />
      </View>
      <View style={styles.container}>
        <Text style={{marginTop: 30, marginLeft: 25,fontWeight: 'bold',fontSize:20}} >Stylers Salon</Text>
        
        <Text style={{marginTop: 20, marginStart: 25}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, corporis laudantium ratione, sapiente voluptatibus pariatur repellendus, exercitationem asperiores illo saepe rem! Ullam omnis odio recusandae consequuntur veritatis assumenda perspiciatis. Minima!</Text>
        <Text style={{marginTop: 5, marginStart: 25}}>Open Hours: Monday - Friday | 09:00AM - 09:00PM </Text>
        <Text style={{marginTop: 5, marginStart: 25}}>Contact #: 123 4567 890</Text>
        <Text style={{marginTop: 5, marginStart: 25}}>Address: ABC Lane, 2nd Floor, G/13-1</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 500,
  },
  container:{
    bottom: 0,
    width: '100%',
    height: '40%',
    position: "absolute",
    backgroundColor: 'white',
    borderTopLeftRadius: 45,
    borderTopRightRadius: 45
  },
  flexContainer: {
    flexDirection: "row",
    marginLeft: 20,
    marginTop: 20,
  },
  text:{
    paddingRight: 20,
  },
  textAbout:{
    fontWeight: "bold",
    paddingRight: 20,
  }
  
  
})

export default SalonServices

