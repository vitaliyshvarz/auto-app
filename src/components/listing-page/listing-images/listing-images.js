import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
  LISTING_IMAGES_THUMB_SIZE_SUFFIX,
  PROD_PROTOCOL_PREFIX
} from './constants';
import './listing-images.css';

function ListingImages ({ listingImages }) {

  const [modalOpen, toggleModal] = useState(false);

  function openListingImage() {
    toggleModal(!modalOpen);
  }

  return (
    <div className="row">
      {listingImages.map((item, i) => (
        <div className="col-12 col-sm-6 col-lg-4 listing-picture"
          onClick={openListingImage}
          key={i}
        >
          <img
            class="listing-image-thumb"
            src={`${PROD_PROTOCOL_PREFIX}${item.uri}${LISTING_IMAGES_THUMB_SIZE_SUFFIX}`}
            alt="logo"
          />
        </div>
      ))}
    </div>
  );
}

ListingImages.propTypes = {
  listingImages: PropTypes.arrayOf(PropTypes.shape({
    uri: PropTypes.string
  }))
};

export default ListingImages;
