import React from 'react';
import { StyleSheet, ImageBackground, View, Dimensions, Text, Button } from 'react-native';

export default function SocialCard() {
    function Upload() {
        console.log("Call to Upload function");
        return;
    }

    function Display() {
        console.log("Call to Display function");
        return;
    }

    return (
        <View style={styles.card}>
            <ImageBackground source={require('./Card_test/paysage.png')} style={styles.background} resizeMode="center">
            </ImageBackground>
            <Text style={styles.title}> Hello to you i</Text>
            <Text style={styles.title}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vehicula arcu sed velit aliquet elementum. Suspendisse commodo quis lectus vitae egestas. In vestibulum interdum libero id egestas.</Text>
            <Text style={styles.title}> http://link/to/site.com</Text>


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
        color: '#FFFFFF',
    }
});

//export{SocialCard} ;