import React from 'react';
import SubHeader, { SubHeaderLeft, SubHeaderRight } from '../../../layout/SubHeader/SubHeader';
import Breadcrumb from '../../../components/bootstrap/Breadcrumb';
import Page from '../../../layout/Page/Page';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import HeatMapBasic from './chart-heat-map/HeatMapBasic';
import HeatMapMultipleColors from './chart-heat-map/HeatMapMultipleColors';
import HeatMapMultipleSeries from './chart-heat-map/HeatMapMultipleSeries';
import HeatMapColorRange from './chart-heat-map/HeatMapColorRange';
import HeatMapRounded from './chart-heat-map/HeatMapRounded';
import CommonStoryBtn from '../../../components/common/CommonStoryBtn';
import { componentsMenu } from '../../../menu';

const ChartHeatMapPage = () => {
	return (
		<PageWrapper title={componentsMenu.charts.subMenu.chartsHeatMap.text}>
			<SubHeader>
				<SubHeaderLeft>
					<Breadcrumb
						list={[
							{ title: 'Charts', to: '/charts' },
							{ title: 'Heat Map', to: '/charts/heat-map' },
						]}
					/>
				</SubHeaderLeft>
				<SubHeaderRight>
					<CommonStoryBtn to='/story/extra-chart-heatmap--heat-map-basic' />
				</SubHeaderRight>
			</SubHeader>
			<Page>
				<div className='row'>
					<HeatMapBasic />
					<HeatMapMultipleColors />

					<HeatMapMultipleSeries />
					<HeatMapColorRange />

					<HeatMapRounded />
				</div>
			</Page>
		</PageWrapper>
	);
};

export default ChartHeatMapPage;
