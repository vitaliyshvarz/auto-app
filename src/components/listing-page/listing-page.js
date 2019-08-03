import React, { Component } from 'react';

import ListingHeader from './listing-header/listing-header';
import ListingImages from './listing-images/listing-images';
import listingApi from '../../api/listing/listing';

class ListingPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listing: {
        title: 'Loading your car...',
        images: []
      }
    };
  }

  async componentDidMount() {
    const listing = await listingApi.getDummyListing();

    this.setState({
      listing
    });
  }

  render() {
    const { listing } = this.state;

    return (
      <div className="container">
        <ListingHeader listingTitle={listing.title}/>
        <ListingImages listing={listing}/>
      </div>
    );
  }
}

export default ListingPage;
