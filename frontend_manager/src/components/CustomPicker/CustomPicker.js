import { View, TextInput, StyleSheet, Text } from "react-native";
import React from "react";
import { Controller } from "react-hook-form";

const CustomerPicker = ({
  control,
  placeholder,
  name,
  Picker,
  onValueChange,
  rules = {},
}) => {
  return (
    <Controller
      control={control}
      selectedValue={selectedValue}
      rules={rules}
      render={({
        field: { value, onChange, onBlur },
        fieldState: { error },
      }) => (
        <>
          <TextInput
            placeholder={placeholder}
            onChangeText={onChange}
            value={value}
            onBlur={onBlur}
            style={styles.Picker}
            secureTextEntry={secureTextEntry}
          />
          <View
            style={[
              styles.pickerContainer,
              { borderColor: error ? "red" : "#e8e8e8" },
            ]}
          >
            {error && (
              <Text style={{ color: "red", alignContent: "center" }}>
                {error.message || "Error"}
              </Text>
            )}
          </View>
        </>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 2,
    color: "gray",
    height: 55,
  },
  Picker: {
    width: 200,
    height: 40,
    borderColor: "blue",
    borderWidth: 1,
    color: "#827676",
    fontWeight: "bold",
    backgroundColor: "#dee1e3",
  },
});

export default CustomerPicker;
