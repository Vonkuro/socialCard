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
            subtitleText: "Le sous-titre de la carte",

            styles: StyleSheet.create
            (
                {
                card: {
                    /*
                    borderColor: "red",
                    borderWidth: 2,
                    */
                    justifyContent: "center",
                    flexWrap: "wrap",
                    flex:1 ,
                    alignSelf: 'stretch',
                },
            
                background: {
                    flex:1,
                },
            
                contentRow:{
                    /*
                    borderColor: "blue",
                    borderWidth: 2,
                    */
                    width: "100%",
                    flexDirection: "row",
                    flex: 1,
                },
            
                logoHeight:{
                    /*
                    borderColor: "grey",
                    borderWidth: 2,
                    */
                    flex: 1,
                    flexDirection: "column",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    height:"100%",
                },
                logoWidth: {
                    /*
                    borderColor: "green",
                    borderWidth: 2,
                    */
                    flexDirection: "row",
                    flexWrap: "wrap",
                    justifyContent: "center",
                },
            
                logo:{
                    width: 130,
                    height: 130,
                    alignSelf: "center",
                    
                },
            
                textColum:{
                    flex: 1,
                    flexDirection: "column",
                    flexWrap: "wrap",
                    alignItems: "center",
                    justifyContent: 'center',
                    height:"100%",
                },
            
                title:{
                    fontSize: 20,
                    color: '#FFFFFF',
                },
            
                subtitle:{
                    fontSize: 10,
                    color: '#FFFFFF',
                }
                }
            ),
        };
    }

    render()
    {
        return (
            <View style={this.state.styles.card}>
            <ImageBackground source={ this.state.backgroundUri } style={this.state.styles.background}>
                <View style={this.state.styles.contentRow}>
                    <View style={ this.state.styles.logoHeight} >
                        <View style={ this.state.styles.logoWidth} >
                            <Image style={this.state.styles.logo} source={ this.state.logoUri }></Image>
                        </View>
                        
                    </View>
                    <View style={this.state.styles.textColum}>
                        <Text className="Titre" style={this.state.styles.title }> { this.props.config["title"] } </Text>
                        <Text style={this.state.styles.subtitle}> { this.props.config["text"] } </Text>
                    </View>
                </View>
            </ImageBackground>
            </View>
        );
    };


  
}
