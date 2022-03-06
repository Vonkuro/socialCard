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
            <ImageBackground source={ this.state.backgroundUri } style={styles.background}>
                <View style={styles.contentRow}>
                    <View style={[styles.textColum, styles.logoPosition]} >
                        <Image style={styles.logo} source={ this.state.logoUri }></Image>
                    </View>
                    <View style={styles.textColum}>
                        <Text className="Titre" style={styles.title}> { this.state.titleText } </Text>
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
        justifyContent: "center",
        flexDirection: "row",
        flexWrap: "wrap",
        width: "100%",
        marginTop: "10px",
    },

    background: {
        justifyContent: "center",
        maxWidth: "100%",
        height: "auto",
    },

    contentRow:{
        width: "100%",
        flexDirection: "row",
    },

    logoPosition:{
        position: "relative",
        marginTop: "15px",
        marginLeft: "15px",
        zIndex: 1,
        maxWidth: "25%"
    },

    logo:{
        width: "30px",
        height: "30px",
    },

    textColum:{
        flex: 1,
        flexDirection: "column",
        flexWrap: "wrap",
    },

    title:{
        fontSize: "20px",
        color: '#FFFFFF'
    },

    subtitle:{
        fontSize: "10px",
        color: '#FFFFFF'
    }
});
/*
card-default {
    display: grid;

    grid-template-columns: 1fr 3fr;
    grid-template-rows: 1fr 1fr 2fr;

    grid-template-areas: 
        "img title"
        "img url"
        "img text";
}
*/

//export{SocialCard} ;