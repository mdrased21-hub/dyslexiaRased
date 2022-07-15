import React from 'react';
import PropTypes from 'prop-types';

import logo from '../assets/logos/sktd3.png';

const Logo = ({ width, height }) => {
	return <img width={width} height={height} src={logo} alt='logo' />;
};
Logo.propTypes = {
	width: PropTypes.string,
	height: PropTypes.string,
};
Logo.defaultProps = {
	width: '150px',
	height: '150px',
};

export default Logo;
