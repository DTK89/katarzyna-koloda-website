import React from 'react';
import { ReactComponent as Envelope } from 'assets/envelopeIcon.svg';
import { ReactComponent as Phone } from 'assets/phoneIcon.svg';
import { ReactComponent as Facebook } from 'assets/facebookIcon.svg';
// import { ImPhone, ImFacebook } from 'react-icons/im';
// import { IoMail } from 'react-icons/io5';

export const links = [
  {
    id: 1,
    url: 'prices',
    text: 'Cennik',
  },
  {
    id: 2,
    url: 'treatments',
    text: 'Zabiegi',
  },

  {
    id: 3,
    url: 'about',
    text: 'O Mnie',
  },
  {
    id: 4,
    url: 'contact',
    text: 'Kontakt',
  },
];

export const social = [
  {
    id: 7,
    url: '999 999 999',
    icon: <Phone />,
  },
  {
    id: 8,
    url: 'mailto: test@gmail.com',
    icon: <Envelope />,
  },
  {
    id: 9,
    url: 'https://www.facebook.com/kasiakoloda',
    icon: <Facebook />,
  },
];
