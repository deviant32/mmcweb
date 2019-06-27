import React from 'react';
import Template from '../template';

const Hvac = () => {
  return (
    <Template
      tagline="Direct selling and servicing underserved accounts"
      headline="Implementing a supplemental channel to allow a better customer experience"
      companyType="HVAC Manufacturer"
      targetAudience="Hotels, Senior living, University housing"
      sizeAudience="80,000 Commercial Properties"
      stats={[
        {number: '4-6%', text: 'Attrition before channel 80/20'},
        {number: '10%', text: 'Of their direct sales are through MMC sales process'},
        {number: '2nd', text: 'Highest annual sales volume amongst national distribution and legacy resellers'}
      ]}
      challenge="A dominant brand and manufacturer with the highest share of market needed to reinvent
      it's sales strategy from a program selling many units at once to new construction into a replacement market strategy."
      solution="Through the combination of digital marketing, lead management, and inside sales with predictive analytics MMC
      identifies location and end of life sales opportunities to build sustainable high-value relationships with all accounts not being
      covered by direct sales team nor resellers including national account locations, buying groups and property owners."
      results="Increase year over year share of market while decreasing clients cost to serve and delivering a better customer experience."
    />
  );
}

export default Hvac;
