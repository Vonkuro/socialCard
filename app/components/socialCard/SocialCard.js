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
                    justifyContent: "center",
                    flexWrap: "wrap",
                    flex:1 ,
                    width: 380,
                    height: 200,
                    alignSelf: 'stretch',
                },
            
                background: {
                    height: 200,
                    flex:1,
                },
            
                contentRow:{
                    width: "100%",
                    flexDirection: "row",
                },
            
                logoPosition:{
                    marginTop: 50,
                    marginLeft: 15,
                    zIndex: 1,
                    maxWidth: "35%",
                    flex: 1,
                    flexDirection: "column",
                    flexWrap: "wrap",
                    alignItems: "center",
                    height:"100%",
                },
            
                logo:{
                    width: 100,
                    height: 100,
                    justifyContent: "center",
                    
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
                    <View style={ this.state.styles.logoPosition} >
                        <Image style={this.state.styles.logo} source={ this.state.logoUri }></Image>
                    </View>
                    <View style={this.state.styles.textColum}>
                        <Text className="Titre" style={this.state.styles.title }> { this.state.titleText } </Text>
                        <Text style={this.state.styles.subtitle}> { this.state.subtitleText } </Text>
                    </View>
                </View>
            </ImageBackground>
            </View>
        );
    };

    constructStyle()
    {
        this.setState
        (
            {
                styles: StyleSheet.create
                (
                    {
                        card: {
                            justifyContent: "center",
                            flexWrap: "wrap",
                            flex:1 ,
                            width: 380,
                            height: 200,
                            alignSelf: 'stretch',
                        },
                    
                        background: {
                            height: 200,
                            flex:1,
                        },
                    
                        contentRow:{
                            width: "100%",
                            flexDirection: "row",
                        },
                    
                        logoPosition:{
                            marginTop: 50,
                            marginLeft: 15,
                            zIndex: 1,
                            maxWidth: "35%",
                            flex: 1,
                            flexDirection: "column",
                            flexWrap: "wrap",
                            alignItems: "center",
                            height:"100%",
                        },
                    
                        logo:{
                            width: 100,
                            height: 100,
                            justifyContent: "center",
                            
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
            }
        )
    };
  
}
