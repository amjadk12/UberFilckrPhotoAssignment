import React, { Component } from "react";
import { View, Text } from "react-native";

export class ImageElement extends Component {
  render() {
    return (
      <View>
        <Text>
          {this.props.ImageElementId}.{this.props.ImageElementText}
        </Text>
        <Text>
          ---
          {this.props.ImageElementAuthor}
        </Text>
      </View>
    );
  }
}

export default ImageElement;
