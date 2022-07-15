import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Validation = ({ isTouched, invalidFeedback, validFeedback, isTooltip }) => {
	const ref = useRef(null);

	useEffect(() => {
		if (isTooltip) {
			for (let i = 0; i < ref?.current?.parentNode.classList.length; i += 1) {
				if (['input-group'].includes(ref?.current?.parentNode.classList[i])) {
					ref?.current?.parentNode.parentNode.classList.add('position-relative');
				} else {
					ref?.current?.parentNode.classList.add('position-relative');
				}
			}
		}
	});

	if (isTouched && invalidFeedback) {
		return (
			<div
				ref={ref}
				className={classNames({
					'invalid-feedback': !isTooltip,
					'invalid-tooltip': isTooltip,
				})}>
				{invalidFeedback}
			</div>
		);
	}
	return (
		!invalidFeedback &&
		validFeedback && (
			<div
				ref={ref}
				className={classNames({
					'valid-feedback': !isTooltip,
					'valid-tooltip': isTooltip,
				})}>
				{validFeedback}
			</div>
		)
	);
};
Validation.propTypes = {
	isTouched: PropTypes.bool,
	invalidFeedback: PropTypes.string,
	validFeedback: PropTypes.string,
	isTooltip: PropTypes.bool,
};
Validation.defaultProps = {
	isTouched: false,
	invalidFeedback: null,
	validFeedback: null,
	isTooltip: false,
};

export default Validation;
