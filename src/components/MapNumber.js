import React, { useState, useEffect } from 'react';
import '../App.css';
import './MapNumber.css';
import { Link } from 'react-router-dom';


function MapNumber() {

  const pins = [
    { id: 1, email: 'email1@example.com', x: 0.3, y: 0.2 },
    { id: 2, email: 'email2@example.com', x: 0.6, y: 0.3 },
    // ... Add more pins here
  ];

  const handleButtonClick = () => {
    console.log('Picture button clicked!');
  }




  return (
    <div className='mapnumber-container'>
     <div className='mapnumber-container1'>
      <img className='mapnumber-img' src='/images/mapworld.png' alt="toto"/>
      <Link to="./products" className="icon-spain" onClick={handleButtonClick}>
       <img src="./images/icon-spain.png" alt="Your description" />
      </Link>
      <Link to="./products" className="icon-france" onClick={handleButtonClick}>
       <img src="./images/icon-france.png" alt="Your description" />
      </Link>
      <Link to="./products" className="icon-uk" onClick={handleButtonClick}>
       <img src="./images/icon-uk.png" alt="Your description" />
      </Link>
      <Link to="./products" className="icon-brasil" onClick={handleButtonClick}>
       <img src="./images/icon-brasil.png" alt="Your description" />
      </Link>
      <Link to="./products" className="icon-russia" onClick={handleButtonClick}>
       <img src="./images/icon-russia.png" alt="Your description" />
      </Link>
      <Link to="./products" className="icon-china" onClick={handleButtonClick}>
       <img src="./images/icon-china.png" alt="Your description" />
      </Link>
      <Link to="./products" className="icon-germany" onClick={handleButtonClick}>
       <img src="./images/icon-germany.png" alt="Your description" />
      </Link>
      <Link to="./products" className="icon-usa" onClick={handleButtonClick}>
       <img src="./images/icon-usa.png" alt="Your description" />
      </Link>
      <Link to="./products" className="icon-japan" onClick={handleButtonClick}>
       <img src="./images/icon-japan.png" alt="Your description" />
      </Link>
      <Link to="./products" className="icon-italy" onClick={handleButtonClick}>
       <img src="./images/icon-italy.png" alt="Your description" />
      </Link>
      <Link to="./products" className="icon-india" onClick={handleButtonClick}>
       <img src="./images/icon-india.png" alt="Your description" />
      </Link>
      <Link to="./products" className="icon-korea" onClick={handleButtonClick}>
       <img src="./images/icon-korea.png" alt="Your description" />
      </Link>
      <Link to="./products" className="icon-australia" onClick={handleButtonClick}>
       <img src="./images/icon-australia.png" alt="Your description" />
      </Link>
     </div>
     <div className='mapnumber-container2'>
       <p>Hello !</p>
     </div>
    </div>  
  );
}

export default MapNumber;