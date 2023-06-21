import React, { useState } from 'react';

import '@/styles/globals.css'

import Sidebar from '@/layouts/sidebar'
import MobileHeader from '@/layouts/mobile-header';

function MyApp({ Component, pageProps }) {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  
  return <div className='flex'>
    <MobileHeader
      isSidebarVisible={isSidebarVisible}
      setIsSidebarVisible={setIsSidebarVisible}
    />

    <Sidebar
      isSidebarVisible={isSidebarVisible}
    />

    <div className='flex-1 relative overflow-hidden'>
      <Component {...pageProps} />
    </div>
  </div>
}

export default MyApp;
