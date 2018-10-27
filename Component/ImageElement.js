import React, { Component } from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";

export class ImageElement extends Component {
  render() {
    return (
       <View style={styles.containerImage}>
          <Image source={this.props.imgsource} style={styles.innerImage} resizeMode={'contain'} ></Image>
      </View>
    );
  }
}
const win = Dimensions.get('window');
const styles = StyleSheet.create({
   containerImage: {
    backgroundColor: "blue",
    width: win.width/3.4,
    height: win.height/7,
    padding:2,
    alignItems: "center",
    justifyContent: "center"
  },
  innerImage: {
    backgroundColor: "#fff",
    padding: 2,
    width: win.width/3.5,
    height: win.height/7.2,
    alignItems: "center",
    justifyContent: "center"
  }
  });
export default ImageElement;