import React from 'react';
import SubHeader, { SubHeaderLeft } from '../../../layout/SubHeader/SubHeader';
import Breadcrumb from '../../../components/bootstrap/Breadcrumb';
import Page from '../../../layout/Page/Page';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import Card, {
	CardBody,
	CardCodeView,
	CardHeader,
	CardLabel,
	CardSubTitle,
	CardTitle,
} from '../../../components/bootstrap/Card';
import CommonHowToUse from '../../../components/common/CommonHowToUse';
import CommonDesc from '../../../components/common/CommonDesc';
import { AlertLink } from '../../../components/bootstrap/Alert';
import Button from '../../../components/bootstrap/Button';
import { componentsMenu } from '../../../menu';

const ChartGeneralUsagePage = () => {
	const _generalUsage = `
<Chart 
	series={ Array } 
	options={ Object } 
	type={ String } // 'line' || 'area' || 'bar' || 'pie' || 'donut' || 'scatter' || 'bubble' || 'heatmap' || 'radialBar' || 'rangeBar' || 'candlestick' || 'boxPlot' || 'radar' || 'polarArea' 
	height={ Number || String }
	width={ Number || String }
	className={ String } />`;

	const _seriesPropTypes = `
	series: PropTypes.arrayOf(
		PropTypes.oneOfType([
			PropTypes.string,
			PropTypes.number,
			PropTypes.shape({
				name: PropTypes.string,
				data: PropTypes.arrayOf(
					PropTypes.oneOfType([
						PropTypes.string,
						PropTypes.number,
						PropTypes.arrayOf(
							PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
						),
						PropTypes.shape({
							x: PropTypes.oneOfType([
								PropTypes.string,
								PropTypes.number,
								PropTypes.arrayOf(
									PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
								),
								PropTypes.object,
							]),
							y: PropTypes.oneOfType([
								PropTypes.string,
								PropTypes.number,
								PropTypes.arrayOf(
									PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
								),
								PropTypes.object,
							]),
						}),
					]),
				),
			}),
		]),
	).isRequired,`;

	const _optionsPropTypes = `
options: PropTypes.shape({
	annotations: PropTypes.object,
	chart: PropTypes.object,
	colors: PropTypes.array,
	dataLabels: PropTypes.object,
	fill: PropTypes.object,
	grid: PropTypes.object,
	labels: PropTypes.array,
	legend: PropTypes.object,
	markers: PropTypes.object,
	noData: PropTypes.object,
	plotOptions: PropTypes.object,
	responsive: PropTypes.array,
	series: PropTypes.array,
	states: PropTypes.object,
	stroke: PropTypes.object,
	subtitle: PropTypes.object,
	theme: PropTypes.object,
	title: PropTypes.object,
	tooltip: PropTypes.object,
	xaxis: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
	yaxis: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
}).isRequired,`;

	return (
		<PageWrapper title={componentsMenu.charts.subMenu.chartsUsage.text}>
			<SubHeader>
				<SubHeaderLeft>
					<Breadcrumb
						list={[
							{ title: 'Charts', to: '/charts' },
							{ title: 'General Usage', to: '/charts/general-usage' },
						]}
					/>
				</SubHeaderLeft>
			</SubHeader>
			<Page>
				<div className='row'>
					<div className='col-12'>
						<Card>
							<CardHeader>
								<CardLabel icon='Assignment'>
									<CardTitle>General Usage</CardTitle>
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
								<CardLabel icon='EditAttributes'>
									<CardTitle>series</CardTitle>
									<CardSubTitle>Chart</CardSubTitle>
								</CardLabel>
							</CardHeader>
							<CardBody>
								<CommonHowToUse isPrism>{_seriesPropTypes}</CommonHowToUse>
								<CommonDesc>
									More information,{' '}
									<AlertLink
										href='https://apexcharts.com/docs/series/'
										target='_blank'
										rel='noreferrer'>
										Apex Charts
									</AlertLink>
									.
								</CommonDesc>
							</CardBody>
						</Card>
					</div>

					<div className='col-12'>
						<Card>
							<CardHeader>
								<CardLabel icon='EditAttributes'>
									<CardTitle>options</CardTitle>
									<CardSubTitle>Chart</CardSubTitle>
								</CardLabel>
							</CardHeader>
							<CardBody>
								<CommonHowToUse isPrism>{_optionsPropTypes}</CommonHowToUse>
								<CommonDesc>
									More information,{' '}
									<AlertLink
										href='https://apexcharts.com/docs/options/annotations/'
										target='_blank'
										rel='noreferrer'>
										Apex Charts
									</AlertLink>
									.
								</CommonDesc>
							</CardBody>
						</Card>
					</div>

					<div className='col-12'>
						<Card>
							<CardHeader>
								<CardLabel icon='EditAttributes'>
									<CardTitle>type</CardTitle>
									<CardSubTitle>Chart</CardSubTitle>
								</CardLabel>
							</CardHeader>
							<CardHeader>
								<CommonHowToUse isPrism>
									type: PropTypes.oneOf(['line', 'area', 'bar', 'pie', 'donut',
									'scatter', 'bubble', 'heatmap', 'radialBar', 'rangeBar',
									'candlestick', 'boxPlot', 'radar', 'polarArea']),
								</CommonHowToUse>
							</CardHeader>
							<CardBody>
								<div className='row g-3'>
									{Object.keys(componentsMenu.charts.subMenu).map((i) => {
										if (
											['chartsUsage', 'chartsSparkline'].includes(
												componentsMenu.charts.subMenu[i].id,
											)
										)
											return null;
										return (
											<div
												className='col-xl-3 col-lg-4 col-md-6 col-12'
												key={componentsMenu.charts.subMenu[i].id}>
												<Button
													color='info'
													isLight
													icon={componentsMenu.charts.subMenu[i].icon}
													size='lg'
													tag='a'
													className='w-100'
													to={`../${componentsMenu.charts.subMenu[i].path}`}>
													{componentsMenu.charts.subMenu[i].text}
												</Button>
											</div>
										);
									})}
								</div>
							</CardBody>
						</Card>
					</div>
				</div>
			</Page>
		</PageWrapper>
	);
};

export default ChartGeneralUsagePage;
