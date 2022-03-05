// app/components/App.js
// Alias pour Editor
import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Menu from './Menu';
import SocialCard from './socialCard/SocialCard';
import '../styles/App.css';

export default function App() {
    return (
    <View style={styles.container}>
        <h1 class='AppTitle'>Application Creation de cartes sociales</h1>

        <SocialCard/>

        <Menu/>
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