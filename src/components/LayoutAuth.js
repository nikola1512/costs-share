import React from 'react';
import PropTypes from 'prop-types';

const LayoutAuth = ({ heading, children }) => {
  return (
    <div className="l-auth">
      <div className="l-auth__heading">
        {heading}
      </div>
      <div className="l-auth__ctn">
        {children}
      </div>
    </div>
  );
};

LayoutAuth.propTypes = {
  heading: PropTypes.object,
  children: PropTypes.object
};

export default LayoutAuth;
