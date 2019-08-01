import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
  LISTING_IMAGES_THUMB_SIZE_SUFFIX,
  PROD_PROTOCOL_PREFIX
} from '../constants';
import ListingImageModal from './listing-image-modal/listing-image-modal';

import './listing-image-item.css';

function ListingImageItem ({ listingImage, carTitle }) {

  const [modalOpen, toggleModal] = useState(false);

  function openListingImage() {
    toggleModal(!modalOpen);
  }

  return (
    <div className="col-12 col-sm-6 col-lg-4 listing-picture"
      onClick={openListingImage}
    >
      <img
        className="listing-image-thumb"
        src={`${PROD_PROTOCOL_PREFIX}${listingImage.uri}${LISTING_IMAGES_THUMB_SIZE_SUFFIX}`}
        alt="logo"
      />
      <ListingImageModal
        isOpen={modalOpen}
        onClick={openListingImage}
        imageUri={listingImage.uri}
        imageTitle={carTitle}
      />
    </div>
  );
}

ListingImageItem.propTypes = {
  listingImage: PropTypes.shape({
    uri: PropTypes.string
  })
};

export default ListingImageItem;
