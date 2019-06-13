import React, { Component } from 'react';
import { FlatList, Text, View } from 'react-native';
import { Card } from 'react-native-elements';
import styles from './Styles/mainStyles';

const events = [
  {
    id: 1,
     title: 'Beer Pairing'
  },

  {
    id: 2,
     title: 'Pairing for Beer'
  },

 ]



export default class Discovery extends Component {
  state = {
    data: []
}

componentWillMount() {
    this.fetchData();
}

fetchData = async () => {
    const response = await fetch('https://randomuser.me/api?results=10');
    const json = await response.json();
    this.setState({data: json.results});
}


      render () {
        return (
    
            <View style={styles.container}>
                <FlatList data={this.state.data}
                keyExtractor= {(x, i) => i.toString()}
                renderItem={({item}) => 
                <Card title={"Event"} style={styles.sectionCard} image={require('../Images/bm_image.jpg')}>
                  <Text>{`${item.name.first} ${item.name.last}`}</Text>
                  <Text>{`${item.name.first} ${item.name.last}`}</Text>
                  <Text>{`${item.name.first} ${item.name.last}`}</Text>
                </Card>
                }
               />
            </View>
    );
  }
}

      