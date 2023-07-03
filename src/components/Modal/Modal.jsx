import styles from './Modal.module.css';
import { Component } from 'react';
import PropTypes from 'prop-types'


export class Modal extends Component {
  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onCloseModal();
    }
  };
  handleOverlayClose = e => {
    this.props.onCloseModal();
  };

  componentDidMount = () => {
    window.addEventListener('keydown', this.handleKeyDown);
  };

  componentWillUnmount = () => {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  render() {
    return (
      <div className={styles.overlay} onClick={this.handleOverlayClose}>
        <div className={styles.modal}>
          <img
            src={this.props.largeImage}
            alt=""
            onClick={this.props.onClick}
          />
        </div>
      </div>
    );
  }
}


Modal.propTypes = {
  largeImage: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  onCloseModal: PropTypes.func.isRequired,
};