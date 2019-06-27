import React from 'react';
import Template from '../template';

const HvacRes = () => {
  return (
    <Template
      tagline="Channel 80/20"
      headline="Managing and Growing Underserved Accounts."
      companyType="HVAC Manufacturer"
      targetAudience="Underserved Residential HVAC Contractors"
      sizeAudience="50,000 contactors"
      stats={[
        { number: '-19%', text: 'Attrition before channel 80/20' },
        { number: '23%', text: 'Sales Growth' },
        { number: '$350M', text: 'In sales growth over 10 years' }
      ]}
      challenge="The client needed assistance with their field sales coverage due to the impossibility of only having 200 field sales reps responsible for managing 120,000 accounts. Based on historical data, a field sales rep can only effectively manage the top third of their accounts, leaving the bottom two-thirds unserved and under-managed."
      solution="MMC deployed Channel 80/20 to focus on 50,000 accounts consisting of small to medium-sized contractors. Channel 80/20 integrated direct marketing with inside sales and focuses efforts on under-represents accounts, markets, and products. MMC delivered the campaign on multiple channels (direct mail, email, targeted ad display, etc.) with multiple touches, all while working as an extension of the client’s sales force. We also gathered data on each customer interaction along the way. By working together as one team with the clients’ sales force, we brought sales growth in a stagnant market."
      results="After one year of Channel 80/20, this manufacturer grew from -19% to 23% in YOY sales growth. MMC lifted this manufacturer to $350M in sales over a ten year period."
    />
  );
}

export default HvacRes;
