import React from 'react';
import SubHeader, { SubHeaderLeft, SubHeaderRight } from '../../../layout/SubHeader/SubHeader';
import Breadcrumb from '../../../components/bootstrap/Breadcrumb';
import Page from '../../../layout/Page/Page';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';

import ColumnBasic from './chart-columns/ColumnBasic';
import ColumnWithDataLabels from './chart-columns/ColumnWithDataLabels';
import ColumnStacked from './chart-columns/ColumnStacked';
import ColumnStacked100 from './chart-columns/ColumnStacked100';
import ColumnWithRotatedLabel from './chart-columns/ColumnWithRotatedLabel';
import ColumnWithNegativeValues from './chart-columns/ColumnWithNegativeValues';
import ColumnDynamicData from './chart-columns/ColumnDynamicData';
import ColumnDistributed from './chart-columns/ColumnDistributed';
import CommonStoryBtn from '../../../components/common/CommonStoryBtn';
import { componentsMenu } from '../../../menu';

const ChartColumnPage = () => {
	return (
		<PageWrapper title={componentsMenu.charts.subMenu.chartsColumn.text}>
			<SubHeader>
				<SubHeaderLeft>
					<Breadcrumb
						list={[
							{ title: 'Charts', to: '/charts' },
							{ title: 'Column', to: '/charts/column' },
						]}
					/>
				</SubHeaderLeft>
				<SubHeaderRight>
					<CommonStoryBtn to='/story/extra-chart-column--column-basic' />
				</SubHeaderRight>
			</SubHeader>
			<Page>
				<div className='row'>
					<ColumnBasic />
					<ColumnWithDataLabels />

					<ColumnStacked />
					<ColumnStacked100 />

					<ColumnWithRotatedLabel />
					<ColumnWithNegativeValues />

					<ColumnDynamicData />
					<ColumnDistributed />
				</div>
			</Page>
		</PageWrapper>
	);
};

export default ChartColumnPage;
