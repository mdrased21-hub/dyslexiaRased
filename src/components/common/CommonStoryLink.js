import React from 'react';
import PropTypes from 'prop-types';

const CommonStoryLink = ({ to, children, ...props }) => {
	return (
		<a
			href={`${process.env.REACT_APP_STORYBOOK_URL}${to}`}
			target='_blank'
			rel='noreferrer'
			// eslint-disable-next-line react/jsx-props-no-spreading
			{...props}>
			{children}
		</a>
	);
};
CommonStoryLink.propTypes = {
	children: PropTypes.node.isRequired,
	to: PropTypes.string.isRequired,
};

export default CommonStoryLink;
