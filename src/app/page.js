'use client'
import Loader from '../components/Loader'
import React, {useState} from "react";

import Footer from '../components/Footer'


import Hero from '../components/Hero'

export default async function Main() {
 const [showLoader, setShowLoader] = useState(true);
  return (
    <>{
      showLoader ?<Loader setShowLoader={setShowLoader} />
    :
    <div className='z-[100]'> <Hero/>
      <Footer /></div>
     
      }
    </>
  );
};
