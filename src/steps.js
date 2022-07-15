import React from 'react';
import { useTour } from '@reactour/tour';
import { createUseStyles } from 'react-jss';
import SusyDarkMode from './assets/img/wanna/susy/susy-dark-mode.png';
import Susy from './assets/img/wanna/susy/susy.png';
import Susy2 from './assets/img/wanna/susy/susy2.png';
import Susy3 from './assets/img/wanna/susy/susy3.png';
import Susy4 from './assets/img/wanna/susy/susy4.png';
import Susy5 from './assets/img/wanna/susy/susy5.png';
import Susy6 from './assets/img/wanna/susy/susy6.png';
import Susy7 from './assets/img/wanna/susy/susy7.png';
import Susy8 from './assets/img/wanna/susy/susy8.png';
import Susy9 from './assets/img/wanna/susy/susy9.png';
import Susy10 from './assets/img/wanna/susy/susy10.png';
import useDarkMode from './hooks/useDarkMode';
import Button from './components/bootstrap/Button';
import { componentsMenu } from './menu';

/**
 * Steps style
 */
export const styles = {
	/**
	 * Overlay style
	 * @param base
	 */
	maskWrapper: (base) => ({ ...base }),
	maskArea: (base) => ({
		...base,
		rx: 'var(--bs-border-radius)',
	}),
	highlightedArea: (base) => ({ ...base }),
	badge: (base) => ({ ...base }),
	popover: (base) => ({
		...base,
		boxShadow: '0 0 3em rgba(0, 0, 0, 0.5)',
		backgroundColor: 'var(--bs-body-bg)',
		color: 'var(--bs-body-color)',
		borderRadius: 'var(--bs-border-radius)',
	}),
};

/**
 * Image Styles
 * @type {(data?: {theme?: DefaultTheme}) => Classes<"image">}
 */
const useStyles = createUseStyles({
	image: {
		maxHeight: '150px',
		objectFit: 'contain',
	},
});

/**
 * Prev & Next buttons
 * @returns {JSX.Element}
 * @constructor
 */
const TourNavigation = () => {
	const { currentStep, setCurrentStep } = useTour();
	return (
		<div className='col-12 mt-3'>
			<div className='row'>
				<div className='col'>
					{!!currentStep && (
						<Button
							icon='ArrowBackIos'
							color='info'
							isLink
							onClick={() => setCurrentStep(currentStep - 1)}>
							Prev
						</Button>
					)}
				</div>
				<div className='col-auto'>
					<Button
						icon='ArrowForwardIos'
						color='info'
						isLight
						onClick={() => setCurrentStep(currentStep + 1)}>
						Next
					</Button>
				</div>
			</div>
		</div>
	);
};

/**
 * Selector
 * @param name
 * @returns {`[data-tour='${string}']`}
 */
const getTargetName = (name) => {
	return `[data-tour='${name}']`;
};

const DarkModeTour = () => {
	const classes = useStyles();
	return (
		<div className='row'>
			<div className='col-md-5'>
				<img src={SusyDarkMode} className={classes.image} width='100%' alt='' />
			</div>
			<div className='col-md-7 d-flex align-items-center'>
				<div>
					<p className='lead'>Dark / Light Mode</p>
					<p>You can switch between dark and light mode.</p>
				</div>
			</div>
			<TourNavigation />
		</div>
	);
};

const LangSwitcherTour = () => {
	const classes = useStyles();
	return (
		<div className='row'>
			<div className='col-md-4'>
				<img src={Susy2} className={classes.image} width='100%' alt='' />
			</div>
			<div className='col-md-8 d-flex align-items-center'>
				<div>
					<p className='lead'>Language Switcher</p>
					<p>
						"react-i18next" is integrated for internationalization. Currently in demo,
						it is prepared only for <code>Aside</code>, you can easily use it in your
						project.
					</p>
				</div>
			</div>
			<TourNavigation />
		</div>
	);
};

