import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image, TouchableWithoutFeedback, Dimensions, Modal } from "react-native";
import { ImageElements } from "./Component/ImageElements";
import { Header } from "./Component/Header";
export default class App extends React.Component {
  state = {
    imageelements: [
      {
        source: require("./assets/img/img1.jpg"),
      },
      {
        source: require("./assets/img/img2.jpg"),
      },
      {
        source: require("./assets/img/img3.jpg"),
      },
      {
        source: require("./assets/img/img4.jpg"),
      },
      {
        source: require("./assets/img/img5.jpg"),
      },
      {
        source: require("./assets/img/img6.jpg"),
      },
      {
        source: require("./assets/img/img7.jpg"),
      },
      {
        source: require("./assets/img/img8.jpg"),
      },
      {
        source: require("./assets/img/img9.jpg"),
      }
    ]
  };

  handleNewImageElement = () => {
    const imageelement = {
      source: require("./assets/img/img10.jpg")
    };
    let imageelements = this.state.imageelements.concat(imageelement);
    this.setState({ imageelements });
  };
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <View style={styles.bottom}>
        <ImageElements imageelements={this.state.imageelements} onNewImageElement={this.handleNewImageElement} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 2
  },
  bottom:{
    height:'80%',
    width: '100%',
    backgroundColor:"red",
    padding:5
  }
});