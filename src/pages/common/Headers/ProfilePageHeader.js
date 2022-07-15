import React from 'react';
import { useSelector } from 'react-redux';
import Header, { HeaderLeft } from '../../../layout/Header/Header';
import Avatar from '../../../components/Avatar';
import CommonHeaderRight from './CommonHeaderRight';
import img from '../../../assets/img/wanna/wanna2.png';

const ProfilePageHeader = () => {
	const user = useSelector((state) => state.user);

	return (
		<Header>
			<HeaderLeft>
				<div className='col d-flex align-items-center'>
					<div className='me-3'>
						{user.data.imageUrl !== '' ? (
							<Avatar src={user.data.imageUrl} size={48} color='primary' />
						) : (
							<Avatar src={img} size={48} color='primary' />
						)}
					</div>
					<div>
						<div className='fw-bold fs-6 mb-0'>{user.data.name}</div>
						<div className='text-muted'>
							<small>{user.data.subName}</small>
						</div>
					</div>
				</div>
			</HeaderLeft>
			<CommonHeaderRight />
		</Header>
	);
};

export default ProfilePageHeader;
