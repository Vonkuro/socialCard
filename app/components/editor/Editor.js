// app/components/App.js
// Alias pour Editor
import React, { Component } from 'react';
import { View, StyleSheet, Text, TextInput  } from 'react-native';
import { Fragment, useState } from 'react/cjs/react.production.min';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as ImagePicker from 'expo-image-picker';
import Menu from '../menu/Menu';
import SocialCard from '../socialCard/SocialCard';

export default class Editor extends Component {
    constructor(props){
      super(props);

      this.state = {
        nameText: 'Nom de la Carte',
        title: 'Le titre de la carte',
        text: 'Le sous-titre de la carte',
        logoUri: require("../socialCard/Card_test/logoJS.png"),
        coverUri: require('../socialCard/Card_test/landscape.jpg'),
      };

      this.handles = {
        title_handler : this.title_handler.bind(this),
        text_handler : this.text_handler.bind(this),
        logo_handler : this.logo_handler.bind(this),
        cover_handler : this.cover_handler.bind(this),
        saveState_handler : this.saveState_handler.bind(this),
        restoreState_handler : this.restoreState_handler.bind(this),
      };
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
        mediaTypes: ImagePicker.MediaTypeOptions.All,
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
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        //aspect: [1, 1],
        quality: 1,
      });
      return result;
    }

    // Handler qui s'occupe de la sauvegarde
    saveState_handler(value)
    {
      this.setState({nameText: value});
      // bug ici car les uri des images personnalisé ne peuvent pas être transformée en string par JSON.stringify
      const configJson = JSON.stringify(this.state);
      this.saveState(configJson);
    }
    async saveState(configJson)
    {
      await AsyncStorage.setItem( String(this.state.name) , configJson);
    } 

    // Handler que j'ai créé afin d'afficher le string stocké dans le text Title (afin de vérifier)
    restoreState_handler()
    {
      this.restoreState().then( oldStateJson => {
        this.setState({title : oldStateJson})
      });
    }
    async restoreState()
    {
      const result = await AsyncStorage.getItem( String(this.state.name));
      return result;
    } 

    render () {
    return (
    <View style={styles.container}>
        <Text style={styles.AppTitle} >Application Creation de cartes sociales</Text>
  
        <SocialCard config={this.state}/>

        <Menu handles={this.handles} name={this.state.name}/>
    </View>
    )}
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex:1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: 800,
    minWidth: 300,
    //font: "14px -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
  },

  AppTitle: {
      color: "white",
      backgroundColor: "rgb(33, 150, 243)",
      borderRadius: 5,
      padding: 5,
      textAlign: "center",
  },

  socialCardConatiner: {
    minWidth: 500,
    minWidth: 750,
    borderColor: "rgb(33, 150, 243)",
    borderWidth: 3,
    backgroundColor: "rgb(33, 150, 243)",
  }
});