import React from 'react';
import Hero from './Hero';
import CreateTicket from './CreateTicket';
import {useEffect} from 'react';
function SupportPage() {
    useEffect(() => {
    document.title = "Supports – Zerodha";
  }, []);
    return ( 
        <>
            <Hero />
            <CreateTicket />
        </>
     );
}

export default SupportPage;