import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const CarouselCaption = (props) => {
	const { captionHeader, captionText, className } = props;
	return (
		<div className={classNames(className, 'carousel-caption', 'd-none', 'd-md-block')}>
			<h5>{captionHeader}</h5>
			<p>{captionText}</p>
		</div>
	);
};
CarouselCaption.propTypes = {
	captionHeader: PropTypes.node,
	captionText: PropTypes.node.isRequired,
	className: PropTypes.string,
};
CarouselCaption.defaultProps = {
	captionHeader: null,
	className: null,
};

export default CarouselCaption;
