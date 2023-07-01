import { Searchbar } from './Searchbar/Searchbar';
import { Component } from 'react';
import { fetchImage } from '../services/Api';
import { ImageGallery } from './ImageGallery/ImageGallery';


export class App extends Component {
  state = {
    images: [],
    isLoading: false,
    error: null,
  };

  async componentDidMount() {
    try {
      const images = await fetchImage();
      console.log(images);
      this.setState({ images});
    } catch (error) {
    } finally {
    }
  }
  componentDidUpdate = () => {};

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Searchbar />
        <ImageGallery images={this.state.images}/>
      </div>
    );
  }
}
