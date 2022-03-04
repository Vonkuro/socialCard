import React from 'react';
import { StyleSheet, ImageBackground, View, Dimensions, Text } from 'react-native';

function SocialCard ()
{
    return(
        <View style= {styles.card} >
            <ImageBackground source={require('./paysage.png')} style= {styles.background}  resizeMode= "center">
            <Text style= {styles.title}> Hello to you i</Text>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "center",
        width: Dimensions.get('window').width,
        
    },
    card: {
        flex: 1,
        justifyContent: "center"
    },
    title:{
        fontSize:20,
        color: '#FFFFFF',
        fontFamily: 'Monteserrat'
    }
  });

export{SocialCard} ;