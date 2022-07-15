import React from 'react';
import SubHeader, { SubHeaderLeft, SubHeaderRight } from '../../../layout/SubHeader/SubHeader';
import Breadcrumb from '../../../components/bootstrap/Breadcrumb';
import Page from '../../../layout/Page/Page';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import RadialBarBasic from './chart-radial-bar/RadialBarBasic';
import RadialBarMultiple from './chart-radial-bar/RadialBarMultiple';
import RadialBarCustom from './chart-radial-bar/RadialBarCustom';
import RadialBarGradient from './chart-radial-bar/RadialBarGradient';
import RadialBarWithImage from './chart-radial-bar/RadialBarWithImage';
import RadialBarStroked from './chart-radial-bar/RadialBarStroked';
import RadialBarSemiCircleGauge from './chart-radial-bar/RadialBarSemiCircleGauge';
import CommonStoryBtn from '../../../components/common/CommonStoryBtn';
import { componentsMenu } from '../../../menu';

const ChartRadialBarPage = () => {
	return (
		<PageWrapper title={componentsMenu.charts.subMenu.chartsRadialBar.text}>
			<SubHeader>
				<SubHeaderLeft>
					<Breadcrumb
						list={[
							{ title: 'Charts', to: '/charts' },
							{ title: 'Radial Bar', to: '/charts/radial-bar' },
						]}
					/>
				</SubHeaderLeft>
				<SubHeaderRight>
					<CommonStoryBtn to='/story/extra-chart-radial-bar--radial-bar-basic' />
				</SubHeaderRight>
			</SubHeader>
			<Page>
				<div className='row'>
					<RadialBarBasic />
					<RadialBarMultiple />

					<RadialBarCustom />
					<RadialBarGradient />

					<RadialBarWithImage />
					<RadialBarStroked />

					<RadialBarSemiCircleGauge />
				</div>
			</Page>
		</PageWrapper>
	);
};

export default ChartRadialBarPage;
