import React from 'react';
import { ReactComponent as Envelope } from 'assets/envelopeIcon.svg';
import { ReactComponent as Phone } from 'assets/phoneIcon.svg';
import { ReactComponent as Facebook } from 'assets/facebookIcon.svg';
import { ReactComponent as Marker } from 'assets/markerIcon.svg';

export const contactData = [
  {
    mail: {
      id: 1,
      title: 'Mail',
      icon: <Envelope />,
      line1: 'test.mail@gmail.com',
    },
    phone: {
      id: 2,
      title: 'Telefon',
      icon: <Phone />,
      line1: '+48 999 999 999',
    },
    facebook: {
      id: 3,
      title: 'Facebook',
      icon: <Facebook />,
      line1: '@kasiakoloda',
      link: 'https://www.facebook.com/kasiakoloda',
    },
    adress: {
      id: 4,
      title: 'Adres',
      icon: <Marker />,
      line1: 'Wawrzyniaka 9A',
      line2: '53-021 Wrocław',
      link: 'https://goo.gl/maps/tXmX25nL5oG3DNtr8',
      coordinates: {
        lat: 51.074869,
        lng: 17.002877,
      },
    },
  },
];

export default contactData;
