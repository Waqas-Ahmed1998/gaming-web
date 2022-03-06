import React from 'react';
import Card1 from '../home/Card1';
import Card2 from '../home/Card2';
import Card3 from '../home/Card3';
import Card4 from '../home/Card4';
import Card5 from '../home/Card5';
import Campaign from '../standardComponents/Campaign';
import NumbersSpeak from '../standardComponents/NumbersSpeak';
import Plateforms from '../standardComponents/Plateforms';

function Home() {
  return (
    <div className=''>
      <div className=' hidden absolute  -left-[0%] w-[2650px] h-[200vh]  service-mid bg-no-repeat   xl:inline-grid '></div>

      <div className='flex justify-center md:h-screen md:max-w-[95rem] mx-auto '>
        <Card1 />
      </div>
      <div className='flex justify-center lg:h-screen lg:max-w-[95rem] mx-auto relative'>
        <Card2 />
      </div>
      <div className='lg:mt-72 flex justify-center lg:h-screen lg:max-w-[95rem] mx-auto relative'>
        <Card3 />
      </div>
      <div className=' grid grid-cols-1 md:max-w-[95rem] mx-auto relative'>
        <Card4 />
      </div>
      <div className='md:my-40 advertising-image  bg-no-repeat bg-center mx-auto'>
        <Card5 />
      </div>
      <NumbersSpeak />
      <Plateforms />
      <Campaign />
    </div>
  );
}

export default Home;
