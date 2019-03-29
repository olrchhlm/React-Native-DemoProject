import React from "react";

import { StyleSheet, Text, View, Button, ScrollView } from "react-native";
import MyModule from "./MyModule";

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: "Welcome"
  };

  constructor(props) {
    super(props);
    this.state = { myModuleVisible: false };
  }

  makeMyModuleVisible = () => {
    this.setState(oldState => ({
      myModuleVisible: !oldState.myModuleVisible
    }));
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.headlineH1}>TEST-APP</Text>

          <View style={styles.buttonContainer}>
            <Button
              title={"Go to Profiles"}
              onPress={() => navigate("Profile")}
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button
              title={"Go to Interval"}
              onPress={() => navigate("Interval")}
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button
              title={"Mach das Modul sichtbar"}
              onPress={this.makeMyModuleVisible}
            />
            {this.state.myModuleVisible ? <MyModule /> : null}
          </View>
          <Text style={styles.headlineH2}>
            Hier kann noch mehr Content sein
          </Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "#e5e5e5",
    alignItems: "center",
    justifyContent: "center"
  },
  headlineH1: {
    fontSize: 50,
    color: "black",
    fontWeight: "bold"
  },
  headlineH2: {
    fontSize: 30,
    color: "black"
  },
  buttonContainer: {
    backgroundColor: "white",
    width: "90%",
    borderRadius: 5,
    marginTop: 5
  }
});
