import { View, Text, TextInput, StyleSheet } from 'react-native'
import React, {useState} from 'react'

const CustomInput = ({value, setValue, placeholder, keyboardType, secureTextEntry}) => {

  return (
    <View style={styles.container}>
      <TextInput
            value={value}
            onChangeText={setValue}
            placeholder={placeholder}
            style={styles.input}
            autoCapitalize="none"
            secureTextEntry={secureTextEntry}
            keyboardType={keyboardType}
            
          />
        
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: "80%",

    borderColor: "#e8e8e8",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,

    marginVertical: 5,
  },
  input: {
    paddingTop: 10,
    backgroundColor: "white",
    padding: 5,
    borderRadius: 5,
    
  },
});

export default CustomInput