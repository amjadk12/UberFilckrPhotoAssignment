import React, { Component } from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export class ImageElement extends Component {
  render() {
    return (
      <View>
          <Image source={this.props.imgsource} style={styles.image}></Image>
      </View>
    );
  }
}

export default ImageElement;
