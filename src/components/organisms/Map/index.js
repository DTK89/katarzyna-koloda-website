import React from 'react';
import { GoogleMap, Marker, InfoWindow, useLoadScript } from '@react-google-maps/api';
import { ReactComponent as LogoIcon } from 'assets/logo/logo.svg';
import styled from 'styled-components';
import mapStyles from './mapStyles';

const StyledGoogleMap = styled(GoogleMap)`
  height: 100%;
  width: 100%;
`;

const StyledInfoWindow = styled(InfoWindow)`
  background: white;
  border: 1px solid var(--clr-trinary);
  padding: 15px;
`;

const LogoWrapper = styled.div`
  height: auto;
  max-height: 8rem;
  max-width: 13.6rem;
  color: var(--clr-primary);
`;

// react-google-maps API properties
const containerStyle = {
  width: '100%',
  height: '100%',
};

const position = {
  lat: 51.074869,
  lng: 17.002877,
};

const options = {
  styles: mapStyles,
  zoomControl: true,
  disableDefaultUI: true,
};

const Map = () => {
  const { isLoaded, loadError } = useLoadScript({
    id: 'google-map-script',
    googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY,
  });

  if (loadError) return 'Error loading maps';
  if (!isLoaded) return 'Loading maps';
  return (
    <StyledGoogleMap
      mapContainerStyle={containerStyle}
      center={position}
      zoom={17}
      options={options}
    >
      <Marker position={position}>
        <StyledInfoWindow position={position}>
          <LogoWrapper>
            <LogoIcon />
          </LogoWrapper>
        </StyledInfoWindow>
      </Marker>
    </StyledGoogleMap>
  );
};

export default React.memo(Map);