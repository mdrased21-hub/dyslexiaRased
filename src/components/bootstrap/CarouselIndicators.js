import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const CarouselIndicators = (props) => {
	const { id, items, activeIndex, onClickHandler, className } = props;

	return (
		<div className={classNames(className, 'carousel-indicators')}>
			{items.map((item, index) => {
				const indicatorClasses = classNames({ active: activeIndex === index });
				return (
					<button
						// eslint-disable-next-line react/no-array-index-key
						key={index}
						type='button'
						data-bs-target={id || 'carousel'}
						data-bs-slide-to={index}
						className={indicatorClasses}
						aria-current={activeIndex === index ? 'true' : null}
						aria-label={item.altText}
						onClick={(e) => {
							e.preventDefault();
							onClickHandler(index);
						}}
					/>
				);
			})}
		</div>
	);
};
CarouselIndicators.propTypes = {
	id: PropTypes.string,
	items: PropTypes.arrayOf(
		PropTypes.shape({
			src: PropTypes.string,
			altText: PropTypes.string,
			captionHeader: PropTypes.string,
			captionText: PropTypes.string,
		}),
	).isRequired,
	activeIndex: PropTypes.number.isRequired,
	onClickHandler: PropTypes.func.isRequired,
	className: PropTypes.string,
};
CarouselIndicators.defaultProps = {
	id: null,
	className: null,
};

export default CarouselIndicators;
