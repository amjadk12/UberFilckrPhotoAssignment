import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image, TouchableWithoutFeedback, Dimensions, Modal } from "react-native";
import { ImageElements } from "./Component/ImageElements";
import { Header } from "./Component/Header";
import img from "./assets/img";
export default class App extends React.Component {
  state = {
    modalVisisble:false,
    modalImage: require('./assets/img'),
    imageelements: [
      {
        source: "./assets/img/img1.jpg",
      },
      {
        source: "./assets/img/img2.jpg",
      },
      {
        source: "./assets/img/img3.jpg",
      },
      {
        source: "./assets/img/img4.jpg",
      },
      {
        source: "./assets/img/img5.jpg",
      },
      {
        source: "./assets/img/img6.jpg",
      },
      {
        source: "./assets/img/img7.jpg",
      },
      {
        source: "./assets/img/img8.jpg",
      },
      {
        source: "./assets/img/img9.jpg",
      }
    ]
  };

  setModalVisible(visible, imagekey){
    this.setState({modalImage: this.state.images[imagekey]});
    this.setState({modalVisisble: visible})
    ;
  }

  handleNewImageElement = () => {
    const imageelement = {
      source: "./assets/img/img10.jpg"
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
