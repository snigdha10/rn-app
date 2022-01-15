import React from 'react';
import { StyleSheet, View } from 'react-native';
import ToDo from "./src/pages/todo/ToDo";

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
