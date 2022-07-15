import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Scrollspy from 'react-scrollspy';
import Portal from '../../layout/Portal/Portal';

const ScrollspyNav = ({ tag, items, children, offset, setActiveId, ...props }) => {
	const [activeElement, setActiveElement] = useState(null);
	useEffect(() => {
		if (setActiveId) setActiveId(activeElement);
		return () => {};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [activeElement]);

	const _inner = (
		<Scrollspy
			items={items}
			offset={offset}
			currentClassName='active'
			componentTag={tag}
			onUpdate={(e) => {
				setActiveElement(e?.attributes.id.value);
			}}
			// eslint-disable-next-line react/jsx-props-no-spreading
			{...props}>
			{children}
		</Scrollspy>
	);

	if (children) {
		return _inner;
	}
	return <Portal>{_inner}</Portal>;
};
ScrollspyNav.propTypes = {
	items: PropTypes.arrayOf(PropTypes.string).isRequired,
	children: PropTypes.node,
	offset: PropTypes.number,
	tag: PropTypes.string,
	setActiveId: PropTypes.func,
};
ScrollspyNav.defaultProps = {
	children: null,
	offset: null,
	tag: 'span',
	setActiveId: null,
};

export default ScrollspyNav;
