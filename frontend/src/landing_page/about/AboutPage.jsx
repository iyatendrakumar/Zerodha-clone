import React from 'react';
import Hero from './Hero';
import Team from './Team';
import {useEffect } from 'react';
function AboutPage() {
    useEffect(() => {
    document.title = "About – Zerodha";
  }, []);
    return ( 
        <>
            <Hero />
            <Team />
        </>
     );
}

export default AboutPage;