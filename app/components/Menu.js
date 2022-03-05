// app/components/Editor.js
import React, { Component } from 'react'
import { View, Text, StyleSheet, Button} from 'react-native'


export default function App() {
    return (
    <View style={styles.editor}>
      <div>
        <p>Gestion des boutons a afficher</p>
        <Button title='Option_1'/>
        <Button title='Option_2'/>
        <Button title='Option_3'/>
        <Button title='Option_4'/>
        <Button title='Option_5'/>
      </div>
    </View>
  );
}

const styles = StyleSheet.create({
    editor: {
      flex: 1,
      textAlign: 'center',
    }
});