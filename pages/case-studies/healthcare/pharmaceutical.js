import React from 'react';
import Template from '../template';

const Pharmaceutical = () => {
  return (
    <Template
      tagline="Stopping market erosion"
      headline="Reaching Uncovered Prescribers."
      companyType="Pharmaceutical"
      targetAudience="Primary Care Physicians"
      sizeAudience="43,000 Healthcare Professionals"
      stats={[
        { number: '8%', text: 'Overall TRX Increase' }
      ]}
      challenge="Our client, a major pharmaceutical company, was looking to increase TRx of its dermatological brand. However, the market was crowded by generic products and its field sales force was focusing only on dermatologists. As a result, its market share had eroded among primary care physicians (PCPs). Our client needed to find a way to fill the gaps their sales force left behind."
      solution="Our data-driven multichannel strategy used inside sales representatives, email blasts, and sampling to reach previously untouched PCPs. We segmented the PCPs based on prescribing potential, allocating the proper resources for each segment based on its projected value (high value, low value, and a conversion group that was prescribing a competitor’s brand). All of our communication was measured and analyzed to provide learning and campaign optimization constantly throughout the program."
      results="Among the 43,000 PCPs we targeted, TRx for the brand increased 8.6% overall against a holdout of comparable physicians."
    />
  );
}

export default Pharmaceutical;
