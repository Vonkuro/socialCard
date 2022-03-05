import React from 'react';
import { StyleSheet, ImageBackground, Image, View, Dimensions, Text, Button } from 'react-native';
import * as config from "./socialCard.json";

export default function SocialCard() {
    function Upload() {
        console.log("Call to Upload function");
        return;
    }
    const {default: defaultLogo } = React.lazy(() => import(config.Card.default.logo));
    const defaultLogoUri = Image.resolveAssetSource(defaultLogo).uri;

    function Display() {
        console.log("Call to Display function");
        return;
    }
    console.log(config.Card.default.logo);
    return (
        <View style={styles.card}>
            <ImageBackground source={require('./Card_test/paysage.png')} style={styles.background} resizeMode="center">
            <Image source={require("./Card_test/logoJS.png")}></Image>
            <Text style={styles.title}> Hello to you !</Text>
            <Text style={styles.title}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vehicula arcu sed velit aliquet elementum. Suspendisse commodo quis lectus vitae egestas. In vestibulum interdum libero id egestas.</Text>
            </ImageBackground>
            

            <Button title='Load' onPress={() => { Display() }} />
            <Button title='Save' onPress={() => { Upload() }} />
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
        color: '#FFFFFF'
    }
});

//export{SocialCard} ;