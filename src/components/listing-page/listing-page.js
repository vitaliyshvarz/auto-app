import React, { useState, useEffect } from 'react';

import ListingHeader from './listing-header/listing-header';
import ListingImages from './listing-images/listing-images';
import listingApi from '../../api/listing/listing';

function ListingPage() {

  const [listing, setData] = useState({
    title: 'Loading your car...',
    images: []
  });

  useEffect(() => {
    const fetchData = async () => {
      const result = await listingApi.getDummyListing();
      setData(result);
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <ListingHeader listingTitle={listing.title}/>
      <ListingImages listingImages={listing.images}/>
    </div>
  );
}

export default ListingPage;
