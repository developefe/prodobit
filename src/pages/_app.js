import React from 'react';

import '@/styles/globals.css'

import Sidebar from '@/layouts/sidebar'

function MyApp({ Component, pageProps }) {
  return <div className='flex'>
    <Sidebar />

    <div className='flex-1 relative overflow-hidden'>
      <Component {...pageProps} />
    </div>
  </div>
}

export default MyApp;
