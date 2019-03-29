import React from "react";

import { StyleSheet, Text, View, Button } from "react-native";
import MyModule from "./Modules/MyModule";

export default class App extends React.Component {
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
    return (
      <View>
        <Text style={styles.headline}>TEST-APP</Text>

        <View style={styles.container}>
          <View>
            <Text>{this.state.anotherNumber}</Text>
            <Button
              title={"Starte den Intervall"}
              onPress={this.startInterval}
            />
          </View>
          <View>
            <Button
              title={"Mach das Modul sichtbar"}
              onPress={this.makeMyModuleVisible}
            />
            {this.state.myModuleVisible ? <MyModule /> : null}
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center"
  },
  headline: {
    fontSize: 50,
    color: "black",
    fontWeight: "bold"
  }
});
