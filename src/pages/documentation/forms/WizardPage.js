import React from 'react';
import SubHeader, { SubHeaderLeft } from '../../../layout/SubHeader/SubHeader';
import Breadcrumb from '../../../components/bootstrap/Breadcrumb';
import Page from '../../../layout/Page/Page';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import Card, {
	CardActions,
	CardBody,
	CardCodeView,
	CardHeader,
	CardLabel,
	CardSubTitle,
	CardTitle,
} from '../../../components/bootstrap/Card';
import CommonStoryBtn from '../../../components/common/CommonStoryBtn';
import CommonHowToUse from '../../../components/common/CommonHowToUse';
import Wizard, { WizardItem } from '../../../components/Wizard';
import { componentsMenu } from '../../../menu';

const WizardPage = () => {
	const _generalUsage = `
<Wizard
	isHeader={ Boolean || String } // true || false || 'withButton'
	color={ String } // 'primary' || 'secondary' || 'success' || 'info' || 'warning' || 'danger' || 'light' || 'dark'
	stretch={ Boolean || String } // false || true || 'semi'
	onSubmit={ Function }
	{...props}>
	<WizardItem
		id={ String }
		title={ String }
		className={ String }
		{...props}>
	{ /* CHILDREN */}
	</WizardItem>
	...
</Wizard>`;

	const _colors = ['primary', 'secondary', 'success', 'info', 'warning', 'danger', 'dark'];

	return (
		<PageWrapper title={componentsMenu.forms.subMenu.wizard.text}>
			<SubHeader>
				<SubHeaderLeft>
					<Breadcrumb
						list={[
							{ title: 'Forms', to: '/forms' },
							{ title: 'Wizard', to: '/forms/wizard' },
						]}
					/>
				</SubHeaderLeft>
			</SubHeader>
			<Page>
				<div className='row'>
					<div className='col-12'>
						<Card>
							<CardHeader>
								<CardLabel icon='AutoFixHigh'>
									<CardTitle tag='h2'>Wizard</CardTitle>
								</CardLabel>
							</CardHeader>
							<CardHeader>
								<CardLabel icon='Assignment'>
									<CardTitle>General Usage</CardTitle>
									<CardSubTitle>Wizard and WizardItem</CardSubTitle>
								</CardLabel>
							</CardHeader>
							<CardBody>
								<CardCodeView>{_generalUsage}</CardCodeView>
							</CardBody>
						</Card>
					</div>

					<div className='col-12'>
						<Card>
							<CardHeader>
								<CardLabel icon='FormatSize'>
									<CardTitle>isHeader</CardTitle>
									<CardSubTitle>Wizard</CardSubTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/' />
								</CardActions>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>
									isHeader: PropTypes.oneOfType([PropTypes.bool,
									PropTypes.oneOf(['withButton'])]),
								</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<div className='row g-4'>
									<div className='col-md-4'>
										<Wizard
											className='mb-0'
											stretch
											onSubmit={(e) => {
												e.preventDefault();
											}}>
											<WizardItem id='item1'>Header is false.</WizardItem>
											<WizardItem id='item2'>Item 2</WizardItem>
											<WizardItem id='item3'>Item 3</WizardItem>
										</Wizard>
									</div>
									<div className='col-md-4'>
										<Wizard
											className='mb-0'
											isHeader
											onSubmit={(e) => {
												e.preventDefault();
											}}>
											<WizardItem id='item2-1'>Header is false.</WizardItem>
											<WizardItem id='item2-2'>Item 2</WizardItem>
											<WizardItem id='item2-3'>Item 3</WizardItem>
										</Wizard>
									</div>
									<div className='col-md-4'>
										<Wizard
											className='mb-0'
											isHeader='withButton'
											onSubmit={(e) => {
												e.preventDefault();
											}}>
											<WizardItem id='item3-1'>Header is false.</WizardItem>
											<WizardItem id='item3-2'>Item 2</WizardItem>
											<WizardItem id='item3-3'>Item 3</WizardItem>
										</Wizard>
									</div>
								</div>
							</CardBody>
						</Card>
					</div>

					<div className='col-12'>
						<Card>
							<CardHeader>
								<CardLabel icon='Brush'>
									<CardTitle>color</CardTitle>
									<CardSubTitle>Wizard</CardSubTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/' />
								</CardActions>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>
									color: PropTypes.oneOf([ 'primary', 'secondary', 'success',
									'info', 'warning', 'danger', 'light', 'dark', 'link', 'brand',
									'brand-two', 'storybook' ]),
								</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<div className='row g-4'>
									{_colors.map((color) => (
										<div key={color} className='col-md-4'>
											<Wizard
												color={color}
												className='mb-0'
												isHeader='withButton'
												onSubmit={(e) => {
													e.preventDefault();
												}}>
												<WizardItem id={`item-${color}-1`}>
													Color is {color}.
												</WizardItem>
												<WizardItem id={`item-${color}-2`}>
													Item 2
												</WizardItem>
												<WizardItem id={`item-${color}-3`}>
													Item 3
												</WizardItem>
											</Wizard>
										</div>
									))}
								</div>
							</CardBody>
						</Card>
					</div>

					<div className='col-12'>
						<Card>
							<CardHeader>
								<CardLabel icon='TextFields' iconColor='danger'>
									<CardTitle>title</CardTitle>
									<CardSubTitle>WizardItem</CardSubTitle>
								</CardLabel>
								<CardActions>
									<CommonStoryBtn to='/' />
								</CardActions>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse>title: PropTypes.string,</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<Wizard
									className='mb-0'
									isHeader
									onSubmit={(e) => {
										e.preventDefault();
									}}>
									<WizardItem id='item2-1' title='Sample Section'>
										Title is "Sample Section".
									</WizardItem>
									<WizardItem id='item2-2'>
										Title is <code>null</code>.
									</WizardItem>
									<WizardItem id='item2-3' title='Preview'>
										Title is "Preview".
									</WizardItem>
								</Wizard>
							</CardBody>
						</Card>
					</div>
				</div>
			</Page>
		</PageWrapper>
	);
};

export default WizardPage;
