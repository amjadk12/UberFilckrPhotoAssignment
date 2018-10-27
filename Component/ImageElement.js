import React, { Component } from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export class ImageElement extends Component {
  render() {
    return (
       <View style={styles.containerImage}>
          <Image source={this.props.imgsource} style={styles.innerImage}></Image>
      </View>
    );
  }
}
const styles = StyleSheet.create({
   containerImage: {
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
    width:"100%"
  },
  innerImage: {
    backgroundColor: "gray",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    width:"60%"
  }
  });
export default ImageElement;
