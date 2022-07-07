import React from "react";
import { StyleSheet, Text, View, Image } from 'react-native';
import Login from "./Login.js";

function Token(props) {
    return (
      <View style={styles.token}>
        <Text style={styles.text}>{props.userName}</Text>
      </View>
    );
  }

export default Token

const styles = StyleSheet.create({
  token: {
    paddingLeft:20,
  },
  text: {
    color: 'white',
    fontWeight: '300',
    fontSize: 15
  }
})