import React from 'react';
import Template from '../template';

const Roofing = () => {
  return (
    <Template
      tagline="Channel Reach"
      headline="Engaging Downstream Contractors."
      companyType="Roofing Manufacturer"
      targetAudience="Small to medium Roofing Contractors"
      sizeAudience="18,000 Roofing Contractors"
      stats={[
        {number: '$90M', text: 'Attrition before channel 80/20'},
        {number: '1,968', text: 'Contractor conversions to manufacturer\'s product'},
        {number: '2M', text: 'New touches in the contractor market'}
      ]}
      challenge="A major roofing materials manufacturer came to MMC because they were unable to identify and communicate with the actual end customers that were purchasing their branded products through distribution. These distributors did not share sales data and sold competitive brands."
      solution="TMMC provided the roofing materials manufacturer with a solution called ChannelReachTM. This consisted of “reaching” around the distribution network in order to communicate directly with the end customers/contractors. Through ChannelReachTM, MMC provided the roofing manufacturer with a data-driven, omni-channel marketing platform that works
      as an extension of their field sales channels in order to communicate with and influence contractors."
      results="MMC built relationships and established over 7,000 trial offers, which led to 2,400 “brand focused trials”. Out of these 2,400 trials, 1,968 contractors converted to the manufacturers product. These contractor conversions brought $90 million in incremental revenue and created a win/win with distribution."
    />
  );
}

export default Roofing;
