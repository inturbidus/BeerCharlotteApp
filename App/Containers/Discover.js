import React, { Component } from 'react';
import { Image, Text, View } from 'react-native';
import styles from './Styles/mainStyles';

export default class Discovery extends Component {
  render () {
    return (
      
      <View style={styles.container}>
        <View>
          <Image 
            source={require('../Images/bm_image.jpg')} 
            style={styles.sectionImage} 
          />
        </View>
          <View style={styles.sectionMain}>
            <View style={styles.sectionItemLeft}>
              <Text style={styles.sectionHeader}>Test</Text>
              <Text style={styles.sectionDate}>Test Test Test Test</Text>
              <Text style={styles.sectionLoc}>Charlotte, NC</Text>
            </View>
            <View style={styles.sectionItemRight}>
              <Image 
              source={require('../Images/BMMap.png')} 
              style={styles.sectionImageMap} 
              />
            </View>
          </View>
      </View>
    )
  }
}
