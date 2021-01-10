import React from 'react';
import { ReactComponent as Envelope } from 'assets/envelope.svg';
import { ReactComponent as Phone } from 'assets/phone.svg';
import { ReactComponent as Facebook } from 'assets/facebook.svg';
// import { ImPhone, ImFacebook } from 'react-icons/im';
// import { IoMail } from 'react-icons/io5';

export const links = [
  {
    id: 1,
    url: '/',
    text: 'Home',
  },
  {
    id: 2,
    url: '/zabiegi',
    text: 'Zabiegi',
  },

  {
    id: 3,
    url: '/about',
    text: 'O Mnie',
  },
  {
    id: 5,
    url: '/contact',
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
    url: 'test@gmail.com',
    icon: <Envelope />,
  },
  {
    id: 9,
    url: 'https://www.facebook.com/kasiakoloda',
    icon: <Facebook />,
  },
];
