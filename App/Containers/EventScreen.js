import React, { Component } from 'react';
import { ScrollView, Text, StyleSheet,Image, View } from 'react-native';



const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0)'
  },
  container: {
    paddingBottom: 10
  },
  section: {
    margin: 25,
    padding: 10
  },
  sectionText: {
    paddingVertical: 20,
    color: 'white',
    marginVertical: 5,
    textAlign: 'center'
  },
  logo: {
    resizeMode: 'contain'
  },
  centered: {
    alignItems: 'center'
  }
})

export default class EventScreen extends Component {
  render () {
    return (
      <View style={styles.mainContainer}>
        <ScrollView style={styles.container}>
        </ScrollView>
      </View>
    )
  }
}