import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import ToDo from "./src/todo/ToDo";

export default function App() {

  return (
    <View style={styles.container}>
      <ToDo/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 30
  }
});
