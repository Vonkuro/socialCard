// app/components/Editor.js
import React, { Component } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'


export default function Menu() {
  return (
    <View style={styles.editor}>

      <Text>Gestion des boutons a afficher</Text>

      <Button title='Option_1' />
      <Button title='Option_2' />
      <Button title='Option_3' />
      <Button title='Option_4' />
      <Button title='Option_5' />

    </View>
  );
}

const styles = StyleSheet.create({
  editor: {
    flex: 1,
    textAlign: 'center',
  }
});