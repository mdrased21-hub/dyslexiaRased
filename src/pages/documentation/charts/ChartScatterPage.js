import React from 'react';
import SubHeader, { SubHeaderLeft, SubHeaderRight } from '../../../layout/SubHeader/SubHeader';
import Breadcrumb from '../../../components/bootstrap/Breadcrumb';
import Page from '../../../layout/Page/Page';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import ScatterBasic from './chart-scatter/ScatterBasic';
import ScatterDateTime from './chart-scatter/ScatterDateTime';
import ScatterImageFill from './chart-scatter/ScatterImageFill';
import CommonStoryBtn from '../../../components/common/CommonStoryBtn';
import { componentsMenu } from '../../../menu';

const ChartScatterPage = () => {
	return (
		<PageWrapper title={componentsMenu.charts.subMenu.chartsScatter.text}>
			<SubHeader>
				<SubHeaderLeft>
					<Breadcrumb
						list={[
							{ title: 'Charts', to: '/charts' },
							{ title: 'Scatter', to: '/charts/scatter' },
						]}
					/>
				</SubHeaderLeft>
				<SubHeaderRight>
					<CommonStoryBtn to='/story/extra-chart-scatter--scatter-basic' />
				</SubHeaderRight>
			</SubHeader>
			<Page>
				<div className='row'>
					<ScatterBasic />
					<ScatterDateTime />

					<ScatterImageFill />
				</div>
			</Page>
		</PageWrapper>
	);
};

export default ChartScatterPage;
