// app/components/App.js
// Alias pour Editor
import React, { Component } from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';
import { Fragment, useState } from 'react/cjs/react.production.min';
import * as ImagePicker from 'expo-image-picker';
import Menu from '../menu/Menu';
import SocialCard from '../socialCard/SocialCard';

export default class Editor extends Component {
    constructor(props){
      super(props);

      this.state = {
        title: 'Mon titre',
        text: 'Texte de la carte',
      };

      this.handles = {
        title_handler : this.title_handler.bind(this),
        text_handler : this.text_handler.bind(this),
        logo_handler : this.logo_handler.bind(this),
        cover_handler : this.cover_handler.bind(this),
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
      this.uploadLogo();
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
      this.uploadCover();
    }
    async uploadCover()
    {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      });
      return result;
    }

    
    render () {
    return (
    <View style={styles.container}>
        <Text style={styles.AppTitle} >Application Creation de cartes sociales</Text>
  
        <SocialCard config={this.state}/>

        <Menu handles={this.handles} />
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