const SearchTour = () => {
	const classes = useStyles();
	return (
		<div className='row'>
			<div className='col-md-4'>
				<img src={Susy7} className={classes.image} width='100%' alt='' />
			</div>
			<div className='col-md-8 d-flex align-items-center'>
				<div>
					<p className='lead'>Search</p>
					<p>You can set it to search for what you want with the search bar.</p>
					<ol>
						<li>
							Let's search for the word <b>"Card"</b> as an example.
						</li>
						<li>
							Then click on the word <b>"Card"</b> from the results.
						</li>
					</ol>
				</div>
			</div>
			<TourNavigation />
		</div>
	);
};

const CrmTour = () => {
	const classes = useStyles();
	return (
		<div className='row'>
			<div className='col-md-4'>
				<img src={Susy8} className={classes.image} width='100%' alt='' />
			</div>
			<div className='col-md-8 d-flex align-items-center'>
				<div>
					<p className='lead'>Customizable</p>
					<p>
						With the UI, form and layout components specially prepared for Facit, you
						can easily set the screens suitable for your project.
					</p>
					<p>
						As an example, dashboard screens are made. Click to see the{' '}
						<b>"CRM Dashboard"</b> screen.
					</p>
				</div>
			</div>
		</div>
	);
};

const DateRangeTour = () => {
	const { darkModeStatus, setDarkModeStatus } = useDarkMode();
	const classes = useStyles();

	return (
		<div className='row'>
			<div className='col-md-8 flex-wrap d-flex align-items-center'>
				<div className='row'>
					<div className='col'>
						<p className='lead'>Compatibility</p>
						<p>The designs of the added packages are compatible with "Facit".</p>
						<p>
							After clicking the <b>date button</b> above, you can test its appearance
							with the buttons below.
						</p>
					</div>
				</div>
				<div className='row'>
					<div className='col'>
						<Button
							icon='Sun'
							color='warning'
							isLight={darkModeStatus}
							onClick={() => setDarkModeStatus(false)}>
							Light
						</Button>
					</div>
					<div className='col-auto'>
						<Button
							icon='Moon'
							color='info'
							isLight={!darkModeStatus}
							onClick={() => setDarkModeStatus(true)}>
							Dark
						</Button>
					</div>
				</div>
			</div>
			<div className='col-md-4'>
				<img src={Susy3} className={classes.image} width='100%' alt='' />
			</div>
			<TourNavigation />
		</div>
	);
};

const ListPageTour = () => {
	const classes = useStyles();
	return (
		<div className='row'>
			<div className='col-md-4'>
				<img src={Susy5} className={classes.image} width='100%' alt='' />
			</div>
			<div className='col-md-8 d-flex align-items-center'>
				<div>
					<p className='lead'>Listing Pages</p>
					<p>Listing pages are perhaps one of the most important pages.</p>
					<p>
						Click the <b>"Boxed List"</b> button to see some details.
					</p>
				</div>
			</div>
		</div>
	);
};

const FilterTour = () => {
	const classes = useStyles();
	return (
		<div className='row'>
			<div className='col-md-8 d-flex align-items-center'>
				<div>
					<p className='lead'>Well thought out page structure</p>
					<p>
						Since the "Subheader" is in the same file as the page content, you can
						easily use the relevant components here.
					</p>
				</div>
			</div>
			<div className='col-md-4'>
				<img src={Susy3} className={classes.image} width='100%' alt='' />
			</div>
			<TourNavigation />
		</div>
	);
};

const ListTour = () => {
	const classes = useStyles();
	return (
		<div className='row'>
			<div className='col-md-4'>
				<img src={Susy8} className={classes.image} width='100%' alt='' />
			</div>
			<div className='col-md-8 d-flex align-items-center'>
				<div>
					<p className='lead'>Table & Table Hooks</p>
					<p>With hooks written specifically for tables;</p>
					<ul>
						<li>Select row and select all,</li>
						<li>Cell customization,</li>
						<li>Sorting according to the desired value in the cell,</li>
						<li>Paging and number of items on the page</li>
						<li>and more...</li>
					</ul>
					<Button
						color='info'
						isOutline
						tag='a'
						size='sm'
						to={`../${componentsMenu.components.subMenu.table.path}`}
						target='_blank'>
						More Information
					</Button>
				</div>
			</div>
			<TourNavigation />
		</div>
	);
};

