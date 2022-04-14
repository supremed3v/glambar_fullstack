import { View, TextInput, StyleSheet, Text } from "react-native";
import React from "react";
import { Controller } from "react-hook-form";

const CustomInput = ({
  control,
  placeholder,
  keyboardType,
  secureTextEntry,
  name,
  rules = {},
}) => {
  return (
    <Controller
      control={control}
      name={name}
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
            style={styles.input}
            secureTextEntry={secureTextEntry}
          />
          <View
            style={[
              styles.container,
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
    backgroundColor: "white",
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

export default CustomInput;
