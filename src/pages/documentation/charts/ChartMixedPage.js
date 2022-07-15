import React from 'react';
import SubHeader, { SubHeaderLeft, SubHeaderRight } from '../../../layout/SubHeader/SubHeader';
import Breadcrumb from '../../../components/bootstrap/Breadcrumb';
import Page from '../../../layout/Page/Page';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import MixedLineColumn from './chart-mixed/MixedLineColumn';
import MixedMultipleYAxis from './chart-mixed/MixedMultipleYAxis';
import MixedLineArea from './chart-mixed/MixedLineArea';
import MixedLineColumnArea from './chart-mixed/MixedLineColumnArea';
import MixedLineScatter from './chart-mixed/MixedLineScatter';
import CommonStoryBtn from '../../../components/common/CommonStoryBtn';
import { componentsMenu } from '../../../menu';

const ChartMixedPage = () => {
	return (
		<PageWrapper title={componentsMenu.charts.subMenu.chartsMixed.text}>
			<SubHeader>
				<SubHeaderLeft>
					<Breadcrumb
						list={[
							{ title: 'Charts', to: '/charts' },
							{ title: 'Mixed', to: '/charts/mixed' },
						]}
					/>
				</SubHeaderLeft>
				<SubHeaderRight>
					<CommonStoryBtn to='/story/extra-chart-mixed--mixed-line-column' />
				</SubHeaderRight>
			</SubHeader>
			<Page>
				<div className='row'>
					<MixedLineColumn />
					<MixedMultipleYAxis />

					<MixedLineArea />
					<MixedLineColumnArea />

					<MixedLineScatter />
				</div>
			</Page>
		</PageWrapper>
	);
};

export default ChartMixedPage;
