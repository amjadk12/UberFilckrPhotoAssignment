import React from "react";
import axios from "axios";
import { StyleSheet, Text, View, TouchableOpacity, Image, TouchableWithoutFeedback, Dimensions, Modal } from "react-native";
import { ImageElements } from "./Component/ImageElements";
import { Header } from "./Component/Header";
export default class App extends React.Component {
  state = {
    textSearch:'nyc',
  items: [
            {
            title: "Bright Like A Shadow. # 120",
            link: "https://www.flickr.com/photos/135519402@N07/45589352891/",
            media: {
            m: "https://farm2.staticflickr.com/1938/45589352891_ec71973133_m.jpg"
            }
            },
            {
            title: "Tangie and Little Lady Grey, Sisters on the dorrstep they were born under!",
            link: "https://www.flickr.com/photos/brit_robin/45589487931/",
            media: {
            m: "https://farm2.staticflickr.com/1925/45589487931_70f817c421_m.jpg"
            }
            }
          ]
    };
    componentDidMount(){
      const url=`https://api.flickr.com/services/feeds/photos_public.gne?tags=${this.state.textSearch}&format=json&nojsoncallback=true`;
      axios.get(url) 
      .then((response) => {
        const items= response.data.items;
        this.setState({ items:items });
      })
      .catch((err) => {
      console.log(err)
      })  
    }
    handleNewImageElement = (event) => {
      // const imageelement = {
      //   source: require("./assets/img/img10.jpg")
      // };
      // let imageelements = this.state.imageelements.concat(imageelement);
      // this.setState({ imageelements });
      alert(this.props.textSearch);
    let imageelements=this.state.imageelements;
    axios.get("https://api.flickr.com/services/feeds/photos_public.gne?tags=dogs&format=json&nojsoncallback=true") 
    .then((response) => {
      const items= response.data.items;
      this.setState({ items:items });
    })
    .catch((err) => {
    console.log(err)
    })
    };
  
  render() {
    return (
      <View style={styles.container}>
        <Header  onNewImageElement={this.handleNewImageElement} textSearch={this.props.textSearch} />
        <View style={styles.bottom}>
        <ImageElements imageelements={this.state.items} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 2
  },
  bottom:{
    height:'80%',
    width: '100%',
    backgroundColor: "#292929",
    padding:5
  }
});