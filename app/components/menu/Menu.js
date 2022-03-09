// app/components/Editor.js
import React, { Component } from 'react'
import { View, Text, StyleSheet, Button, TextInput } from 'react-native'


export default class Menu extends Component {
  render() {

    return (
      <View>
        <Text>Nom :</Text>
        <TextInput style={styles.input} placeholder={this.props.name}/>
      <Text>Titre :</Text>
      <TextInput style={styles.input} onChangeText={(text) => {
        this.props.handles.title_handler(text)
        }
      }/>

      <Text>Text :</Text>
      <TextInput style={styles.input} onChangeText={(text) => {
        this.props.handles.text_handler(text)
        }
      }/>

      <Button title='Choisir un nouveau logo' onPress={this.props.handles.logo_handler}></Button>
      <Button title='Choisir un nouveau fond' onPress={this.props.handles.cover_handler}></Button>

      <Button title='Enregistrer la carte' onPress={this.props.handles.saveState_handler}></Button>
    </View>
    )

  }
}
//<TextInput type="text" style={styles.input} onChange={e => this.props.handler(e.target.value)} value={props.prop}/>
/*
<View style={styles.editor}>
        <Text>Gestion des boutons a afficher</Text>
      
        <Fragment>
          <Text style={styles.lbl}>Titre</Text>
          <Button title='button change' onClick={this.props.handler}/>
          
          <TextInput value={this.props.prop} onChangeText={() => this.props.handler()}/>
        </Fragment>
      </View>
*/
const styles = StyleSheet.create({
  editor: {
    flex: 1,
    textAlign: 'center',
    marginTop: 10,
    borderTopWidth: 2,
    borderColor: "rgb(33, 150, 243)",
  },

  lbl: {
  },

  input: {
    borderWidth: 1,
    borderColor: "rgb(100, 100, 100)"
  },
});