// app/components/App.js
import React, { Component } from 'react'
import { View, Text, StyleSheet} from 'react-native'

export default function App() {
    return (
    <View style={styles.container}>
      <p>Page d'acceuil de l'application</p>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      maxWidth: 800,
      marginRight: 'auto',
      marginLeft: 'auto',
    }
});