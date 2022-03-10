// app/components/App.js
// Alias pour Editor
import React, { Component } from 'react';
import { View, StyleSheet, Text, Alert } from 'react-native';
import { Fragment, useState } from 'react/cjs/react.production.min';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as ImagePicker from 'expo-image-picker';
import Menu from '../menu/Menu';
import SocialCard from '../socialCard/SocialCard';

export default class Editor extends Component {
    constructor(props){
      super(props);

      this.state = {
        name: 'Nom de la Carte',
        title: 'Le titre de la carte',
        text: 'Le sous-titre de la carte',
        // Temporairement desactivé
        logoUri: require("../socialCard/Card_test/logoJS.png"),
        coverUri: require('../socialCard/Card_test/landscape.jpg'),
      };

      this.handles = {
        name_handler : this.name_handler.bind(this),
        title_handler : this.title_handler.bind(this),
        text_handler : this.text_handler.bind(this),
        logo_handler : this.logo_handler.bind(this),
        cover_handler : this.cover_handler.bind(this),
        saveState_handler : this.saveState_handler.bind(this),
        restoreState_handler : this.restoreState_handler.bind(this),
      };
    }

    // Handlers
    name_handler(value) {
      this.setState({ name : value })
    }

    title_handler(value) {
      this.setState({ title: value });
    }

    text_handler(value) {
      this.setState({ text: value });
    }

    logo_handler()
    {
      // L'erreur vient de { uri: newLogo.uri } qui ne peut pas être JSON.stringify en l'état
      this.uploadLogo().then( newLogo =>{this.setState({ logoUri: { uri: newLogo.uri } })});
    }
    async uploadLogo()
    {
      let result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      });
      return result;
    }

    cover_handler()
    {
      // L'erreur vient de { uri: newCover.uri } qui ne peut pas être JSON.stringify en l'état
      this.uploadCover().then( newCover =>{this.setState({ coverUri: { uri: newCover.uri } })});
    }
    async uploadCover()
    {
      let result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        //aspect: [1, 1],
        quality: 1,
      });
      return result;
    }

    // Handler qui s'occupe de la sauvegarde
    saveState_handler()
    {
      // bug ici car les uri des images personnalisé ne peuvent pas être transformée en string par JSON.stringify
      //
      var config;
      if (isNaN(this.state.coverUri) ) {
        if (isNaN(this.state.logoUri) ) {
          config = { name: this.state.name,
                    title: this.state.title,
                    text: this.state.text,
                    logoUri: this.state.logoUri.uri,
                    coverUri: this.state.coverUri.uri,
                  };
        } else{
          config = { name: this.state.name,
            title: this.state.title,
            text: this.state.text,
            logoUri: this.state.logoUri,
            coverUri: this.state.coverUri.uri,
          };
        }
      } else {
        if (isNaN(this.state.logoUri) ) {
          config = { name: this.state.name,
            title: this.state.title,
            text: this.state.text,
            logoUri: this.state.logoUri.uri,
            coverUri: this.state.coverUri,
          };
        } else {
          config = { name: this.state.name,
            title: this.state.title,
            text: this.state.text,
            logoUri: this.state.logoUri,
            coverUri: this.state.coverUri,
          };
        }
      }


      const configJson = JSON.stringify(config);
      this.saveState(configJson);
    }
    async saveState(configJson)
    {
      await AsyncStorage.setItem( String(this.state.name) , configJson);
    } 

    // Handler que j'ai créé afin d'afficher le string stocké dans le text Title (afin de vérifier)
    restoreState_handler()
    {
      this.restoreState()
        .catch(() => {
          this.showAlert();

          return;
        })
        .then( oldStateJson => {
          if (oldStateJson == undefined || oldStateJson == null) {
            this.showAlert();

            return;
          }
          const data = JSON.parse(oldStateJson);


          if (isNaN( data.coverUri )) {
            if (isNaN( data.logoUri ) ) {
              data.coverUri = {uri : data.coverUri};
              data.logoUri = {uri : data.logoUri};
            } else{
              data.coverUri = {uri : data.coverUri};
            }
          } else {
            if (isNaN( data.logoUri )) {
              data.logoUri = {uri : data.logoUri};
            }
          }

          this.setState({ name: data.name });
          this.setState({ title: data.title });
          this.setState({ text: data.text });
          this.setState({ logoUri: data.logoUri });
          this.setState({ coverUri: data.coverUri });
        });
    }
    async restoreState()
    {
      return await AsyncStorage.getItem( String(this.state.name) )
    } 

    //Alert
    showAlert = () => {
      Alert.alert(
        "Chargement impossible",
        "Aucune carte n'est enregistrée sous se nom",
        [{
          text: "OK",
        }],
        {
          cancelable: true,
        }
      )
    }

    /**
     * Render function 
     */
    render () {
    return (
    <View style={styles.container}>
      <View style={styles.topBackground}>
        <Text style={styles.AppTitle} >Application Creation de cartes sociales</Text>
      </View>

      <View style={styles.midBackground}>
        <SocialCard config={this.state} />
      </View>

      <View style={styles.bottomBackground}>
        <Menu handles={this.handles} values={this.state}/>
        </View>
    </View>
    )}
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    justifyContent: 'center',
    maxWidth: 800,
    minWidth: 300,
    //font: "14px -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
  },

  topBackground:{
    backgroundColor: '#0078d4',
    flex:3
  },
  midBackground:{
    flex:10
  },
  bottomBackground:{
    flex:15
  },

  AppTitle: {
      color: "white",
      backgroundColor: "rgb(33, 150, 243)",
      borderRadius: 5,
      padding: 5,
      textAlign: "center",
      fontSize:20,
      marginTop: 25
  },

  socialCardConatiner: {
    minWidth: 500,
    minWidth: 750,
    borderColor: "rgb(33, 150, 243)",
    borderWidth: 3,
    backgroundColor: "rgb(33, 150, 243)",
  }
});