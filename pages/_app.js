import 'bootstrap/dist/css/bootstrap.css';
import '@/styles/main.scss';

import React from 'react';

export default function App({ Component, pageProps }) {
  return (
    <Component {...pageProps} />
  );
}