const GridPageTour = () => {
	const classes = useStyles();
	return (
		<div className='row'>
			<div className='col-md-4'>
				<img src={Susy5} className={classes.image} width='100%' alt='' />
			</div>
			<div className='col-md-8 d-flex align-items-center'>
				<div>
					<p className='lead'>Grid List</p>
					<p>You can list your items in grid form.</p>
				</div>
			</div>
			<TourNavigation />
		</div>
	);
};

const EditPageTour = () => {
	const classes = useStyles();
	return (
		<div className='row'>
			<div className='col-md-4'>
				<img src={Susy6} className={classes.image} width='100%' alt='' />
			</div>
			<div className='col-md-8 d-flex align-items-center'>
				<div>
					<p className='lead'>Edit Pages</p>
					<p>
						You can use your forms in different ways such as <b>modal</b>, <b>canvas</b>{' '}
						and <b>wizard</b> according to your needs.
					</p>
				</div>
			</div>
			<TourNavigation />
		</div>
	);
};

const AuthPageTour = () => {
	const classes = useStyles();
	return (
		<div className='row'>
			<div className='col-md-4'>
				<img src={Susy4} className={classes.image} width='100%' alt='' />
			</div>
			<div className='col-md-8 d-flex align-items-center'>
				<div>
					<p className='lead'>Auth Pages</p>
					<p>You can see the authorization sample pages here.</p>
				</div>
			</div>
			<TourNavigation />
		</div>
	);
};

const PMTour = () => {
	const classes = useStyles();
	return (
		<div className='row'>
			<div className='col-md-4'>
				<img src={Susy5} className={classes.image} width='100%' alt='' />
			</div>
			<div className='col-md-8 d-flex align-items-center'>
				<div>
					<p className='lead'>Apps Examples</p>
					<p>
						Some sample screens have been made with "Facit" and it can give you an idea
						for your project.
					</p>
					<p>
						First, let's start by clicking <b>"Projects"</b> from the accordion menu.
					</p>
				</div>
			</div>
		</div>
	);
};

const ProjectsTour = () => {
	const classes = useStyles();
	return (
		<div className='row'>
			<div className='col-md-4'>
				<img src={Susy5} className={classes.image} width='100%' alt='' />
			</div>
			<div className='col-md-8 d-flex align-items-center'>
				<div>
					<p className='lead'>Team and Project Homepage</p>
					<p>
						<b>Click</b> on a project to see the inside page.
					</p>
				</div>
			</div>
		</div>
	);
};

const ProjectItemTour = () => {
	const classes = useStyles();
	return (
		<div className='row'>
			<div className='col-md-4'>
				<img src={Susy5} className={classes.image} width='100%' alt='' />
			</div>
			<div className='col-md-8 d-flex align-items-center'>
				<div>
					<p className='lead'>Board & Task Page</p>
					<p>
						<b>Click</b> on the title of a task on the board to see detailed
						information.
					</p>
				</div>
			</div>
			<TourNavigation />
		</div>
	);
};

const KnowledgeTour = () => {
	const classes = useStyles();
	return (
		<div className='row'>
			<div className='col-md-4'>
				<img src={Susy8} className={classes.image} width='100%' alt='' />
			</div>
			<div className='col-md-8 d-flex align-items-center'>
				<div>
					<p className='lead'>Knowledge</p>
					<p>Open the menu and click "Knowledge Grid"</p>
				</div>
			</div>
		</div>
	);
};

const KnowledgeItemTour = () => {
	const classes = useStyles();
	return (
		<div className='row'>
			<div className='col-md-4'>
				<img src={Susy7} className={classes.image} width='100%' alt='' />
			</div>
			<div className='col-md-8 d-flex align-items-center'>
				<div>
					<p className='lead'>Knowledge Item</p>
					<p>
						After using the above filtering, you can click on the item and view its
						detailed information.
					</p>
				</div>
			</div>
		</div>
	);
};

