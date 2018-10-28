import React, { Component } from "react";
import { TextInput,Text } from 'react-native';
import ShallowRenderer from 'react-test-renderer/shallow';
import Header from "../Component/Header";

test('First test',()=>{

});

this.state = {
    textSearch:'kitten',
    items: [
        {
            title: "Katze / Le beau chiot / Gattino / Poesje / Katt",
            link: "https://www.flickr.com/photos/leonisha/45596487861/",
            media: {
            m: "https://farm2.staticflickr.com/1938/45596487861_31a1aa3e73_m.jpg"
            }
        },
        {
            title: "Look Into My Eyes",
            link: "https://www.flickr.com/photos/simonmgc/30652009297/",
            media: {
            m: "https://farm2.staticflickr.com/1928/30652009297_15c6ba9b2a_m.jpg"
            }
        },
            {
            title: "Feather",
            link: "https://www.flickr.com/photos/simonmgc/30652012367/",
            media: {
            m: "https://farm2.staticflickr.com/1926/30652012367_27acacaf90_m.jpg"
        },
        }
    ]
    };

handleNewImageElement = (event) => {
    let imageelements=this.state.imageelements;
    const url=`https://api.flickr.com/services/feeds/photos_public.gne?tags=${this.state.textSearch}&format=json&nojsoncallback=true`;
    axios.get(url) 
    .then((response) => {
      const items= response.data.items;
      this.setState({ items:items });
    })
    .catch((err) => {
    console.log(err)
    })
    };

    onUpdate = (val) => {
    this.setState({
      textSearch: val
    })
    };

describe('ConsultInputSearch', () => {
    let props;
    let renderer;
    const render = () => {
        if (! renderer) {
            renderer = new ShallowRenderer();
            renderer.render(<Header  onNewImageElement={this.handleNewImageElement} onUpdate={this.onUpdate} />);
        }
        return renderer;
    };
    it('renders without crashing', () => {
        const rendered = render().getRenderOutput();
        expect(rendered).toBeTruthy();
    });

    it('render correctly text component', () => {  
        const rendered = render().create(<TextInput />).toJSON();
        expect(rendered).toMatchSnapshot();
    });
});