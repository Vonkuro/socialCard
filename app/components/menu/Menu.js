// app/components/Editor.js
import React, { Component } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'


export default function Menu() {
  function changeText(propName, value) {
    console.log(`Passage de la prop ${propName} à ${value}.`)
  }

  return (
    <View style={styles.editor}>

      <Text>Gestion des boutons a afficher</Text>
      {/*
      <label style={{marginBottom: "5px", textAlign: 'left'}}>
        <Text style={styles.lbl}>Titre</Text>
        <input type="text" onChange={e => changeText("Titre", e.target.value)}/>
      </label>

      <label style={{marginBottom: "5px", textAlign: 'left'}}>
        <Text style={styles.lbl}>Texte</Text>
        <input type="text" onChange={e => changeText("Text", e.target.value)}/>
      </label>

      <label style={{marginBottom: "5px", textAlign: 'left'}}>
        <Text style={styles.lbl}>Image</Text>
        <Button title='Charger'/>
      </label>

      <label style={{marginBottom: "5px", textAlign: 'left'}}>
        <Text style={styles.lbl}>Logo</Text>
        <Button title='Charger'/>
      </label>

      <label style={{marginBottom: "5px", textAlign: 'left'}}>
      <Text style={styles.lbl}>Selection du preset</Text>
        
        <select style={{marginBottom: "5px", textAlign: 'left'}}>
          <option value="1">Preset 1</option>
          <option value="2">Preset 2</option>
          <option value="3">Preset 3</option>
          <option value="4">Preset 4</option>
        </select>
      </label>
  */}
    </View>
  );
}

const styles = StyleSheet.create({
  editor: {
    flex: 1,
    textAlign: 'center',
    marginTop: 10,
    borderTopWidth: 2,
    borderColor: "rgb(33, 150, 243)",
  },

  lbl: {
    //display: "block",
  }
});