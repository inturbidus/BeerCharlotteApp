import React, { Component } from 'react'
import { ScrollView, Text, Image, View } from 'react-native'

import { Images } from '../Themes'

// Styles
import styles from './Styles/LaunchScreenStyles'

export default class LaunchScreen extends Component {
  render () {
    return (
      <View style={styles.mainContainer}>
        <ScrollView style={styles.container}>
          <View style={styles.centered}>
            <Image source={Images.logo} style={styles.logo} />
          </View>
          <View style={styles.centered}>
            <Text style={styles.callout}>Putting Beer First in the QC</Text>
          </View>
          <View style={styles.ctaContainer}>
            <Text>Get Started</Text>
          </View>
        </ScrollView>
      </View>
    )
  }
}