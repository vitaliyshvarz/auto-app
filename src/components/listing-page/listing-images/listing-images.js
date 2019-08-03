import React from 'react';
import PropTypes from 'prop-types';

import ListingImageItem from './listing-image-item/listing-image-item';

import './listing-images.css';

function ListingImages ({ listing }) {
  return (
    <div className="row">
      {listing.images.map((listingImage, i) => (
        <ListingImageItem
          listingImage={listingImage}
          carTitle={listing.title}
          key={i}
        />
      ))}
    </div>
  );
}

ListingImages.defaultProps = {
  listing: {
    title: 'Loading...',
    images: []
  }
};

ListingImages.propTypes = {
  listing: PropTypes.shape({
    title: PropTypes.string,
    images: PropTypes.arrayOf(PropTypes.shape({
      uri: PropTypes.string
    }))
  })
};

export default ListingImages;
