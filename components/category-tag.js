import React from 'react';

const CategoryTag = (props) => {
  const { category } = props;
  return (
    <p className="text-uppercase font-weight-bold category mt-4">{category}</p>
  );
};

export default CategoryTag;
