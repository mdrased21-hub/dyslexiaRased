import React from 'react';
import SubHeader, { SubHeaderLeft, SubHeaderRight } from '../../../layout/SubHeader/SubHeader';
import Breadcrumb from '../../../components/bootstrap/Breadcrumb';
import Page from '../../../layout/Page/Page';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import AreaBasic from './chart-area/AreaBasic';
import AreaSpline from './chart-area/AreaSpline';
import AreaXAxis from './chart-area/AreaXAxis';
import AreaNegative from './chart-area/AreaNegative';
import AreaGithub from './chart-area/AreaGithub';
import AreaStacked from './chart-area/AreaStacked';
import AreaIrregular from './chart-area/AreaIrregular';
import AreaMissing from './chart-area/AreaMissing';
import CommonStoryBtn from '../../../components/common/CommonStoryBtn';
import { componentsMenu } from '../../../menu';

const ChartAreaPage = () => {
	return (
		<PageWrapper title={componentsMenu.charts.subMenu.chartsArea.text}>
			<SubHeader>
				<SubHeaderLeft>
					<Breadcrumb
						list={[
							{ title: 'Charts', to: '/charts' },
							{ title: 'Area', to: '/charts/area' },
						]}
					/>
				</SubHeaderLeft>
				<SubHeaderRight>
					<CommonStoryBtn to='/story/extra-chart-area--area-basic' />
				</SubHeaderRight>
			</SubHeader>
			<Page>
				<div className='row'>
					<AreaBasic />
					<AreaSpline />

					<AreaXAxis />
					<AreaNegative />

					<AreaGithub />
					<AreaStacked />

					<AreaIrregular />
					<AreaMissing />
				</div>
			</Page>
		</PageWrapper>
	);
};

export default ChartAreaPage;
