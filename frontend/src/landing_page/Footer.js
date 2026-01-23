import React from 'react';

function Footer() {
    return (  
        <footer style={{backgroundColor: "rgb(250,250,250)"}}>
        <div className='container border-top mt-5'>
            <div className='row mt-5'> 
                <div className='col'>
                    <img src='media/logo.svg' alt='logo' style={{width:"50%"}}/>
                    <p>
                        &copy; 2010-2014, Not Zerodha Broking Ltd. All right reserved.
                    </p>
                </div>
                <div className='col'>
                    <p>Company</p>
                    <a href='/' style={{ textDecoration:"none",color: "#6c757d" }}>About</a> <br/>
                    <a href='/' style={{textDecoration:"none",color: "#6c757d" }}>Product</a><br/>
                    <a href='/' style={{ textDecoration:"none",color: "#6c757d" }}>Pricing</a><br/>
                    <a href='/' style={{ textDecoration:"none",color: "#6c757d" }}>Referral programme</a><br/>
                    <a href='/' style={{textDecoration:"none",color: "#6c757d" }}>Zerodha.tech</a><br/>
                    <a href='/' style={{ textDecoration:"none",color: "#6c757d" }}>Press & media</a><br/>
                    <a href='/' style={{textDecoration:"none",color: "#6c757d" }}>Zerodha cares (CSR)</a><br/>
                </div>
                <div className='col'>
                    <p>Support</p>
                    <a href='/' style={{textDecoration:"none",color: "#6c757d" }}>Contact</a> <br/>
                    <a href='/' style={{ textDecoration:"none",color: "#6c757d" }}>Support portal</a><br/>
                    <a href='/' style={{textDecoration:"none",color: "#6c757d" }}>List of Charges</a><br/>
                    <a href='/' style={{textDecoration:"none",color: "#6c757d" }}>Download & resources</a><br/>
                    <a href='/' style={{ textDecoration:"none",color: "#6c757d" }}>Z-Connect bag</a><br/>
                </div>
                <div className='col'>
                    <p>Account</p>
                    <a href='/' style={{ textDecoration:"none",color: "#6c757d" }}>Open a Account</a> <br/>
                    <a href='/' style={{ textDecoration:"none",color: "#6c757d" }}>Fund transfer</a><br/>
                    <a href='/' style={{ textDecoration:"none",color: "#6c757d" }}>60 Day Challenge</a><br/>
                </div>
            </div>
            <div className='mt-5 text-small text-muted' style={{fontSize: "14px"}}>
            <p>Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p>
                
            <p>Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances</p>

            <p>Smart Online Dispute Resolution | Grievances Redressal Mechanism Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>
            <p>Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.</p>

            <p>"Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket here.</p>

            <p>*Customers availing insurance advisory services offered by Ditto (Tacterial Consulting Private Limited | IRDAI Registered Corporate Agent (Composite) License No CA0738) will not have access to the exchange investor grievance redressal forum, SEBI SCORES/ODR, or arbitration mechanism for such products.</p>

            </div>
            <div>
                <a href='https://www.nseindia.com/' style={{marginLeft:"6rem",textDecoration:"none",color: "#6c757d" }}>NSE </a>
                <a href='https://www.bseindia.com/' style={{marginLeft:"2rem",textDecoration:"none",color: "#6c757d" }}> BSE </a>
                <a href='https://www.mcxindia.com/' style={{marginLeft:"2rem",textDecoration:"none",color: "#6c757d" }}>MCX</a>
                <a href='/' style={{marginLeft:"2rem" ,textDecoration:"none",color: "#6c757d" }}>Terms & conditions </a>
                <a href='/' style={{marginLeft:"2rem" , textDecoration:"none",color: "#6c757d" }}>Policies & procedures</a>
                <a href='/' style={{marginLeft:"2rem", textDecoration:"none",color: "#6c757d" }}>Privacy policy </a>
                <a href='/' style={{marginLeft:"2rem",textDecoration:"none",color: "#6c757d" }}>Disclosure </a>
                <a href='/' style={{marginLeft:"2rem",textDecoration:"none",color: "#6c757d" }}>For investor's attention</a>
                <a href='/' style={{marginLeft:"2rem",textDecoration:"none",color: "#6c757d" }}>Investor charter</a>
            </div>
        </div>
        </footer>
     );
}

export default Footer;