const SalesTour = () => {
	const classes = useStyles();
	return (
		<div className='row'>
			<div className='col-md-4'>
				<img src={Susy} className={classes.image} width='100%' alt='' />
			</div>
			<div className='col-md-8 d-flex align-items-center'>
				<div>
					<p className='lead'>Sales pages</p>
					<p>Examples of admin screens for e-commerce are given.</p>
				</div>
			</div>
			<TourNavigation />
		</div>
	);
};

const AppointmentTour = () => {
	const classes = useStyles();
	return (
		<div className='row'>
			<div className='col-md-4'>
				<img src={Susy4} className={classes.image} width='100%' alt='' />
			</div>
			<div className='col-md-8 d-flex align-items-center'>
				<div>
					<p className='lead'>Appointment Pages</p>
					<p>Examples of admin screens are given for appointment.</p>
					<p>
						Click <b>"Employee List"</b> to continue
					</p>
				</div>
			</div>
		</div>
	);
};

const EmployeeTour = () => {
	const classes = useStyles();
	return (
		<div className='row'>
			<div className='col-md-4'>
				<img src={Susy} className={classes.image} width='100%' alt='' />
			</div>
			<div className='col-md-8 d-flex align-items-center'>
				<div>
					<p className='lead'>Employee</p>
					<p>We wanted to show an example for employee profiles.</p>
					<p>Click the button to see detailed information.</p>
				</div>
			</div>
		</div>
	);
};

const CRMPagesTour = () => {
	const classes = useStyles();
	return (
		<div className='row'>
			<div className='col-md-4'>
				<img src={Susy5} className={classes.image} width='100%' alt='' />
			</div>
			<div className='col-md-8 d-flex align-items-center'>
				<div>
					<p className='lead'>CRM pages</p>
					<p>Examples are given for CRM screens.</p>
					<small>
						With accordion, you can expand the menu and browse the pages in it.
					</small>
				</div>
			</div>
			<TourNavigation />
		</div>
	);
};

const ChatPagesTour = () => {
	const classes = useStyles();
	return (
		<div className='row'>
			<div className='col-md-4'>
				<img src={Susy5} className={classes.image} width='100%' alt='' />
			</div>
			<div className='col-md-8 d-flex align-items-center'>
				<div>
					<p className='lead'>Chat pages</p>
					<p>Examples are given for Chat screens.</p>
					<small>
						With accordion, you can expand the menu and browse the pages in it.
					</small>
				</div>
			</div>
			<TourNavigation />
		</div>
	);
};

const DocTour = () => {
	const classes = useStyles();
	return (
		<div className='row'>
			<div className='col-md-4'>
				<img src={Susy9} className={classes.image} width='100%' alt='' />
			</div>
			<div className='col-md-8 d-flex align-items-center'>
				<div>
					<p className='lead'>Documentation</p>
					<p>Here you can find detailed usage of ui and form components for Facit.</p>
				</div>
			</div>
			<TourNavigation />
		</div>
	);
};

