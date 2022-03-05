// app/components/Editor.js
import React, { Component } from 'react'
import { View, Text, StyleSheet} from 'react-native'


export default function App() {
    return (
    <View style={styles.editor}>
      <div>Card menu</div>
    </View>
  );
}

const styles = StyleSheet.create({
    editor: {
      flex: 1,
    }
});