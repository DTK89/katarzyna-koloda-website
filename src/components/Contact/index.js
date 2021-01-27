import React from 'react';
import { GoogleMap, Marker, InfoWindow, useLoadScript } from '@react-google-maps/api';
import styled from 'styled-components';
// import { ReactComponent as Envelope } from 'assets/envelopeIcon.svg';
// import { ReactComponent as Marker } from 'assets/markerIcon.svg';
// import { ReactComponent as Phone } from 'assets/phoneIcon.svg';
// import { ReactComponent as Facebook } from 'assets/facebookIcon.svg';

import { ReactComponent as LogoIcon } from 'assets/logo/logo.svg';
import { contactData } from './data';
import mapStyles from './mapStyles';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5rem 0 10rem 0;
`;

const Title = styled.div`
  margin-bottom: 2.5rem;
  /* text-align: center; */

  h1 {
    text-transform: uppercase;
  }
`;

const Underline = styled.div`
  width: 8rem;
  height: 0.3rem;
  background: var(--clr-primary);
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 992px) {
    width: 11rem;
    height: 0.4rem;
  }
`;

const Container = styled.div`
  /* height: 80vh; */
  width: 100%;
  padding: 5rem 2rem;
  max-width: var(--max-width);

  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr;
  grid-gap: 20px;

  @media screen and (min-width: 992px) {
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 1fr;
  }
`;

const ContactInfo = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  justify-content: center;
  align-items: center;
  grid-gap: 10px;
  grid-template-rows: 40px 60px 40px 40px 50px;

  @media screen and (min-width: 992px) {
    padding: 30px 0;
    grid-gap: 10px;
    grid-template-rows: 70px 80px 50px 50px 50px;
    justify-content: start;
  }
`;

const InfoItem = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  grid-gap: 15px;
  grid-template-columns: 40px 200px;
  @media screen and (min-width: 992px) {
    grid-template-columns: 40px 1fr;
  }
`;

const IconWrapper = styled.a`
  height: auto;
  max-height: 5rem;
  max-width: 5rem;
  color: var(--clr-primary);
`;

const TextWrapper = styled.p`
  font-size: 1.9rem;
  margin: 0;

  @media screen and (min-width: 992px) {
    font-size: 2rem;
  }
`;

const AdressItem = styled.div`
  p {
    margin: 5px 0;
  }
`;

// const StyledGoogleMap = styled(GoogleMap)`
//   height: 100%;
//   width: 100%;
// `;

const StyledInfoWindow = styled(InfoWindow)`
  background: white;
  border: 1px solid #ccc;
  padding: 15px;
`;

const LogoWrapper = styled.div`
  height: auto;
  max-height: 9rem;
  max-width: 15.3rem;
  color: var(--clr-logo);
`;

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

function Contact() {
  const { isLoaded, loadError } = useLoadScript({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyChGXJKQ6rBqh-IFkt3ZS_25gJ1I9Jx_cI',
  });

  if (loadError) return 'Error loading maps';
  if (!isLoaded) return 'Loading maps';

  return (
    <Wrapper id="contact">
      <Title>
        <h1>Kontakt</h1>
        <Underline />
      </Title>
      <Container>
        <ContactInfo>
          <Title>
            <h2>Modelowanie Sylwetki</h2>
            <h2>Katarzyna Kołoda</h2>
          </Title>
          <InfoItem>
            <IconWrapper href={contactData[0].adress.link}>
              {contactData[0].adress.icon}
            </IconWrapper>
            <AdressItem>
              <TextWrapper>{contactData[0].adress.text1}</TextWrapper>
              <TextWrapper>{contactData[0].adress.text2}</TextWrapper>
            </AdressItem>
          </InfoItem>
          <InfoItem>
            <IconWrapper>{contactData[0].phone.icon}</IconWrapper>
            <TextWrapper>{contactData[0].phone.text}</TextWrapper>
          </InfoItem>
          <InfoItem>
            <IconWrapper>{contactData[0].mail.icon}</IconWrapper>
            <TextWrapper>{contactData[0].mail.text}</TextWrapper>
          </InfoItem>
          <InfoItem>
            <IconWrapper href={contactData[0].facebook.link}>
              {contactData[0].facebook.icon}
            </IconWrapper>
            <TextWrapper>{contactData[0].facebook.text}</TextWrapper>
          </InfoItem>
        </ContactInfo>
        <GoogleMap mapContainerStyle={containerStyle} center={position} zoom={17} options={options}>
          <Marker position={position}>
            <StyledInfoWindow position={position}>
              <LogoWrapper>
                <LogoIcon />
              </LogoWrapper>
            </StyledInfoWindow>
          </Marker>
        </GoogleMap>
      </Container>
    </Wrapper>
  );
}

export default React.memo(Contact);
