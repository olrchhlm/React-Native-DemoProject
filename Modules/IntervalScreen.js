import React from "react";

import { StyleSheet, Text, View, Button } from "react-native";

export default class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: "Intervall"
  };

  constructor(props) {
    super(props);
    this.state = { anotherNumber: 1, myModuleVisible: false };
  }
  startInterval = () => setInterval(() => this.updateNumber(), 1000);

  updateNumber = () => {
    console.log(this.state.anotherNumber);
    let newNumber = this.state.anotherNumber + 1;
    this.setState(() => ({
      anotherNumber: newNumber
    }));
  };

  makeMyModuleVisible = () => {
    this.setState(oldState => ({
      myModuleVisible: !oldState.myModuleVisible
    }));
  };

  render() {
    //const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.headline}>
          Hier kann eine Stoppuhr gestartet werden
        </Text>
        <View>
          <View>
            <Text>{this.state.anotherNumber}</Text>
            <Button
              title={"Starte den Intervall"}
              onPress={this.startInterval}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center"
  },
  headline: {
    fontSize: 20,
    color: "#6b6b6b"
  }
});
