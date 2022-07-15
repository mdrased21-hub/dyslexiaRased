import PropTypes from 'prop-types';
import { Views } from 'react-big-calendar';
import moment from 'moment';
import React from 'react';
import Button, { ButtonGroup } from '../bootstrap/Button';
import Dropdown, { DropdownItem, DropdownMenu, DropdownToggle } from '../bootstrap/Dropdown';

export const getUnitType = (viewMode) => {
	let unitType = null;
	switch (viewMode) {
		case Views.WEEK:
		case Views.WORK_WEEK:
			unitType = Views.WEEK;
			break;
		case Views.MONTH:
		case Views.AGENDA:
			unitType = Views.MONTH;
			break;
		default:
			unitType = Views.DAY;
	}
	return unitType;
};

export const getLabel = (date, viewMode) => {
	if (viewMode === Views.MONTH) return moment(date).format('MMMM YYYY');
	if (viewMode === Views.WEEK)
		return `${moment(date).startOf('week').format('MMM D')} - ${moment(date)
			.endOf('week')
			.format('MMM D')}`;
	if (viewMode === Views.WORK_WEEK)
		return `${moment(date).startOf('week').add(1, 'day').format('MMM D')} - ${moment(date)
			.endOf('week')
			.add(-1, 'day')
			.format('MMM D')}`;
	if (viewMode === Views.AGENDA)
		return `${moment(date).format('L')} - ${moment(date).add(1, 'month').format('L')}`;
	return moment(date).format('dddd, MMM D');
};

export const getTodayButtonLabel = (viewMode) => {
	if (viewMode === Views.MONTH || viewMode === Views.AGENDA) return 'This month';
	if (viewMode === Views.WEEK || viewMode === Views.WORK_WEEK) return 'This week';
	return 'Today';
};

export const getViews = () => {
	return Object.keys(Views).map((k) => Views[k]);
};

export const CalendarTodayButton = ({ setDate, date, unitType, viewMode }) => {
	return (
		<ButtonGroup>
			<Button
				color='info'
				isLight
				onClick={() => setDate(moment(date).add(-1, unitType)._d)}
				icon='ChevronLeft'
				aria-label='Prev'
			/>
			<Button color='info' isLight onClick={() => setDate(moment()._d)}>
				{getTodayButtonLabel(viewMode)}
			</Button>
			<Button
				color='info'
				isLight
				onClick={() => setDate(moment(date).add(1, unitType)._d)}
				icon='ChevronRight'
				aria-label='Next'
			/>
		</ButtonGroup>
	);
};
CalendarTodayButton.propTypes = {
	setDate: PropTypes.func.isRequired,
	// eslint-disable-next-line react/forbid-prop-types
	date: PropTypes.object.isRequired,
	unitType: PropTypes.string.isRequired,
	viewMode: PropTypes.string.isRequired,
};

export const CalendarViewModeButtons = ({ viewMode, setViewMode }) => {
	return (
		<Dropdown>
			<DropdownToggle>
				<Button
					color='primary'
					isLight
					icon={
						(viewMode === Views.MONTH && 'calendar_view_month') ||
						(viewMode === Views.WEEK && 'calendar_view_week') ||
						(viewMode === Views.WORK_WEEK && 'view_week') ||
						(viewMode === Views.DAY && 'calendar_view_day') ||
						'view_agenda'
					}>
					{(viewMode === Views.MONTH && 'Month') ||
						(viewMode === Views.WEEK && 'Week') ||
						(viewMode === Views.WORK_WEEK && 'Work Week') ||
						(viewMode === Views.DAY && 'Day') ||
						'Agenda'}
				</Button>
			</DropdownToggle>
			<DropdownMenu isAlignmentEnd>
				<DropdownItem>
					<Button
						color='link'
						icon='calendar_view_month'
						isActive={viewMode === Views.MONTH}
						onClick={() => setViewMode(Views.MONTH)}>
						Month
					</Button>
				</DropdownItem>
				<DropdownItem>
					<Button
						color='link'
						icon='calendar_view_week'
						isActive={viewMode === Views.WEEK}
						onClick={() => setViewMode(Views.WEEK)}>
						Week
					</Button>
				</DropdownItem>
				<DropdownItem>
					<Button
						color='link'
						icon='view_week'
						isActive={viewMode === Views.WORK_WEEK}
						onClick={() => setViewMode(Views.WORK_WEEK)}>
						Work Week
					</Button>
				</DropdownItem>
				<DropdownItem>
					<Button
						color='link'
						icon='calendar_view_day'
						isActive={viewMode === Views.DAY}
						onClick={() => setViewMode(Views.DAY)}>
						Day
					</Button>
				</DropdownItem>
				<DropdownItem>
					<Button
						color='link'
						icon='view_agenda'
						isActive={viewMode === Views.AGENDA}
						onClick={() => setViewMode(Views.AGENDA)}>
						Agenda
					</Button>
				</DropdownItem>
			</DropdownMenu>
		</Dropdown>
	);
};
CalendarViewModeButtons.propTypes = {
	viewMode: PropTypes.string.isRequired,
	setViewMode: PropTypes.func.isRequired,
};
