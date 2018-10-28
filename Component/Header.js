import React, { Component } from "react";
import { StyleSheet, Image, View, Text,TextInput,TouchableOpacity } from "react-native";

export class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
      textSearch:"kittens"
    }
  }

  update = (e) => {
    this.props.onUpdate(e);
    this.setState({textSearch: e});
  };

  
  render() {
    let { onNewImageElement, onUpdate } = this.props;
    return (
      <View style={styles.header}>
        <Image
          source={require("../assets/search.png")}
          style={styles.cart}
        />
      <TextInput
        style={styles.logo}
        onChangeText={this.update}
        value={this.state.textSearch}
      />
         <TouchableOpacity style={styles.button} onPress={onNewImageElement}>
          <Text>Search</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
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
  header: {
    height: "14%",
    marginTop: 20,
    backgroundColor: "#fff",
    flexDirection: "row",
    alighnItem: "center",
    justifyContent: "center",
    padding: 20,
    borderBottomWidth: 4,
    borderBottomColor: "#ccc"
  },
  cart: {
    width: 25,
    height: 25
  },
  logo: {
    fontStyle: "italic",
    height: 30,
    width: "50%", 
    borderColor: 'gray', 
    borderWidth: 1
  }
});
export default Header;
