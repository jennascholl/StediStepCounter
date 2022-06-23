import { useState } from "react";
import { SafeAreaView, StyleSheet, TextInput, TouchableOpacity, Image, Text, View } from "react-native";
import { Button } from "react-native-elements";

const SendText = async (phoneNumber) => {
  console.log(phoneNumber);
  const loginResponse = await fetch('https://dev.stedi.me/twofactorlogin/' + phoneNumber, {
    method: 'Post',
    headers: {
      'Content-Type': 'application/text'
    }
  })
  const loginResponseText = await loginResponse.text();
  console.log(loginResponseText);
};

const getToken = async ({ phoneNumber, otp }) => {
  const loginResponse = await fetch('https://dev.stedi.me/twofactorlogin', {
    method: 'Post',
    headers: {
      'content-type': 'application/json'
    },
    body: {
      phoneNumber,
      oneTimePassword: otp
    }
  });
  const token = await loginResponse.text();
  console.log(token)
  
};

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [oneTimePassword, setOneTimePassword] = useState(null);

  return (
    <SafeAreaView style={styles.margin}>
      <TextInput
        style={styles.input}
        onChangeText={setPhoneNumber}
        value={phoneNumber}
        placeholder="555-555-5555"
        placeholderTextColor='#D3D3D3'
      />
      <TextInput
        style={styles.input}
        onChangeText={setOneTimePassword}
        value={oneTimePassword}
        placeholder="1234"
        placeholderTextColor='#D3D3D3'
        keyboardType="numeric"
        secureTextEntry={true}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => SendText(phoneNumber)}>
        <Text style={styles.text}>Send Text</Text>
        
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  mainView: {
    marginTop: 100
  },
  button: {
    alignItems: "center",
    backgroundColor: "#009707",
    padding: 10,
    height: 40,
    alignSelf: "center"
  }
});

export default Login;