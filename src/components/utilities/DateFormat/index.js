import React, { Fragment } from "react";

import * as moment from "moment";

const formatDate = ({ children, format = "LL" }) => {
  return moment(children).format(format);
};

export const DateFormat = props => <Fragment>{formatDate(props)}</Fragment>;
