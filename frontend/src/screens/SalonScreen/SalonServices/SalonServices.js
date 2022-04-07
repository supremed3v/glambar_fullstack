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
        <View>
{/* Services */}
        </View>
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

