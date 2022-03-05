// app/components/App.js
import React, { Component } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import Editor from './Editor'
import SocialCard from './socialCard/SocialCard'
import '../styles/App.css';

export default function App() {
    return (
    <View style={styles.container}>
        <h1 class='AppTitle'>Application Creation de cartes sociales</h1>

        <p>Import social card here</p>

        <Editor/>

        <div class='btnContainer'>
            <Button title='Load'/>
            <Button title='Save'/>
        </div>
        
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      maxWidth: 800,
      marginRight: 'auto',
      marginLeft: 'auto',
    },
});