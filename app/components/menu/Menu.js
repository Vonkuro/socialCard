// app/components/Editor.js
import React, { Component } from 'react'
import { View, Text, StyleSheet, Button, TextInput } from 'react-native'


export default class Menu extends Component {
  render() {

    return (
      <View style={styles.editor} >
        <View style={styles.ligne} >
          <Text style={styles.label}>Nom : </Text>
          <TextInput
            style={styles.input}
            value={this.props.values.name}
            onChangeText={(text) => {
              this.props.handles.name_handler(text)
            }}
          />
        </View>

      <View style={styles.ligne}>
        <Text style={styles.label}>Titre : </Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => {
            this.props.handles.title_handler(text)
            }}
          value={this.props.values.title}
        />
      </View>

      <View style={styles.ligne}>
        <Text style={styles.label}>Sous Titre : </Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => {
            this.props.handles.text_handler(text)
            }}
            value={this.props.values.text}
        />
      </View>

      <Button title='Choisir un nouveau logo' onPress={this.props.handles.logo_handler}></Button>
      <Button title='Choisir un nouveau fond' onPress={this.props.handles.cover_handler}></Button>

      <Button title='Enregistrer la carte' onPress={this.props.handles.saveState_handler}></Button>
      <Button title='Restaurer sauvegarde' onPress={this.props.handles.restoreState_handler}></Button>
    </View>
    )

  }
}

const styles = StyleSheet.create({
  editor: {
    flex: 1,
    textAlign: 'center',
    alignSelf: 'stretch',
    justifyContent: 'space-evenly',
    borderTopWidth: 2,
    borderColor: "rgb(33, 150, 243)",
    backgroundColor: '#0078d4',
  },

  ligne: {
    /*
    borderColor: "blue",
    borderWidth: 2,
    */
    width: "85%",
    flexDirection: "row",
    alignSelf: 'center',
  },

  input: {
    flex:5,
    borderWidth: 2,
    borderColor: "rgb(100, 100, 100)",
    backgroundColor: '#fff',
    textAlign: "center",
  },

  label:{
    flex:1,
    color: '#FFFFFF',
  }
});