const LastTour = () => {
	const { setIsOpen, setCurrentStep } = useTour();
	const classes = useStyles();
	return (
		<div className='row'>
			<div className='col-md-4'>
				<img src={Susy10} className={classes.image} width='100%' alt='' />
			</div>
			<div className='col-md-8 d-flex align-items-center'>
				<div>
					<p className='lead'>Thank you for following me!</p>
					<p>I know it is very long, but I have actually presented very little of it.</p>
					<p>You can always contact us after purchasing.</p>
				</div>
			</div>
			<div className='col-12 mt-3'>
				<div className='row'>
					<div className='col-12'>
						<p>- What would you like to do now?</p>
					</div>
					<div className='col'>
						<Button
							icon='Close'
							color='danger'
							isLink
							onClick={() => {
								setIsOpen(false);
								setCurrentStep(0);
							}}>
							Close
						</Button>
					</div>
					<div className='col-auto'>
						<Button
							icon='Shopping Cart'
							color='success'
							isLight
							tag='a'
							href='https://1.envato.market/facit-preview'>
							Buy Now
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

/**
 * Tour Steps
 */
const steps = [
	/**
	 * Dark Mode
	 * @step 0
	 */
	{
		selector: getTargetName('dark-mode'),
		content: () => <DarkModeTour />,
	},
	/**
	 * Lang Selector
	 * @step 1
	 */
	{
		selector: getTargetName('lang-selector'),
		content: () => <LangSwitcherTour />,
		highlightedSelectors: [getTargetName('lang-selector-menu')],
		mutationObservables: [getTargetName('lang-selector-menu')],
		resizeObservables: [getTargetName('lang-selector-menu')],
	},
	/**
	 * Search
	 * @step 2
	 */
	{
		selector: getTargetName('search'),
		content: () => <SearchTour />,
		highlightedSelectors: [getTargetName('search-modal'), getTargetName('card')],
		mutationObservables: [getTargetName('search-modal'), getTargetName('card')],
		resizeObservables: [getTargetName('search-modal'), getTargetName('card')],
	},
	/**
	 * CRM
	 * @step 3
	 */
	{
		selector: `[href="/crm/dashboard"]`,
		content: () => <CrmTour />,
	},
	/**
	 * Date Range
	 * @step 4
	 */
	{
		selector: getTargetName('date-range'),
		content: () => <DateRangeTour />,
		highlightedSelectors: [getTargetName('date-range-menu')],
		mutationObservables: [getTargetName('date-range-menu')],
		resizeObservables: [getTargetName('date-range-menu')],
	},
	/**
	 * List Page
	 * @step 5
	 */
	{
		selector: '#aside-demo-pages__listPages--link',
		content: () => <ListPageTour />,
		highlightedSelectors: ['#aside-demo-pages__listPages'],
		mutationObservables: ['#aside-demo-pages__listPages'],
		resizeObservables: ['#aside-demo-pages__listPages'],
	},
	/**
	 * Filter
	 * @step 6
	 */
	{
		selector: getTargetName('filter'),
		content: () => <FilterTour />,
		highlightedSelectors: [getTargetName('filter-menu')],
		mutationObservables: [getTargetName('filter-menu')],
		resizeObservables: [getTargetName('filter-menu')],
	},
	/**
	 * List
	 * @step 7
	 */
	{
		selector: getTargetName('list'),
		content: () => <ListTour />,
		highlightedSelectors: [getTargetName('list')],
		mutationObservables: [getTargetName('list')],
		resizeObservables: [getTargetName('list')],
	},
	/**
	 * Grid Page
	 * @step 8
	 */
	{
		selector: '#aside-demo-pages__gridPages--link',
		content: () => <GridPageTour />,
		highlightedSelectors: ['#aside-demo-pages__gridPages'],
		mutationObservables: ['#aside-demo-pages__gridPages'],
		resizeObservables: ['#aside-demo-pages__gridPages'],
	},
	/**
	 * Edit Page
	 * @step 9
	 */
	{
		selector: '#aside-demo-pages__editPages--link',
		content: () => <EditPageTour />,
		highlightedSelectors: ['#aside-demo-pages__editPages'],
		mutationObservables: ['#aside-demo-pages__editPages'],
		resizeObservables: ['#aside-demo-pages__editPages'],
	},
	/**
	 * Auth Page
	 * @step 10
	 */
	{
		selector: '[href="/auth-pages/login"]',
		content: () => <AuthPageTour />,
		highlightedSelectors: [
			'[href="/auth-pages/login"]',
			'[href="/auth-pages/sign-up"]',
			'[href="/auth-pages/404"]',
			getTargetName('login-page'),
		],
		mutationObservables: [
			'[href="/auth-pages/login"]',
			'[href="/auth-pages/sign-up"]',
			'[href="/auth-pages/404"]',
			getTargetName('login-page'),
		],
		resizeObservables: [
			'[href="/auth-pages/login"]',
			'[href="/auth-pages/sign-up"]',
			'[href="/auth-pages/404"]',
			getTargetName('login-page'),
		],
	},
	/**
	 * PM
	 * @step 11
	 */
	{
		selector: '#aside-demo-pages__projectManagement--link',
		content: () => <PMTour />,
		highlightedSelectors: ['#aside-demo-pages__projectManagement'],
		mutationObservables: ['#aside-demo-pages__projectManagement'],
		resizeObservables: ['#aside-demo-pages__projectManagement'],
	},
	/**
	 * Projects
	 * @step 12
	 */
	{
		selector: getTargetName('project-item'),
		content: () => <ProjectsTour />,
		highlightedSelectors: [getTargetName('project-item')],
		mutationObservables: [getTargetName('project-item')],
		resizeObservables: [getTargetName('project-item')],
	},
	/**
	 * Project Item
	 * @step 13
	 */
	{
		selector: getTargetName('Mail App'),
		content: () => <ProjectItemTour />,
		highlightedSelectors: [getTargetName('Mail App'), getTargetName('mail-app-modal')],
		mutationObservables: [getTargetName('Mail App'), getTargetName('mail-app-modal')],
		resizeObservables: [getTargetName('Mail App'), getTargetName('mail-app-modal')],
	},
	/**
	 * Knowledge
	 * @step 14
	 */
	{
		selector: '#aside-demo-pages__knowledge--link',
		content: () => <KnowledgeTour />,
		highlightedSelectors: ['#aside-demo-pages__knowledge'],
		mutationObservables: ['#aside-demo-pages__knowledge'],
		resizeObservables: ['#aside-demo-pages__knowledge'],
	},
	/**
	 * Knowledge Item
	 * @step 15
	 */
	{
		selector: getTargetName('Background'),
		content: () => <KnowledgeItemTour />,
		highlightedSelectors: [getTargetName('Background'), getTargetName('knowledge-filter')],
		mutationObservables: [getTargetName('Background')],
		resizeObservables: [getTargetName('Background')],
	},
	/**
	 * Sales
	 * @step 16
	 */
	{
		selector: '#aside-demo-pages__sales--link',
		content: () => <SalesTour />,
		highlightedSelectors: ['#aside-demo-pages__sales'],
		mutationObservables: ['#aside-demo-pages__sales'],
		resizeObservables: ['#aside-demo-pages__sales'],
	},
	/**
	 * Appointment
	 * @step 17
	 */
	{
		selector: '#aside-demo-pages__appointment--link',
		content: () => <AppointmentTour />,
		highlightedSelectors: ['#aside-demo-pages__appointment'],
		mutationObservables: ['#aside-demo-pages__appointment'],
		resizeObservables: ['#aside-demo-pages__appointment'],
	},
	/**
	 * Employee
	 * @step 18
	 */
	{
		selector: getTargetName('Grace'),
		content: () => <EmployeeTour />,
		highlightedSelectors: [getTargetName('Grace')],
		mutationObservables: [getTargetName('Grace')],
		resizeObservables: [getTargetName('Grace')],
	},
	/**
	 * CRM Pages
	 * @step 19
	 */
	{
		selector: '#aside-demo-pages__crm--link',
		content: () => <CRMPagesTour />,
		highlightedSelectors: ['#aside-demo-pages__crm'],
		mutationObservables: ['#aside-demo-pages__crm'],
		resizeObservables: ['#aside-demo-pages__crm'],
	},
	/**
	 * Chat Pages
	 * @step 20
	 */
	{
		selector: '#aside-demo-pages__chat--link',
		content: () => <ChatPagesTour />,
		highlightedSelectors: ['#aside-demo-pages__chat'],
		mutationObservables: ['#aside-demo-pages__chat'],
		resizeObservables: ['#aside-demo-pages__chat'],
	},
	/**
	 * Documentation
	 * @step 21
	 */
	{
		selector: getTargetName('documentation'),
		content: () => <DocTour />,
		highlightedSelectors: ['#aside-menu-two'],
		mutationObservables: ['#aside-menu-two', '#aside-demo-pages', '.aside-body'],
		resizeObservables: ['#aside-menu-two', '#aside-demo-pages', '.aside-body'],
	},
	/**
	 * Last
	 * @step 22
	 */
	{
		selector: 'body',
		content: () => <LastTour />,
	},
];

export default steps;
