import React from 'react';
import PropTypes from 'prop-types';
import Button from '../bootstrap/Button';

const CommonStoryBtn = ({ to, ...props }) => {
	return (
		<Button
			color='storybook'
			icon='CustomStorybook'
			tag='a'
			target='_blank'
			isLight
			href={`${process.env.REACT_APP_STORYBOOK_URL}${to}`}
			// eslint-disable-next-line react/jsx-props-no-spreading
			{...props}>
			Storybook
		</Button>
	);
};
CommonStoryBtn.propTypes = {
	to: PropTypes.string.isRequired,
};

export default CommonStoryBtn;
