import moment from 'moment';
import USERS from './userDummyData';
import EVENT_STATUS from './enumEventStatus';
import SERVICES from './serviceDummyData';

const data = [
	{
		id: 1,
		status: EVENT_STATUS.APPROVED,
		date:
			moment().format('YYYY') + moment().format('MM') + moment().add(1, 'days').format('DD'),
		time: 1030,
		customer: { name: 'Alison Berry', email: 'alisonberry@site.com' },
		assigned: USERS.GRACE,
		service: SERVICES.ICE_SKATING,
		duration: '45min',
		payment: 15,
	},
	{
		id: 2,
		status: EVENT_STATUS.APPROVED,
		date:
			moment().format('YYYY') + moment().format('MM') + moment().add(1, 'days').format('DD'),
		time: 1200,
		customer: { name: 'Diane Bower', email: 'dianebower@site.com' },
		assigned: USERS.JANE,
		service: SERVICES.YOGA,
		duration: '45min',
		payment: 40,
	},
	{
		id: 3,
		status: EVENT_STATUS.CANCELED,
		date:
			moment().format('YYYY') + moment().format('MM') + moment().add(1, 'days').format('DD'),
		time: 1230,
		customer: { name: 'Claire Campbell', email: 'clairecampbell@site.com' },
		assigned: USERS.ELLA,
		service: SERVICES.TENNIS,
		duration: '45min',
		payment: 40,
	},
	{
		id: 4,
		status: EVENT_STATUS.REJECTED,
		date:
			moment().format('YYYY') + moment().format('MM') + moment().add(1, 'days').format('DD'),
		time: 1500,
		customer: { name: 'Sue Quinn', email: 'suequinn@site.com' },
		assigned: USERS.RYAN,
		service: SERVICES.HANDBALL,
		duration: '45min',
		payment: 120,
	},
	{
		id: 5,
		status: EVENT_STATUS.APPROVED,
		date:
			moment().format('YYYY') + moment().format('MM') + moment().add(2, 'days').format('DD'),
		time: '0930',
		customer: { name: 'Gabrielle Powell', email: 'gabriellepowell@site.com' },
		assigned: USERS.ELLA,
		service: SERVICES.SNOWBOARDING,
		duration: '1h',
		payment: 45,
	},
	{
		id: 6,
		status: EVENT_STATUS.REJECTED,
		date:
			moment().format('YYYY') + moment().format('MM') + moment().add(3, 'days').format('DD'),
		time: 1530,
		customer: { name: 'Emily Taylor', email: 'emilytaylor@site.com' },
		assigned: USERS.JANE,
		service: SERVICES.HANDBALL,
		duration: '45min',
		payment: null,
	},
	{
		id: 7,
		status: EVENT_STATUS.PENDING,
		date:
			moment().format('YYYY') + moment().format('MM') + moment().add(3, 'days').format('DD'),
		time: 1130,
		customer: { name: 'Carolyn Morgan', email: 'carolynmorgan@site.com' },
		assigned: USERS.JANE,
		service: SERVICES.CRICKET,
		duration: '30min',
		payment: null,
	},
	{
		id: 8,
		status: EVENT_STATUS.PENDING,
		date:
			moment().format('YYYY') + moment().format('MM') + moment().add(4, 'days').format('DD'),
		time: 1300,
		customer: { name: 'Penelope North', email: 'penelopenorth@site.com' },
		assigned: USERS.RYAN,
		service: SERVICES.HIKING,
		duration: '1h',
		payment: null,
	},
	{
		id: 9,
		status: EVENT_STATUS.PENDING,
		date:
			moment().format('YYYY') + moment().format('MM') + moment().add(4, 'days').format('DD'),
		time: 1530,
		customer: { name: 'Alexander Kelly', email: 'alexanderkelly@site.com' },
		assigned: USERS.ELLA,
		service: SERVICES.YOGA,
		duration: '45min',
		payment: null,
	},
	{
		id: 10,
		status: EVENT_STATUS.PENDING,
		date:
			moment().format('YYYY') + moment().format('MM') + moment().add(4, 'days').format('DD'),
		time: 1600,
		customer: { name: 'Cameron Hodges', email: 'cameronhodges@site.com' },
		assigned: USERS.GRACE,
		service: SERVICES.KITE_SURFING,
		duration: '30min',
		payment: null,
	},
];

export default data;
