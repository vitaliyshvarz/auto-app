import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import {
  LISTING_IMAGES_MODAL_SIZE_SUFFIX,
  PROD_PROTOCOL_PREFIX
} from '../../constants';

import './listing-image-modal.css';

class ListingImageModal extends Component {
  constructor(props) {
    super(props);

    const modalRoot = document.createElement('div');
    modalRoot.setAttribute('id', 'listingImageModalroot');
    document.body.appendChild(modalRoot);

    this.state = {
      el: document.createElement('div'),
      modalRoot
    };
  };

  componentDidMount() {
    this.state.modalRoot.appendChild(this.state.el);
  }

  componentWillUnmount() {
    this.state.modalRoot.removeChild(this.state.el);
  }

  render() {
    const { imageUri, imageTitle, onClick, isOpen } = this.props;

    return isOpen ? ReactDOM.createPortal(
      <div className="listing-image-modal">
        <div className="listing-image-modal-header">
          <p>
            {imageTitle}
          </p>
          <button type="button" className="close-modal-btn" onClick={onClick}>
          &times;
          </button>
        </div>
        <div>
          <img
            className="listing-image-thumb"
            src={`${PROD_PROTOCOL_PREFIX}${imageUri}${LISTING_IMAGES_MODAL_SIZE_SUFFIX}`}
            alt="logo"
          />
        </div>
      </div>,
      // A DOM element
      this.state.el,
    ) : null;
  }
}

export default ListingImageModal;
