// app/components/App.js
// Alias pour Editor
import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Menu from '../menu/Menu';
import SocialCard from '../socialCard/SocialCard';

export default function Editor() {
    return (
    <View style={styles.container}>
        {/*<Text >Application Creation de cartes sociales</Text>*/}

        <SocialCard/>

        {/*<Menu/>*/}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});