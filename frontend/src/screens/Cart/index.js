import { View, Text,StyleSheet, Image, Button, Platform } from 'react-native'
import React, {useState} from 'react'
import service from '../../DummyData/SalonServiceData.json' 
import DatePicker from 'react-native-modern-datepicker'
const data = service[0]

const ServiceDetailScreen = () => {
    const [selectedDate, setSelectedDate] = useState('');


  return (
    <View style={styles.container}>
        
        <View style={styles.wrapper}>
      <Text style={styles.title}>XYZ Salon</Text>
      <Text>Selected Service</Text>
      <View style={styles.row}>
     
          <Text style={{color: "grey", fontWeight: "bold"}}>Label :{data.label}</Text>
          <Text style={{marginLeft: 20, fontWeight: "bold"}}>Service: {data.servicename}</Text>
          <Text style={{marginLeft: "auto", fontWeight: "bold"}}>{data.price}</Text>
      
      </View>
      <View style={styles.separator} />
      
      <DatePicker
      onSelectedChange={date => setSelectedDate(date)}
    />
    <Text>{selectedDate.toLocaleString()}</Text>
      </View>
      
    <View style={styles.cart}>
        <Text style={styles.price}>Create your Appointment</Text>
    </View>
      </View>
  )
}

const styles = StyleSheet.create({
    cart:{
        marginTop: "auto",
        backgroundColor: "#5085E1",
        padding: 20,
        width:"80%",
        alignSelf: "center",
        justifyContent: "center",
        marginBottom: 10,
        borderRadius: 20,
    },
    container: {
        flex: 1,
        width: "100%",

    },
    wrapper:{
        padding: 10,
    },
    separator:{ 
        height: 1,
        backgroundColor: "lightgrey",
        marginVertical: 10,
    },
    image: {
        marginTop: 30,
        width: "100%",
        aspectRatio: 5 / 4,
    },

    title: {
        fontSize: 24,
        fontWeight: "700",
        marginTop: 10,

    },
    label: {
        fontSize: 20,
        color: "grey",
    },

    description: {
        fontSize: 16,
        fontWeight: "700",
        color: "blue",
        marginTop: 30,
    },

   
    price: {
        fontSize: 18,
        fontWeight: "bold",
        color: "white",
        textAlign: "center",

    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 50
    }
})

export default ServiceDetailScreen