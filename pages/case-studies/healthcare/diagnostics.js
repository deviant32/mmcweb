import React from 'react';
import Template from '../template';

const Diagnostics = () => {
  return (
    <Template
      tagline="Increasing sales of a matured product"
      headline="The power of Multichannel Marketing"
      companyType="Diagnostics"
      targetAudience="Physicians, NPs, Labs"
      sizeAudience="12,000 Healthcare Professionals"
      stats={[
        {number: '+39%', text: 'Lift in allergy tests in 4 months'},
        {number: '130K', text: 'Marketing touches executed during the campaign'},
        {number: '4:1 ROI', text: ''}
      ]}
      challenge="Our client, a major diagnostic company, wanted to increase sales of its allergy test to primary care providers and pediatricians,
      where there had been a sharp decline in test usage due to the popularization of alternative testing methods.
      Its field sales force was limited and not able to generate a significant reach and frequency for all targets.
      Additionally, its large website with thousands of products made previous non-personal promotion for the test ineffective."
      solution="We used a data-driven multichannel marketing strategy that incorporated direct mail, email, fax, voice, and a targeted landing page.
      Through these channels, we were able to reach physicians, nurse practitioners, and labs during peak allergy season (April–July)
      much more frequently than what was previously possible. Over 130,000 marketing touches were executed during the campaign."
      results="Our 4-month program resulted in a 39% lift of allergy tests leading to the client’s highest allergy test sales in the past 2 years. The incremental revenue drove a 4:1 ROI."
    />
  );
}

export default Diagnostics;
