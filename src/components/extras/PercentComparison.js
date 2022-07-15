import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../icon/Icon';
import { percent } from '../../helpers/helpers';

const PercentComparison = ({ valueOne, valueTwo }) => {
	const _value = percent(valueOne, valueTwo);
	function getIcon() {
		if (_value > 0) {
			return { icon: 'TrendingUp', color: 'success' };
		}
		if (_value < 0) {
			return { icon: 'TrendingDown', color: 'danger' };
		}
		return { icon: 'TrendingFlat', color: 'info' };
	}
	return (
		<span className={`text-${getIcon().color} fs-5 fw-bold ms-3 d-inline`}>
			{`${_value}%`}
			<Icon icon={getIcon().icon} />
		</span>
	);
};
PercentComparison.propTypes = {
	valueOne: PropTypes.number.isRequired,
	valueTwo: PropTypes.number.isRequired,
};

export default PercentComparison;
