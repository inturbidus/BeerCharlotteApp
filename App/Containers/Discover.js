import React, { Component } from 'react';
import { FlatList, Text, View } from 'react-native';
import { Card } from 'react-native-elements';
import styles from './Styles/mainStyles';

import { createStackNavigator, createAppContainer } from "react-navigation";

class Discovery extends Component {
  static navigationOptions = {
    title: 'Events',
    headerStyle: {
      backgroundColor: '#fff',
    },
    headerTintColor: '#000',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  state = {
    data: []
  }

  componentWillMount() {
      this.fetchData();
  }

  fetchData = async () => {
      const response = await fetch('https://app.ticketmaster.com/discovery/v2/events.json?apikey=b5wXI8BKA2qGkmodIwTYZIxPLAABcAJg');
      const json = await response.json();
      this.setState({data: json._embedded.events});
  }

  render () {
    return (
      <FlatList data={this.state.data}
        keyExtractor= {(x, i) => i.toString()}
        renderItem={({item}) => 
          <Card style={styles.sectionCard} image={item.images[0]}>
            <Text style={{fontFamily: "Avenir-Black"}}>{`${item.name}`}</Text>
            <Text style={{color: "#ccc"}}>{`${item.dates.start.localDate}`}</Text>
            <Text style={{color: "#333"}}>{`${item._embedded.venues[0].name}`}</Text>
            <Text style={{color: "#333"}}>{`${item._embedded.venues[0].city.name}`}</Text>{item._embedded.venues[0].state && <Text>{item._embedded.venues[0].state.stateCode}</Text>}
          </Card>
        }
      />
    );
  }
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: Discovery
  }
});

export default createAppContainer(AppNavigator);
