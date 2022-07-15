import React from 'react';
import Card, { CardBody } from '../../components/bootstrap/Card';
import Bank1 from '../../assets/logos/logo1.png';
import TransferAction from '../../components/TransferAction';

export default {
	title: `Sample/TransferAction`,
	component: TransferAction,
	subcomponent: { Card, CardBody },
	argTypes: {},
};

const Template = ({ ...args }) => (
	<div className='row'>
		<div className='col-lg-4 col-md-6 mx-md-auto'>
			{/* eslint-disable-next-line react/jsx-props-no-spreading */}
			<TransferAction {...args} />
		</div>
	</div>
);
export const Default = Template.bind({});
Default.args = {
	currency: '$',
	amount: 200,
	status: 'Processing',
	img: Bank1,
	imgWidth: 75,
};
