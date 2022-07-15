import React from 'react';
import SubHeader, { SubHeaderLeft, SubHeaderRight } from '../../../layout/SubHeader/SubHeader';
import Breadcrumb from '../../../components/bootstrap/Breadcrumb';
import Page from '../../../layout/Page/Page';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import PolarBasic from './chart-polar/PolarBasic';
import PolarMonochrome from './chart-polar/PolarMonochrome';
import CommonStoryBtn from '../../../components/common/CommonStoryBtn';
import { componentsMenu } from '../../../menu';

const ChartPolarPage = () => {
	return (
		<PageWrapper title={componentsMenu.charts.subMenu.chartsPolar.text}>
			<SubHeader>
				<SubHeaderLeft>
					<Breadcrumb
						list={[
							{ title: 'Charts', to: '/charts' },
							{ title: 'Polar', to: '/charts/polar' },
						]}
					/>
				</SubHeaderLeft>
				<SubHeaderRight>
					<CommonStoryBtn to='/story/extra-chart-polar--polar-basic' />
				</SubHeaderRight>
			</SubHeader>
			<Page>
				<div className='row'>
					<PolarBasic />
					<PolarMonochrome />
				</div>
			</Page>
		</PageWrapper>
	);
};

export default ChartPolarPage;
