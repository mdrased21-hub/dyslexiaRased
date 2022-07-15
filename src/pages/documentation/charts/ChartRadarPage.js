import React from 'react';
import SubHeader, { SubHeaderLeft, SubHeaderRight } from '../../../layout/SubHeader/SubHeader';
import Breadcrumb from '../../../components/bootstrap/Breadcrumb';
import Page from '../../../layout/Page/Page';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import RadarBasic from './chart-radar/RadarBasic';
import RadarMultipleSeries from './chart-radar/RadarMultipleSeries';
import RadarPolygonFill from './chart-radar/RadarPolygonFill';
import CommonStoryBtn from '../../../components/common/CommonStoryBtn';
import { componentsMenu } from '../../../menu';

const ChartRadarPage = () => {
	return (
		<PageWrapper title={componentsMenu.charts.subMenu.chartsRadar.text}>
			<SubHeader>
				<SubHeaderLeft>
					<Breadcrumb
						list={[
							{ title: 'Charts', to: '/charts' },
							{ title: 'Radar', to: '/charts/radar' },
						]}
					/>
				</SubHeaderLeft>
				<SubHeaderRight>
					<CommonStoryBtn to='/story/extra-chart-radar--radar-basic' />
				</SubHeaderRight>
			</SubHeader>
			<Page>
				<div className='row'>
					<RadarBasic />
					<RadarMultipleSeries />

					<RadarPolygonFill />
				</div>
			</Page>
		</PageWrapper>
	);
};

export default ChartRadarPage;
