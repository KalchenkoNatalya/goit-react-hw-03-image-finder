import styles from './ImageGalleryItem.module.css'
import PropTypes from 'prop-types'


export const  ImageGalleryItem = ({arrayImages, selectedImage}) => {
  return (
    <div className={styles.imageGallery}>
        {arrayImages.map(({id, webformatURL, largeImageURL, tags}) => (<li className={styles.imageGalleryItem} key={id}>
           <img className={styles.imageGalleryItemImage} src={webformatURL}  alt={tags} onClick={() => selectedImage(largeImageURL)}/>
         </li>))}
    </div>

 
  );
};


ImageGalleryItem.propTypes = {
  arrayImages: PropTypes.array.isRequired,
  selectedImage: PropTypes.func.isRequired,
};