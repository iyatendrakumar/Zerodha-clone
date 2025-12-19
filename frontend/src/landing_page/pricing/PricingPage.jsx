import React from 'react';
import {useEffect } from 'react';
import Hero from './Hero';
import Brokerage from './Brokerage';
import PricingTabs from './PricingTabs';

function PricingPage() {
    useEffect(() => {
    document.title = "Pricing – Zerodha";
  }, []);
    return ( 
        <>
            <Hero />
            <PricingTabs/>
            <Brokerage />
        </>
     );
}

export default PricingPage;