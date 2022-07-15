import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Icon from '../../components/icon/Icon';
import Logo from '../../components/Logo';
import { dmsMenu } from '../../menu';

const Brand = ({ asideStatus, setAsideStatus }) => {
	return (
		<div className='brand'>
			<div className='brand-logo w-100 d-flex justify-content-center'>
				<h1 className='brand-title'>
					<Link to={`../${dmsMenu.studentList.path}`} aria-label='Logo' alt='Facit'>
						<Logo height='60px' width='auto' />
					</Link>
				</h1>
			</div>
			<button
				type='button'
				className='btn brand-aside-toggle'
				aria-label='Toggle Aside'
				onClick={() => setAsideStatus(!asideStatus)}>
				<Icon icon='FirstPage' className='brand-aside-toggle-close' />
				<Icon icon='LastPage' className='brand-aside-toggle-open' />
			</button>
		</div>
	);
};
Brand.propTypes = {
	asideStatus: PropTypes.bool.isRequired,
	setAsideStatus: PropTypes.func.isRequired,
};

export default Brand;
