import React from 'react';
import Icon from '../../components/icon/Icon';
import useDarkMode from '../../hooks/useDarkMode';

// eslint-disable-next-line react/prop-types
const CommonFilterTag = ({ title, text }) => {
	const { darkModeStatus } = useDarkMode();

	return (
		<small
			className={`bg-l${
				darkModeStatus ? 'o25' : '10'
			}-info text-info px-3 py-2 rounded-pill`}>
			<strong>{title}:</strong> {text}
			<Icon icon='ErrorCircle' color='danger' size='lg' className='ms-2 cursor-pointer' />
		</small>
	);
};

export default CommonFilterTag;
