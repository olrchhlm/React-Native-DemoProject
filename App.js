import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";

//import { Text } from "react-native";
import HomeScreen from "./Modules/HomeScreen";
import ProfileScreen from "./Modules/ProfileScreen";
import IntervalScreen from "./Modules/IntervalScreen";

const MainNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
  Profile: { screen: ProfileScreen },
  Interval: { screen: IntervalScreen }
});

const App = createAppContainer(MainNavigator);

export default App;

// export default class App extends React.Component {
//   render() {
//     return (
//       <React.Fragment>
//         <Home />
//         {/* <Text>test</Text> */}
//       </React.Fragment>
//     );
//   }
// }
