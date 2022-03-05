import React from 'react';
import { StyleSheet, ImageBackground, View, Dimensions, Text, Button } from 'react-native';
import '../../styles/SocialCard.css';

export default function SocialCard ()
{
    function Upload() {
        console.log("Call to Upload function");
        return;
    }
    
    function Display() {
        console.log("Call to Display function");
        return;
    }

    return(
        <View>
            <div class='card-default'>
                <ImageBackground source={require('./Card_test/paysage.png')} style={styles.cardImg} resizeMode= "center">
                </ImageBackground>
                <Text style={styles.cardTitle}> Hello to you i</Text>
                <Text style={styles.cardText}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vehicula arcu sed velit aliquet elementum. Suspendisse commodo quis lectus vitae egestas. In vestibulum interdum libero id egestas.</Text>
                <Text style={styles.cardUrl}> http://link/to/site.com</Text>
            </div>

            <div class='btnContainer'>
                <Button title='Load' onPress={() => {Display()}}/>
                <Button title='Save' onPress={() => {Upload()}}/>
        </div>
        </View>
    );
}

const styles = StyleSheet.create({
    cardImg: {
        gridArea: "img",
    },

    cardTitle: {
        gridArea: "title",
    },

    cardText: {
        gridArea: "text",
    },

    cardUrl: {
        gridArea: "url",
    },
  });

//export{SocialCard} ;