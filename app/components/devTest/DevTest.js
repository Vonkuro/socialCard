import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import SocialCard from '../socialCard/SocialCard';

export default function DevTest() {
    return (
    <View style={styles.container}>
        
        <SocialCard/>

    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        maxWidth: 800,
        minWidth: 300,

    }
})