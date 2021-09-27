import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Our Endangered Species</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='https://images.unsplash.com/photo-1598891328250-6f7d41f47d69?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1025&q=80'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Red Panda Project'
              path='/services'
            />
            <CardItem
              src='https://images.unsplash.com/photo-1616054139156-6b518cab515a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1076&q=80'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Sundarban Ecorenewal'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='https://pic4.zhimg.com/80/v2-0a97da2b7620a79a7ab138ca0b318bb7_1440w.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Aquatic life & organisms'
              path='/services'
            />
            <CardItem
              src='https://i.pinimg.com/originals/fd/41/c5/fd41c52cea74b2b8ca0d237a444544d2.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Punjab Animal Conservation'
              path='/products'
            />
            <CardItem
              src='https://hindiheadline.com/wp-content/uploads/2020/12/Great-Indian-Bustard1.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='The great Indian Bastard'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;