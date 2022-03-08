import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { clickProps } from 'react-native-web/dist/cjs/modules/forwardedProps';
import SocialCard from '../socialCard/SocialCard';

export default function DevTest() {
    return (
    <View style={styles.container}>
        <Text >hello</Text>
        <SocialCard/>
        <Text style={styles.container_2}>hello</Text>
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
    },
    container_2: {
        flex: 1,
    }
})