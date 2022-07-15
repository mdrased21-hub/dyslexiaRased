import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Avatar, { AvatarGroup } from '../Avatar';
import USERS from '../../common/data/userDummyData';

const CommonAvatarTeam = ({ children, isAlignmentEnd }) => {
	return (
		<>
			{children && !isAlignmentEnd && <span className='me-3'>{children}</span>}
			<AvatarGroup>
				<Avatar
					src={USERS.GRACE.src}
					srcSet={USERS.GRACE.srcSet}
					color={USERS.GRACE.color}
					userName={`${USERS.GRACE.name} ${USERS.GRACE.surname}`}
				/>
				<Avatar
					src={USERS.JANE.src}
					srcSet={USERS.JANE.srcSet}
					color={USERS.JANE.color}
					userName={`${USERS.JANE.name} ${USERS.JANE.surname}`}
				/>
				<Avatar
					src={USERS.RYAN.src}
					srcSet={USERS.RYAN.srcSet}
					color={USERS.RYAN.color}
					userName={`${USERS.RYAN.name} ${USERS.RYAN.surname}`}
				/>
				<Avatar
					src={USERS.ELLA.src}
					srcSet={USERS.ELLA.srcSet}
					color={USERS.ELLA.color}
					userName={`${USERS.ELLA.name} ${USERS.ELLA.surname}`}
				/>
				<Avatar
					src={USERS.CHLOE.src}
					srcSet={USERS.CHLOE.srcSet}
					color={USERS.CHLOE.color}
					userName={`${USERS.CHLOE.name} ${USERS.CHLOE.surname}`}
				/>
				<Avatar
					src={USERS.SAM.src}
					srcSet={USERS.SAM.srcSet}
					color={USERS.SAM.color}
					userName={`${USERS.SAM.name} ${USERS.SAM.surname}`}
				/>
			</AvatarGroup>
			{children && isAlignmentEnd && <span>{children}</span>}
		</>
	);
};
CommonAvatarTeam.propTypes = {
	children: PropTypes.node,
	isAlignmentEnd: PropTypes.bool,
};
CommonAvatarTeam.defaultProps = {
	children: null,
	isAlignmentEnd: false,
};

export default memo(CommonAvatarTeam);
