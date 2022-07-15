import React from 'react';
import { useMeasure } from 'react-use';

const Footer = () => {
	const [ref, { height }] = useMeasure();

	const root = document.documentElement;
	root.style.setProperty('--footer-height', `${height}px`);

	return (
		<footer ref={ref} className='footer'>
			<div className='container-fluid'>
				<div className='row'>
					<div className='col'>
						<span className='fw-light'>Copyright © 2022</span>
					</div>
					<div className='col-auto'>
						<small className='fw-bold'>Dyslexia Monitoring System</small>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
