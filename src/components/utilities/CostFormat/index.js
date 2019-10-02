import React, { Fragment } from "react";

const formatNumber = cost => {
  if (cost !== null) {
    const formatted = parseFloat(cost / 100).toFixed(2);
    return `$${formatted}`;
  }
};

export const CostFormat = ({ children }) =>
  children !== null ? <Fragment>{formatNumber(children)}</Fragment> : null;
