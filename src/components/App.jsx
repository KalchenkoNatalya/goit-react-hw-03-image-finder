import { Searchbar } from './Searchbar/Searchbar';
import { Component } from 'react';
import { fetchImage } from '../services/Api';
import { ImageGallery } from './ImageGallery/ImageGallery';
import styles from './App.module.css';
import { Button } from './Button/Button';

import { Loader } from './Loader/Loader';

export class App extends Component {
  state = {
    images: [],
    isLoading: false,
    error: null,
    query: '',
    page: 1,
    totalHits: '',
  };

  handleFormSubmit = searchQuery => {
    console.log(searchQuery);
    this.setState({ query: searchQuery });
  };
  handleLoadMore = e => {
    e.preventDefault();
    console.log('loading more');
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  // async componentDidMount() {
  //   this.setState({ isLoading: true });
  //   try {
  //     if (this.state.query.trim() === '') {
  //       return;
  //     }
  //     const images = await fetchImage(this.state.query, this.state.page);
  //     console.log(images);
  //     this.setState({ images: images.hits, totalHits: images.totalHits });
  //   } catch (error) {
  //     this.setState({ error });
  //     alert('error: ' + this.state.error);
  //   } finally {
  //     this.setState({ isLoading: false });
  //   }
  // }

  async componentDidUpdate(prevProps, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      this.setState({ isLoading: true });
      try {
        const images = await fetchImage(this.state.query, this.state.page);
        if (images.hits.length === 0) {
          alert('Nothing was found for your image request');
        }

        // console.log(images);
        if (prevState.query === this.state.query) {
          this.setState({
            images: [...prevState.images, ...images.hits],
            totalHits: images.totalHits,
          });
        } else
          this.setState({ images: images.hits, totalHits: images.totalHits });
      } catch (error) {
        this.setState({ error });
        alert('error: ' + this.state.error);
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  render() {
    return (
      <div className={styles.app}>
        <Searchbar onSubmit={this.handleFormSubmit} />

        {this.state.isLoading && <Loader />}

        <ImageGallery images={this.state.images} />

        {this.state.page < Math.ceil(this.state.totalHits / 12) ? (
          <Button onClick={this.handleLoadMore} />
        ) : null}
      </div>
    );
  }
}
