import React, { Component } from 'react';
import { Flatlist, Text, View } from 'react-native';
import styles from './Styles/mainStyles';




export default class Discovery2 extends Component {

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
            <Flatlist data={this.state.data}
            keyExtractor= {(x, i) => i}
            renderItem={({item}) => 
            <Text>{`${item.name.first} ${item.name.last}`}</Text>
            
            }
           />
        </View>
    );
  }
}

      