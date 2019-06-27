import React from 'react';
import Template from '../template';

const Wound = () => {
  return (
    <Template
      tagline="Virtual In-Servicing"
      headline="Customer Satisfaction at a Lower Cost"
      companyType="Advanced Wound Care"
      targetAudience="Hospitals, Skilled Nursing Facilities"
      sizeAudience="6,000 Healthcare Professionals"
      stats={[
        { number: '63%', text: 'Growth in sales after the in-service' },
        { number: '97%', text: 'Customer Satisfaction' }
      ]}
      challenge="Our advanced wound care client needed to provide in-servicing to its customers, but deploying a clinical team for on-site training was not cost-effective. Our client needed a solution that allowed them to maintain a high level of customer satisfaction, reach their customers when they were available, and help them reduce in-servicing costs."
      solution="We used virtual, web-based in-services to reach the client’s customers during the first, second, and third shifts. Over a 2-year period, our team of trained product specialists conducted over 10,000 virtual in-services for 6,000 healthcare professionals at approximately 4,700 healthcare facilities. The average in-service length was 45 minutes."
      results="Our client saw a 63% increase in sales the first month after the in-service compared to
      the month before.The virtual in - services have also received a 97 % customer satisfaction
  rate, with customers saying the experience was ‘interactive’, ‘easy to understand’,
  and ‘engaging."
    />
  );
}

export default Wound;
