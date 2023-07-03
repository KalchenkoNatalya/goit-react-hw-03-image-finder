import styles from './App.module.css';
import { Searchbar } from './Searchbar/Searchbar';
import { Component } from 'react';
import { fetchImage } from '../services/Api';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';
import PropTypes from 'prop-types';

export class App extends Component {
  state = {
    images: [],
    isLoading: false,
    error: null,
    query: '',
    page: 1,
    totalHits: 0,
    isModal: false,
    selectedImage: '',
  };

  handleFormSubmit = searchQuery => {
    // console.log(searchQuery);
    this.setState({ query: searchQuery, page: 1 });
  };
  handleLoadMore = e => {
    e.preventDefault();
    // console.log('loading more');
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  handleClickImage = e => {
    e.preventDefault();
    console.log(e.target.src);
  };
  onOpenModal = imageURL => {
    this.setState({ isModal: true, selectedImage: imageURL });
  };

  onCloseModal = () => {
    this.setState({ isModal: false, selectedImage: '' });
  };

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

        if (prevState.query === this.state.query) {
          this.setState({
            images: [...prevState.images, ...images.hits],
            totalHits: images.totalHits,
          });
        } else {
          this.setState({ images: images.hits, totalHits: images.totalHits });
        }
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

        <ImageGallery
          images={this.state.images}
          onOpenModal={this.onOpenModal}
        />

        {this.state.page < Math.ceil(this.state.totalHits / 12) ? (
          <Button onClick={this.handleLoadMore} />
        ) : null}
        {this.state.isModal && (
          <Modal
            largeImage={this.state.selectedImage}
            onClick={this.onCloseModal}
            onCloseModal={this.onCloseModal}
          />
        )}
      </div>
    );
  }
}

App.propTypes = {
  images: PropTypes.array,
  isLoading: PropTypes.bool,
  error: PropTypes.string,
  query: PropTypes.string,
  page: PropTypes.number,
  totalHits: PropTypes.number,
  isModal: PropTypes.bool,
  selectedImage: PropTypes.string,
};
