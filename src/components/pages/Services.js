import React from 'react';
import Card1 from '../services/Card1';
import Scard2 from '../services/Scard2';
import Scard3 from '../services/Scard3';
import Scard4 from '../services/Scard4';
import Campaign from '../standardComponents/Campaign';
import Campaign2 from '../standardComponents/Campaign2';
import NumbersSpeak from '../standardComponents/NumbersSpeak';
import Plateforms from '../standardComponents/Plateforms';

function Services() {
  return (
    <div className='relative overflow-hidden'>
      <div className='max-w-screen-xl mx-auto  xl:space-y-10'>
        <Card1 />
        <div className='card-width'>
          <Scard2 />
        </div>
        <div className='long-card'>
          <Scard3 />
        </div>
        <div className='card-width'>
          <Scard4 />
        </div>
        <NumbersSpeak />
        <Plateforms />
        <Campaign2 />
      </div>
    </div>
  );
}

export default Services;
