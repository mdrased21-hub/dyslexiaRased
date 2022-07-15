import React, { useEffect, useState } from 'react';
import Collapse from '../../../../components/bootstrap/Collapse';
import Button from '../../../../components/bootstrap/Button';
import Card, {
	CardBody,
	CardHeader,
	CardLabel,
	CardSubTitle,
	CardTitle,
} from '../../../../components/bootstrap/Card';

export default {
	title: `Components/<Collapse>`,
	component: Collapse,
	argTypes: {
		isOpen: { control: 'boolean' },
		tag: { control: 'text' },
		isChildClone: { control: 'boolean' },
		appear: { table: { disable: true } },
		enter: { table: { disable: true } },
		exit: { table: { disable: true } },
		timeout: { table: { disable: true } },
		isNavbar: { table: { disable: true } },
		children: { control: false },
	},
};

const Template = ({ ...args }) => {
	const [state, setState] = useState(false);
	useEffect(() => {
		setState(args.isOpen);
		return () => {};
	}, [args.isOpen]);

	return (
		<>
			<Button color='info' isLight onClick={() => setState(!state)}>
				Toggle Element
			</Button>
			{/* eslint-disable-next-line react/jsx-props-no-spreading */}
			<Collapse {...args} isOpen={state}>
				<Card>
					<CardHeader>
						<CardLabel icon='Info' iconColor='info'>
							<CardTitle>First Element</CardTitle>
							<CardSubTitle>Example</CardSubTitle>
						</CardLabel>
					</CardHeader>
					<CardBody>
						Some placeholder content for the first collapse component of this
						multi-collapse example. This panel is hidden by default but revealed when
						the user activates the relevant trigger.
					</CardBody>
				</Card>
			</Collapse>
		</>
	);
};

export const Default = Template.bind({});
Default.args = {
	isOpen: false,
	tag: 'div',
	isChildClone: false,
};
