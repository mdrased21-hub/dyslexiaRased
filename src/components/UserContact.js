import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Card, { CardBody } from './bootstrap/Card';
import Button from './bootstrap/Button';
import Avatar from './Avatar';

const UserContact = ({ name, position, src, srcSet, color, mail, phone, onChat, ...props }) => {
	return (
		// eslint-disable-next-line react/jsx-props-no-spreading
		<Card {...props} className={classNames(props.className)} stretch>
			<CardBody className='d-flex align-items-center'>
				<div className='flex-grow-1'>
					<div className='fs-5 fw-bold'>{name}</div>
					{position && <div className='text-muted'>{position}</div>}
					<div className='row mt-2 g-3'>
						{mail && (
							<div className='col-auto'>
								<Button
									color='info'
									icon='Email'
									isLight
									aria-label='Mail'
									tag='a'
									href={`mailto:${mail}`}
								/>
							</div>
						)}
						{phone && (
							<div className='col-auto'>
								<Button
									color='info'
									icon='PhoneIphone'
									isLight
									aria-label='Phone'
									tag='a'
									href={`tel:${phone}`}
								/>
							</div>
						)}
						{onChat && (
							<div className='col-auto'>
								<Button
									color='info'
									icon='Sms'
									isLight
									aria-label='Chat'
									onClick={onChat}
								/>
							</div>
						)}
					</div>
				</div>
				{(src || srcSet) && (
					<div className='flex-shrink-0'>
						<Avatar
							src={src || null}
							srcSet={srcSet || null}
							color={color}
							className='rounded-circle'
							shadow='sm'
							size={110}
						/>
					</div>
				)}
			</CardBody>
		</Card>
	);
};
UserContact.propTypes = {
	className: PropTypes.string,
	name: PropTypes.string.isRequired,
	position: PropTypes.string,
	src: PropTypes.string,
	srcSet: PropTypes.string,
	color: PropTypes.string,
	mail: PropTypes.string,
	phone: PropTypes.string,
	onChat: PropTypes.func,
};
UserContact.defaultProps = {
	className: null,
	position: null,
	src: null,
	srcSet: null,
	color: null,
	mail: null,
	phone: null,
	onChat: null,
};

export default UserContact;
