import React, { Component } from "react";
import { StyleSheet, Image, View, Text,TextInput,TouchableOpacity } from "react-native";
import "./App.css";

 

export class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
      textSearch:"kitten"
    }
  }

  update = (e) => {
    this.props.onUpdate(e);
    this.setState({textSearch: e});
  };

  
  render() {
    let { onNewImageElement, onUpdate } = this.props;
    return (
      <View className=".header">
      <TextInput
        className=".searchInput"
        onChangeText={this.update}
        value={this.state.textSearch}
      />
         <TouchableOpacity  className=".button" onPress={onNewImageElement}>
           <Image
          source={require("../assets/search.png")}
          className=".searchControl"
        />
        </TouchableOpacity>
      </View>
    );
  }
}

export default Header;