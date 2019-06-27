import React from 'react';
import Template from '../template';

const Distributor = () => {
  return (
    <Template
      tagline="Unidentified End Users"
      headline="Co-op funds used effectively"
      companyType="Regional Distributors of a National Building Products Manufacturer"
      targetAudience="Underserved accounts"
      sizeAudience="5,000 on average"
      stats={[
        { number: '-20%', text: 'Attrition before channel 80/20' },
        { number: '+30%', text: 'Increase in manufacturer product sales' }
      ]}
      challenge="The manufacturer had no way to identify their end users through independent distribution, resulting in a lack of control in regards to their marketing efforts."
      solution="Through our data hygiene process, we clean up the customer data and take the underserved customers at a distribution level executed through multi-touch, multichannel marketing campaigns via inside sales, direct mail, email, and fulfillment methods. This allows MMC to handle the full range of customer communications
      by capturing additional account data during each interaction and nurturing those opportunities to close sales and analyze lost sales. Using the marketing co-op funds, MMC ran an actual program that can be tracked and deliver results, giving the distributor their own local brand experience, while growing national revenue for the manufacturer. This gives the manufacturer a level of control for their marketing efforts and ensures brand communications."
      results="Before using Channel 80/20, attrition was estimated at 20%. Within the first 6 months using Channel 80/20, MMC had grown the sales of the manufacturer’s products by 30%."
    />
  );
}

export default Distributor;
