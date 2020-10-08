import React from 'react';
import '../stylesheets/MailBox.css';
import logo from '../icons/logo.png';

function MailBox() {
    return (
        <div className="mailbox">
            <div className="mailbox__resultsCount">
            <h2>Results: </h2>
            <p>0 mail(s)</p>
            </div>
            <div className="mailbox__logo">
               <img src={logo} alt="mail archiver logo"/>
            </div>
            
        </div>
    )
}

export default MailBox
