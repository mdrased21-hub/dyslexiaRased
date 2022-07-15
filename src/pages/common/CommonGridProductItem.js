import React from 'react';
import { useSelector } from 'react-redux';
import Card, {
	CardActions,
	CardFooter,
	CardHeader,
	CardLabel,
	CardSubTitle,
	CardTitle,
} from '../../components/bootstrap/Card';
import Button from '../../components/bootstrap/Button';
import Dropdown, {
	DropdownItem,
	DropdownMenu,
	DropdownToggle,
} from '../../components/bootstrap/Dropdown';
import { dmsMenu2 } from '../../menu';
import useDarkMode from '../../hooks/useDarkMode';

const CommonGridProductItem = ({
	// eslint-disable-next-line react/prop-types
	id,
	// eslint-disable-next-line react/prop-types
	name,
	// eslint-disable-next-line react/prop-types
	category,
	// eslint-disable-next-line react/prop-types
	editAction,
	// eslint-disable-next-line react/prop-types
	deleteAction,
}) => {
	const { themeStatus, darkModeStatus } = useDarkMode();

	const user = useSelector((state) => state.user);

	return (
		<Card>
			<CardHeader>
				<CardLabel>
					<CardTitle>{name}</CardTitle>
					<CardSubTitle>{category}</CardSubTitle>
				</CardLabel>
				{user.data.role === 'admin' && (
					<CardActions>
						<Dropdown>
							<DropdownToggle hasIcon={false}>
								<Button icon='MoreHoriz' color={themeStatus} shadow='default' />
							</DropdownToggle>
							<DropdownMenu isAlignmentEnd>
								<DropdownItem>
									<Button icon='Edit' onClick={() => editAction()}>
										Edit
									</Button>
								</DropdownItem>
								<DropdownItem isDivider />
								<DropdownItem>
									<Button icon='Delete' onClick={() => deleteAction()}>
										Delete
									</Button>
								</DropdownItem>
							</DropdownMenu>
						</Dropdown>
					</CardActions>
				)}
			</CardHeader>
			<CardFooter className='shadow-3d-container'>
				{user.data.role === 'student' && (
					<Button
						color='dark'
						className={`w-100 mb-4 shadow-3d-up-hover shadow-3d-${
							darkModeStatus ? 'light' : 'dark'
						}`}
						size='lg'
						tag='a'
						to={`../${dmsMenu2.quiz.path}/${id}`}>
						Take Quiz
					</Button>
				)}
			</CardFooter>
		</Card>
	);
};

export default CommonGridProductItem;
