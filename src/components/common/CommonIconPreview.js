import React from 'react';
import PropTypes from 'prop-types';
import { useClipboard } from 'use-clipboard-copy';
import Button from '../bootstrap/Button';
import showNotification from '../extras/showNotification';
import Icon from '../icon/Icon';

const CommonIconPreview = ({ icon, forceFamily }) => {
	const clipboard = useClipboard();
	return (
		<div className='col-xl-3 col-lg-4 col-md-6 col-12'>
			<Button
				className='w-100 py-5 px-4'
				color='light'
				isLight
				shadow='default'
				hoverShadow='none'
				onClick={() => {
					clipboard.copy(icon);
					showNotification(
						'Copy to Clipboard',
						<div className='row d-flex align-items-center'>
							<div className='col-auto'>
								<Icon icon={icon} className='h1' />
							</div>
							<div className='col-auto h5'>{icon}</div>
						</div>,
					);
				}}>
				<div className='row d-flex align-items-center'>
					<div className='col-auto'>
						<Icon
							icon={icon}
							forceFamily={forceFamily}
							style={{
								fontSize: 'calc(1vh + 1vw)',
							}}
						/>
					</div>
					<div className='col-auto'>{icon}</div>
				</div>
			</Button>
		</div>
	);
};
CommonIconPreview.propTypes = {
	icon: PropTypes.string.isRequired,
	forceFamily: PropTypes.oneOf([null, 'custom', 'material', 'bootstrap']),
};
CommonIconPreview.defaultProps = {
	forceFamily: null,
};

export default CommonIconPreview;
