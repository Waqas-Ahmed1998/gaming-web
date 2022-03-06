import React from 'react';
import Acard1 from '../About/Acard1';
import Acard2 from '../About/Acard2';
import Campaign2 from '../standardComponents/Campaign2';
import Campaign from '../standardComponents/Campaign';
import NumbersSpeak from '../standardComponents/NumbersSpeak';
import Plateforms from '../standardComponents/Plateforms';

function About() {
  return (
    <>
      <div className=' hidden absolute  -left-[0%] w-[2650px] h-[200vh]  service-mid bg-no-repeat   xl:inline-grid '></div>
      <div className='relative overflow-hidden xl:mt-20'>
        <div className=' max-w-screen-xl mx-auto  xl:space-y-10'>
          <Acard1 />
          <Acard2 />
        </div>
        <NumbersSpeak />
        <Plateforms /> <Campaign />
      </div>
    </>
  );
}

export default About;
