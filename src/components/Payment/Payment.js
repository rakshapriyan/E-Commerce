import React, { useState } from 'react';
import './payment.css';
import {BsQrCode} from 'react-icons/bs';

export const Payment = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [activeOption, setActiveOption] = useState(null);

  const handleImageClick = (option) => {
    setSelectedOption(option === selectedOption ? null : option);
    setActiveOption(option === activeOption ? null : option);
  };

  return (
    <div>
      <div style={{backgroundImage:'url("https://img3.wallspic.com/crops/5/2/2/2225/2225-electronic_device-retail-e_commerce-money-technology-1920x1080.jpg")'}}  id="img-pay">
      </div>
      <div id="pay-whole" style={{ position: 'relative', zIndex: '1' }}>
        <div
          id="cred-bor"
          onClick={() => handleImageClick('Credit Card')}
          className={`cred-item ${selectedOption === 'Credit Card' ? 'active' : ''}`}
        >
          <a href="#">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtcUHX0By8kQ_we0qkwcV2kQyp5DHv9OQn2MVOL8n85XAIqIEXs9B3FwyFA8lCOxr_TEE&usqp=CAU"
              id="credit"
              alt="Credit Card"
            />
            <div id="credit-tex"></div>
          </a>
        </div>

        {selectedOption === 'Credit Card' && (
          <div id="form-container">
            <form>
              <center>
                <br /><br />
                <input type="text" name="cardNumber" placeholder='Card Number' id="card-number"/>
                <br /><br />
                <input type="text" name="expiryDate" placeholder="Expiry Date" id="expiry-date"/>
                <br /><br />
                <input type="text" name="cvv" placeholder='CVV' id="cvv"/>
                <br /><br />
                <button type="submit" id="payn">Pay</button>
              </center>
            </form>
          </div>
        )}

        <div
          id="cred-bor"
          onClick={() => handleImageClick('Debit Card')}
          className={selectedOption === 'Debit Card' ? 'active' : ''}
        >
          <a href="#">
            <img
              src="https://static.vecteezy.com/system/resources/previews/005/411/951/original/blue-debit-card-illustration-business-concept-financial-awareness-flat-cartoon-style-suitable-for-icon-web-landing-page-banner-flyer-sticker-card-background-t-shirt-clip-art-free-vector.jpg"
              id="credit"
              alt="Debit Card"
            />
            <div id="credit-tex"></div>
          </a>
        </div>

        {selectedOption === 'Debit Card' && (
          <div>
            <div id="form-container">
              <center>
                <form>
                  <br /><br />
                  <input type="text" name="cardNumber" placeholder="Card number" id="card-number" />
                  <br /><br />
                  <input type="text" name="expiryDate" placeholder="Expiry date" id="expiry-date" />
                  <br /><br />
                  <input type="text" name="cvv" placeholder="CVV" id="cvv" />
                  <br /><br />
                  <button type="submit" id="payn">Pay</button>
                </form>
              </center>
            </div>
          </div>
        )}

        <div
          id="cred-bor"
          onClick={() => handleImageClick('UPI')}
          className={selectedOption === 'UPI' ? 'active' : ''}
        >
          <a href="#">
            <img
              src="https://cdn.iconscout.com/icon/free/png-256/free-upi-2085056-1747946.png"
              id="credit"
              alt="Debit Card"
            />
            <div id="credit-tex"></div>
          </a>
        </div>

        {selectedOption === 'UPI' && (
          <div id="form-container">
            <br />
            <div id="dro-pay">
              <select name="language" id="language">
                <option value="javascript">Paytm</option>
                <option value="python">Gpay</option>
                <option value="c++">Phonepe</option>
                <option value="java">Whatsapp</option>
              </select>
            </div>
            <br /><br />
            <div>
              <input type="text" placeholder="Enter Your UPI ID number" id="upi-id" style={{width:"200px",height:"50px",marginLeft:"100px"}}/>
              <center style={{color:"white"}}><br />Or</center>
            </div>
            <br />
            <div style={{marginLeft:"150px",color:"white"}}>
              Pay With QR <BsQrCode style={{marginLeft:"7px",marginBottom:"-2px",colo:"white"}}/>
            </div>
          </div>
        )}

        <div
          id="cred-bor"
          onClick={() => handleImageClick('NetBanking')}
          className={selectedOption === 'NetBanking' ? 'active' : ''}
        >
          <a href="#">
            <img
              src="https://cdn.iconscout.com/icon/free/png-256/free-netbanking-credit-debit-card-bank-transaction-32302.png"
              id="credit"
              alt="Debit Card"
            />
            <div id="credit-tex"></div>
          </a>
        </div>

        {selectedOption === 'NetBanking' && (
          <div id="form-container">
            <center>
              <form>
                <br /><br />
                <input type="text" name="cardNumber" placeholder="card number" id="card-number"/>
                <br /><br />
                <input type="text" name="expiryDate" placeholder="expiry date" id="expiry-date"/>
                <br /><br />
                <input type="text" name="cvv" placeholder="cvv" id="cvv"/>
                <br /><br />
                <button type="submit" id="payn">Pay</button>
              </form>
            </center>
          </div>
        )}

      </div>
     
      
    </div>
  );
};
