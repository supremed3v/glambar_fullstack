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
        <Text style={{marginTop: 20, marginLeft: 20,}} >Stylers Salon</Text>
        <View style={styles.flexContainer} >

        <Text style={styles.textAbout}>About</Text>
        <Text style={styles.text} >Services</Text>
        <Text style={styles.text} >Packages</Text>
        <Text style={styles.text} >Gallery</Text>
        <Text style={styles.text} >Reviews</Text>
        </View>
        <Text style={{marginTop: 20, textAlign: "center"}} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, corporis laudantium ratione, sapiente voluptatibus pariatur repellendus, exercitationem asperiores illo saepe rem! Ullam omnis odio recusandae consequuntur veritatis assumenda perspiciatis. Minima!</Text>
        <Text>Open Hours: Monday - Friday | 09:00AM - 09:00PM</Text>
        <Text>Contact #: 123 4567 890</Text>
        <Text>Address: ABC Lane, 2nd Floor, G/13-1</Text>
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

