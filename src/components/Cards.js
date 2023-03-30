import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Our Services</h1>
      <p>We are a full-service agency, focused on money-making strategies 
        with our award-winning testing vortex to get you results faster, smarter 
        and more reliably. As experts in social, google ads, email, creative, SEO 
        and more – we find your digital recipe for success.</p>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-10.jpg'
              text='Powerful tool that can help you reach your target audience, increase brand awareness, and boost sales'
              label='Advertising'
              path='/services'
            />
            <CardItem
              src='images/img-11.jpg'
              text='Smart way to connect with your audience, drive website traffic, and grow your business'
              label='Digital marketing'
              path='/services'
            />
            <CardItem
              src='images/img-12.jpg'
              text='Art of crafting compelling visual stories that captivate and engage your audience'
              label='Video production'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-13.jpg'
              text='Buying is the strategic approach to reaching your target audience with the right message, at the right time, and in the right place'
              label='Media planning'
              path='/services'
            />
            <CardItem
              src='images/img-14.jpg'
              text='Expert guidance that helps you achieve your business goals faster and more effectively'
              label='Consulting'
              path='/products'
            />
            <CardItem
              src='images/img-15.jpg'
              text='Powerful technique of creating valuable content that attracts and retains your ideal customers'
              label='Content marketing'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;