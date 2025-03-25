'use client';
import { useState } from 'react';
// import { Map, Marker, Popup } from 'react-map-gl';
import { ListingCardItem, SearchResultData } from '../types/app';
import { getCenter } from 'geolib';
import 'mapbox-gl/dist/mapbox-gl.css';
import Image from 'next/image';
import MapboxMap, { Marker, Popup, ViewStateChangeInfo } from 'react-map-gl';

const MapComponent = ({ searchResultData }: { searchResultData: SearchResultData }) => {
  const [selectedLocation, setSelectedLocation] =
    useState<ListingCardItem | null>(null);

  const coordinates = searchResultData?.map((listing) => ({
    longitude: listing.long,
    latitude: listing.lat,
  }));
  const center = getCenter(coordinates) as {
    longitude: number;
    latitude: number;
  };
  const [viewState, setViewState] = useState({
    longitude: center.longitude,
    latitude: center.latitude,
    zoom: 11
  });

  return (
    <MapboxMap
      {...viewState}
      width="100%"
      height="100%"
      mapStyle="mapbox://styles/mapbox/streets-v12"
      onMove={(evt: ViewStateChangeInfo) => setViewState(evt.viewState)}
      mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAPBOX_KEY}
    >
      {searchResultData?.map((listing) => (
        <div key={listing.long}>
          <Marker longitude={listing.long} latitude={listing.lat}>
            <div
              onClick={() => setSelectedLocation(listing)}
              className='animate-bounce'
            >
              <Image
                src='/mapMarker.png'
                alt='map-marker'
                width={24}
                height={24}
              />
            </div>
          </Marker>
          {selectedLocation?.long === listing.long ? (
            <Popup
              closeOnClick={false}
              onClose={() => setSelectedLocation(null)}
              longitude={listing.long}
              latitude={listing.lat}
            >
              {listing.title}
            </Popup>
          ) : null}
        </div>
      ))}
    </MapboxMap>
  );
};

export default MapComponent;