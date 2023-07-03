// import styles from './ImageGallery.module.css'
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types'

export const ImageGallery = ({images, onOpenModal}) => {
  return (
    <div>
      <ul >
        <ImageGalleryItem arrayImages={images} selectedImage={onOpenModal}/>
      </ul>
    </div>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  onOpenModal: PropTypes.func.isRequired
};