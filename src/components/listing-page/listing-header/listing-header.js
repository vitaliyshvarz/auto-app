import React from 'react';
import PropTypes from 'prop-types';

import './listing-header.css';

function ListingHeader ({ listingTitle }) {
  return (
    <div className="listing-name">
      <h3>{listingTitle}</h3>
    </div>
  );
}

ListingHeader.defaultProps = {
  listingTitle: 'Loading car...',
};

ListingHeader.propTypes = {
  listingTitle: PropTypes.string
};

export default ListingHeader;
