// app/components/App.js
// Alias pour Editor
import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Fragment } from 'react/cjs/react.production.min';
import Menu from '../menu/Menu';
import SocialCard from '../socialCard/SocialCard';

export default function Editor() {
    return (
    <View style={styles.container}>
        <Text style={styles.AppTitle} >Application Creation de cartes sociales</Text>

        <SocialCard/>

        <Menu/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: 800,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 10,
    //font: "14px -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
  },

  AppTitle: {
      color: "white",
      backgroundColor: "rgb(33, 150, 243)",
      borderRadius: 5,
      padding: 5,
      textAlign: "center",
      fontSize: 1,
  },

  socialCardConatiner: {
    minWidth: 500,
    minWidth: 750,
    borderColor: "rgb(33, 150, 243)",
    borderWidth: 3,
    backgroundColor: "rgb(33, 150, 243)",
  }
});