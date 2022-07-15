import React, { useState } from 'react';
import Card, { CardActions, CardBody, CardHeader } from '../../../components/bootstrap/Card';
import Button from '../../../components/bootstrap/Button';
import CommonEmployeesList from './CommonEmployeesList';
import CommonServicesList from './CommonServicesList';
import CommonPackagesList from './CommonPackagesList';

const CommonDashboardBookingLists = () => {
	// BEGIN :: List Tab
	const LIST_TAB = {
		EMPLOYEES: 'Employees',
		SERVICE: 'Services',
		PACKAGE: 'Packages',
	};
	const [activeListTab, setActiveListTab] = useState(LIST_TAB.EMPLOYEES);
	const handleActiveListTab = (tabName) => {
		setActiveListTab(tabName);
	};
	const getStatusActiveListTabColor = (tabName) => {
		if (activeListTab === tabName) return 'success';
		return 'light';
	};
	// END :: List Tab

	return (
		<Card>
			<CardHeader>
				<CardActions>
					<div className='bg-light p-2 rounded-3'>
						{Object.keys(LIST_TAB).map((key) => (
							<Button
								key={key}
								color={getStatusActiveListTabColor(LIST_TAB[key])}
								onClick={() => handleActiveListTab(LIST_TAB[key])}>
								{LIST_TAB[key]}
							</Button>
						))}
					</div>
				</CardActions>
			</CardHeader>
			<CardBody className='table-responsive'>
				{activeListTab === LIST_TAB.EMPLOYEES && <CommonEmployeesList />}
				{activeListTab === LIST_TAB.SERVICE && <CommonServicesList />}
				{activeListTab === LIST_TAB.PACKAGE && <CommonPackagesList />}
			</CardBody>
		</Card>
	);
};

export default CommonDashboardBookingLists;
