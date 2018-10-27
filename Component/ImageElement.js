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
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
    width:"100%"
  },
  innerImage: {
    backgroundColor: "gray",
    padding: 10,
    width: win.width/3,
    height: win.height/7,
  }
  });
export default ImageElement;
