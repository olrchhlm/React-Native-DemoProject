import React from "react";

import { View, Text, Image } from "react-native";

export default class App extends React.Component {
  render() {
    let pic = {
      uri:
        "https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg"
    };
    return (
      <View>
        <Text>Dies ist eine eigenständige Komponente</Text>
        <Image source={pic} style={{ width: 600, height: 400 }} />
      </View>
    );
  }
}
