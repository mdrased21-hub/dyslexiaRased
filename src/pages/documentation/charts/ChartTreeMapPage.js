import React from 'react';
import SubHeader, { SubHeaderLeft, SubHeaderRight } from '../../../layout/SubHeader/SubHeader';
import Breadcrumb from '../../../components/bootstrap/Breadcrumb';
import Page from '../../../layout/Page/Page';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import TreeMapBasic from './chart-tree-map/TreeMapBasic';
import TreeMapMultipleSeries from './chart-tree-map/TreeMapMultipleSeries';
import TreeMapColorRange from './chart-tree-map/TreeMapColorRange';
import TreeMapDistributed from './chart-tree-map/TreeMapDistributed';
import CommonStoryBtn from '../../../components/common/CommonStoryBtn';
import { componentsMenu } from '../../../menu';

const ChartTreeMapPage = () => {
	return (
		<PageWrapper title={componentsMenu.charts.subMenu.chartsTreeMap.text}>
			<SubHeader>
				<SubHeaderLeft>
					<Breadcrumb
						list={[
							{ title: 'Charts', to: '/charts' },
							{ title: 'Tree Map', to: '/charts/tree-map' },
						]}
					/>
				</SubHeaderLeft>
				<SubHeaderRight>
					<CommonStoryBtn to='/story/extra-chart-treemap--tree-map-basic' />
				</SubHeaderRight>
			</SubHeader>
			<Page>
				<div className='row'>
					<TreeMapBasic />
					<TreeMapMultipleSeries />

					<TreeMapColorRange />
					<TreeMapDistributed />
				</div>
			</Page>
		</PageWrapper>
	);
};

export default ChartTreeMapPage;
