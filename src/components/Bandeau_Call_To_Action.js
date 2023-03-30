import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Bandeau_Call_To_Action.css';


function BandeauCallToAction() {

  return (
    <>
      <nav className='bandeaucalltoaction'>
      <p className='titlebandeaucalltoaction'>Be our next success story.</p>
        <div className='bandeaucalltoaction-container'>          
            <Link to='/products' className='bandeaucalltoaction-button'>
                YES! LET'S GET STARTED
            </Link>
             {/* <button to='/products' onClick={getToProduct}>Default</button> */}
        </div>
      </nav>
    </>
  );
}


export default BandeauCallToAction