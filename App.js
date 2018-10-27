import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image, TouchableWithoutFeedback, Dimensions, Modal } from "react-native";
import { ImageElements } from "./Component/ImageElements";
import { Header } from "./Component/Header";
export default class App extends React.Component {
  state = {
    imageelements: [
      {
        id: 1,
        value: "Always think BIG, as thoughts does not have any limits!",
        auth: "Amjad Khan"
      },
      { id: 2, value: "World is full of fun!", auth: "Charles S. P. Teresa" },
      { id: 3, value: "Test is life of Eater!", auth: "David Johnson" },
      {
        id: 4,
        value: "Expo is testing utility - Snack.expo.io",
        auth: "Expo Company"
      },
      {
        id: 5,
        value:
          "Empower every person and every organisation on this planet  to achieve more",
        auth: "Satya Nadella"
      }
    ]
  };

  handleNewImageElement = () => {
    const imageelement = {
      id: 6,
      value: "Humne tumko dekha.. aap ke mobile mein!",
      auth: "Faizaan Khan"
    };
    let imageelements = this.state.imageelements.concat(imageelement);
    this.setState({ imageelements });
  };
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <ImageElements imageelements={this.state.imageelements} onNewImageElement={this.handleNewImageElement} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
