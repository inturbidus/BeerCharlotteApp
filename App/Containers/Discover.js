import React, { Component } from 'react';
import { FlatList, Text, View } from 'react-native';
import { Card } from 'react-native-elements';
import styles from './Styles/mainStyles';

export default class Discovery extends Component {
  state = {
    data: [ {
      name: "Event 1",
      image: {
        url: "https://via.placeholder.com/340x160?text=Event 1"
      }
    },
    {
      name: "Event 2",
      image: {
        url: "https://via.placeholder.com/340x160?text=Event 2"
      }
    }]
  }

  componentWillMount() {
  }
  
  render () {
    return (
      <FlatList data={this.state.data}
        keyExtractor= {(x, i) => i.toString()}
        renderItem={({item}) => 
          <Card style={styles.sectionCard} image={{uri: item.image.url}}>
            <Text style={{fontWeight: "bold"}}>{item.name}</Text>
          </Card>
        }
      />
    );
  }
}

      