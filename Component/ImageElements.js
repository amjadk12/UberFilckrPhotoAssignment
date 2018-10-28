import React, { Component } from "react";
import { ScrollView,View, Text, TouchableOpacity, StyleSheet,Dimensions } from "react-native";
import { ImageElement } from "./ImageElement";

export class ImageElements extends Component {
  render() {
    const { imageelements, onNewImageElement } = this.props;
    return (
      <ScrollView style={styles.bottomItems}>
        <View style={styles.listItems}>
        {
          imageelements.map(imageelement => (
          <ImageElement
            imgsource={imageelement.source}
            style={styles.bottomItem}
          />
        )
        )
        }
        </View>
         <TouchableOpacity style={styles.button} onPress={onNewImageElement}>
          <Text>Add New ImageElement</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}
const win = Dimensions.get('window');
const styles = StyleSheet.create({
  button: {
    backgroundColor: "#859a9b",
    borderRadius: 30,
    padding: 10,
    marginBottom: 10,
    shadowColor: "#303838",
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 20,
    shadowOpacity: 0.35,
    alignItems: "center",
    justifyContent: "center"
  },
  bottomItems:{
    padding:5,
    backgroundColor: "pink",
    alignItems: "center"
   },
  listItems:{
    flex: 1,
    flexDirection: "row",
    flexWrap:'wrap'
  }
});
export default ImageElements;