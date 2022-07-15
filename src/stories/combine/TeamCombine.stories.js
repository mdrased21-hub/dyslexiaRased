import React from 'react';
// eslint-disable-next-line no-unused-vars
import USERS from '../../common/data/userDummyData';
import Card, {
	CardActions,
	CardBody,
	CardHeader,
	CardLabel,
	CardSubTitle,
	CardTitle,
} from '../../components/bootstrap/Card';
import Button from '../../components/bootstrap/Button';
import Avatar, { AvatarGroup } from '../../components/Avatar';

export default {
	title: `Sample/Team (Combine)`,
	component: null,
	subcomponent: {},
	argTypes: {
		onClick: { action: 'clicked' },
	},
};

// eslint-disable-next-line react/prop-types
const Template = ({ className, title, text, team, onClick }) => (
	<div className='row'>
		<div className='col-lg-4 col-md-6 mx-md-auto shadow-3d-container'>
			<Card className={className}>
				<CardHeader className='bg-transparent'>
					<CardLabel>
						<CardTitle tag='h4' className='h5'>
							{title}
						</CardTitle>
						<CardSubTitle tag='h5' className='h6 text-muted'>
							{text}
						</CardSubTitle>
					</CardLabel>
					<CardActions>
						<Button icon='ArrowForwardIos' aria-label='Read More' onClick={onClick} />
					</CardActions>
				</CardHeader>
				<CardBody>
					<AvatarGroup>
						{Object.keys(team).map((u) => (
							<Avatar
								// eslint-disable-next-line react/prop-types
								key={team[u].username}
								// eslint-disable-next-line react/prop-types
								srcSet={team[u].srcSet}
								// eslint-disable-next-line react/prop-types
								src={team[u].src}
								// eslint-disable-next-line react/prop-types
								userName={`${team[u].name} ${team[u].surname}`}
							/>
						))}
					</AvatarGroup>
				</CardBody>
			</Card>
		</div>
	</div>
);
export const Default = Template.bind({});
Default.args = {
	className: 'shadow-3d-primary',
	title: 'Marketing Team',
	text: "There is a meeting at 12 o'clock.",
	team: USERS,
};
