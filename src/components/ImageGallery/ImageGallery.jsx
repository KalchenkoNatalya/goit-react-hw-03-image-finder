// import styles from './ImageGallery.module.css'
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';


export const ImageGallery = ({images}) => {
  return (
    <div>
      <ul >
        <ImageGalleryItem arrayImages={images}/>
      </ul>
    </div>
  );
};