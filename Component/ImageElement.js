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
const styles = StyleSheet.create({
    image:{
        flex:1,
        width:null,
        alignSelf:"stretch"
    }
  });
export default ImageElement;
