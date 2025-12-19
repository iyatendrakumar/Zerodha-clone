import React from "react";
import {Link} from "react-router-dom";
import useLogoNavigation from "../hooks/useLogoNavigation";
function Footer() {
  const handleLogoClick = useLogoNavigation();
  return (
    <footer className=" border-top bg-light mt-5">
      <div className="container py-5">
        <div className="row mt-5">
          <div className="col">
            <div
             
              onClick={handleLogoClick}
              style={{ cursor: "pointer" }}
            >
              <img
                src="media/images/logo.svg"
                alt="Logo"
                style={{ width: "130px" }}
              />
            </div>
            <p>&copy; 2010 - 2025, Zerodha Broking Ltd. All rights reserved.</p>
          </div>
          <div className="col">
            <h5>Account</h5>
            <a className="text-muted text-decoration-none" href="#">
              Open demat account
            </a>
            <br />
            <a className="text-muted text-decoration-none" href="#">
              Minor demat account
            </a>
            <br />
            <a className="text-muted text-decoration-none" href="#">
              NRI demat account
            </a>
            <br />
            <a className="text-muted text-decoration-none" href="#">
              Commodity
            </a>
            <br />
            <a className="text-muted text-decoration-none" href="#">
              Dematerialisation
            </a>
            <br />
            <a className="text-muted text-decoration-none" href="#">
              Fund transfer
            </a>
            <br />
            <a className="text-muted text-decoration-none" href="#">
              MTF
            </a>
            <br />
            <a className="text-muted text-decoration-none" href="#">
              Referral Program
            </a>
          </div>

          <div className="col">
            <h5>Support</h5>
            <a className="text-muted text-decoration-none" href="#">
              Contact us
            </a>
            <br />
            <a className="text-muted text-decoration-none" href="#">
              Support portal
            </a>
            <br />
            <a className="text-muted text-decoration-none" href="#">
              How to file a complaint?
            </a>
            <br />
            <a className="text-muted text-decoration-none" href="#">
              Status of your complaint
            </a>
            <br />
            <a className="text-muted text-decoration-none" href="#">
              Bulletin
            </a>
            <br />
            <a className="text-muted text-decoration-none" href="#">
              Circular
            </a>
            <br />
            <a className="text-muted text-decoration-none" href="#">
              Z-Connect blog
            </a>
            <br />
            <a className="text-muted text-decoration-none" href="#">
              Downloads
            </a>
          </div>

          <div className="col">
            <h5>Company</h5>
            <a className="text-muted text-decoration-none" href="#">
              About
            </a>
            <br />
            <a className="text-muted text-decoration-none" href="#">
              Philosophy
            </a>
            <br />
            <a className="text-muted text-decoration-none" href="#">
              Press & media
            </a>
            <br />
            <a className="text-muted text-decoration-none" href="#">
              Careers
            </a>
            <br />
            <a className="text-muted text-decoration-none" href="#">
              Zerodha Cares (CSR)
            </a>
            <br />
            <a className="text-muted text-decoration-none" href="#">
              Zerodha.tech
            </a>
            <br />
            <a className="text-muted text-decoration-none" href="#">
              Open source
            </a>
          </div>

          <div className="col">
            <h5>Quick links</h5>
            <a className="text-muted text-decoration-none" href="#">
              Upcoming IPOs
            </a>
            <br />
            <a className="text-muted text-decoration-none" href="#">
              Brokerage charges
            </a>
            <br />
            <a className="text-muted text-decoration-none" href="#">
              Market holidays
            </a>
            <br />
            <a className="text-muted text-decoration-none" href="#">
              Economic calendar
            </a>
            <br />
            <a className="text-muted text-decoration-none" href="#">
              Calculators
            </a>
            <br />
            <a className="text-muted text-decoration-none" href="#">
              Markets
            </a>
            <br />
            <a className="text-muted text-decoration-none" href="#">
              Sectors
            </a>
          </div>
        </div>
        <div
          className=" mt-5 text-small text-muted"
          style={{ fontSize: "12px" }}
        >
          <p>
            Zerodha Broking Ltd.: Member of NSE, BSE & MCX – SEBI Registration
            no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha
            Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Registered
            Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony,
            Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru -
            560078, Karnataka, India. For any complaints pertaining to
            securities broking please write to complaints@zerodha.com, for DP
            related to dp@zerodha.com. Please ensure you carefully read the Risk
            Disclosure Document as prescribed by SEBI | ICF
          </p>
          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name,
            PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
            Communication, Speedy redressal of the grievances
          </p>
          <p>
            Smart Online Dispute Resolution | Grievances Redressal Mechanism
          </p>
          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>
          <p>
            Attention investors: 1) Stock brokers can accept securities as
            margins from clients only by way of pledge in the depository system
            w.e.f September 01, 2020. 2) Update your e-mail and phone number
            with your stock broker / depository participant and receive OTP
            directly from depository on your e-mail and/or mobile number to
            create pledge. 3) Check your securities / MF / bonds in the
            consolidated account statement issued by NSDL/CDSL every month.
          </p>
          <p>
            India's largest broker based on networth as per NSE. NSE broker
            factsheet
          </p>
          <p>
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors. KYC is one time exercise while dealing in securities
            markets - once KYC is done through a SEBI registered intermediary
            (broker, DP, Mutual Fund etc.), you need not undergo the same
            process again when you approach another intermediary." Dear
            Investor, if you are subscribing to an IPO, there is no need to
            issue a cheque. Please write the Bank account number and sign the
            IPO application form to authorize your bank to make payment in case
            of allotment. In case of non allotment the funds will remain in your
            bank account. As a business we don't give stock tips, and have not
            authorized anyone to trade on behalf of others. If you find anyone
            claiming to be part of Zerodha and offering such services, please
            create a ticket here.
          </p>
          <p>
            *Customers availing insurance advisory services offered by Ditto
            (Tacterial Consulting Private Limited | IRDAI Registered Corporate
            Agent (Composite) License No CA0738) will not have access to the
            exchange investor grievance redressal forum, SEBI SCORES/ODR, or
            arbitration mechanism for such products.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
