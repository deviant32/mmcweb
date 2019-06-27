import React from 'react';
import Template from '../template';

const BigBoxRetailer = () => {
  return (
    <Template
      tagline="Channel 80/20"
      headline="Retail Sales Growth from Actionable Data"
      companyType="Big Box Retailer"
      targetAudience="B2B Customers"
      sizeAudience="60,000 B2B Customers"
      stats={[
        { number: '-6%', text: 'Attrition before channel 80/20' },
        { number: '155%', text: 'Increase in marketability of retailer database' },
        { number: '12%', text: 'More sales in targets vs controls' }
      ]}

      challenge="A big box retailer with unmanaged accounts had limited marketing data to engage and optimize their sales. This retailer needed a way to boost its sales growth while building sustainable relationships with its customer base. MMC was assigned 60,000 targets to provide a scalable model and address these issues."
      solution="MMC’s data team began by combining client data from their legacy ERP, outside third-party data, and MMC internal data. This combination develops a “golden record” in a master channel database. The data and analytics teams then used predictive models to leverage meaningful business patterns to drive success. Our strategists then built a measurable campaign, implementing our marketing tools across multiple channels, focusing on the highest impact at the lowest cost. Customer responses were automatically re-entered into the database, making for continuous improvement. The outliers, such as high potential, high value, and attriting, were then assigned to the MMC Voice Channel, where an inside sales team listens and responds accordingly to each of these customers. MMC and the client worked as one team along the way by recognizing constraints and budgets through quarterly reviews."
      results="MMC increased the marketability of the retailer’s database by 155% and stemmed attrition for the first year by 2.2%. The verified target groups average sales were 12% higher than the control group sales after 1 year."
    />
  );
}

export default BigBoxRetailer;
