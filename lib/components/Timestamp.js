import React from "react";
/*eslint-disable*/
import PropTypes from "prop-types";
import storeProvider from "./storeProvider";

const Timestamp = props => {
  return <div>{props.timestamp.toString()}</div>;
};
const extraProps = store => {
  return { timestamp: store.getState().timestamp };
};

Timestamp.propTypes = {
  // timestamp: PropTypes.date.isRequired
};

export default storeProvider(extraProps)(Timestamp);
