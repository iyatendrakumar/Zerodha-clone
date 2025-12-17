import React from 'react';
function Team() {
    return ( 
        <div className="container">
      <div className="row mb-5">
        <h1 className="fs-3 text-center">
          People
        </h1>
      </div>
      <div className="row text-muted" style={{LineHeight:"1.9", fontSize:"1.1em"}}>
        <div className="col-1"></div>
        <div className="col-5 p-5 text-center">
            <img src="media/images/nithinKamath.jpg" style={{borderRadius:"100%", width:"65%", margin:"0 auto"}} />
            <br />
            <br />
            <h5>Nithin Kamath</h5>
            <h6 className='mt-4'>Founder, CEO</h6>
        </div>
        <div className="col-5 mt-5 p-2">
          <div style={{ maxWidth: "520px",  margin: "0 auto"}}>
              <p>
                Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.
              </p>
              <p>
                He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
              </p>
              <p>
                Playing basketball is his zen.
              </p>
              <p >Connect on <a href="" className='text-decoration-none'>Homepage</a> / <a href="" className='text-decoration-none'>TradingQnA</a> / <a href="" className='text-decoration-none'>Twitter</a></p>
          </div>
        </div>
        <div className="col-1"></div>
      </div>
    </div>
     );
}

export default Team;