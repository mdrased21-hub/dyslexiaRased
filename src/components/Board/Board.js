import React from 'react';
import PropTypes from 'prop-types';
import BoardGroup from './BoardGroup';

const Board = ({ data, setData }) => {
	return (
		<div className='board row mx-n4 pb-3 px-3'>
			{data.map((group) => (
				<BoardGroup key={group.id} groups={group} data={data} setData={setData} />
			))}
		</div>
	);
};
Board.propTypes = {
	// eslint-disable-next-line react/forbid-prop-types
	data: PropTypes.array.isRequired,
	setData: PropTypes.func.isRequired,
};

export default Board;
