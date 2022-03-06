import React, { Component } from 'react';
import { StyleSheet, ImageBackground, Image, View, Dimensions, Text, Button } from 'react-native';

export default class SocialCard extends Component {
    constructor()
    {
        super();
        this.state = {
            backgroundUri: require('./Card_test/landscape.jpg'),
            logoUri: require("./Card_test/logoJS.png"),
            titleText: "Le titre de la carte",
            subtitleText: "Le sous-titre de la carte"
        };
    }


    render()
    {
        return (
            <View style={styles.card}>
                <ImageBackground source={ this.state.backgroundUri } style={styles.background} resizeMode="center">
                <View style={styles.contentRow}>
                    <Image style={styles.logo} source={ this.state.logoUri }></Image>
                    <View style={styles.textColum}>
                        <Text style={styles.title}> { this.state.titleText } </Text>
                        <Text style={styles.subtitle}> { this.state.subtitleText } </Text>
                    </View>
                </View> 
            </ImageBackground>
            </View>
        );
    };
  
}

const styles = StyleSheet.create({
    
    card: {
        maxHeight: 250,
        justifyContent: "center",
        flexDirection: "row",
        flexWrap: "wrap",
    },
    background: {
        justifyContent: "center",
        width: Dimensions.get('window').width,
        flexWrap: "wrap",
        
    },
    contentRow:{
        flexDirection: "row",
        flexWrap: "wrap",
    },
    logo:{
        flex: 1,
    },
    textColum:{
        flex: 1,
        flexDirection: "column",
        flexWrap: "wrap",
    },
    title:{
        fontSize:20,
        color: '#FFFFFF'
    },
    subtitle:{
        fontSize:20,
        color: '#FFFFFF'
    }
});

//export{SocialCard} ;