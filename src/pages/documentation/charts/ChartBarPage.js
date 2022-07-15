import React from 'react';
import SubHeader, { SubHeaderLeft, SubHeaderRight } from '../../../layout/SubHeader/SubHeader';
import Breadcrumb from '../../../components/bootstrap/Breadcrumb';
import Page from '../../../layout/Page/Page';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import BarBasic from './chart-bar/BarBasic';
import BarGrouped from './chart-bar/BarGrouped';
import BarStacked from './chart-bar/BarStacked';
import BarStacked100 from './chart-bar/BarStacked100';
import BarWithNegativeValues from './chart-bar/BarWithNegativeValues';
import BarReserved from './chart-bar/BarReserved';
import BarCustomLabel from './chart-bar/BarCustomLabel';
import BarPatterned from './chart-bar/BarPatterned';
import BarWithImages from './chart-bar/BarWithImages';
import CommonStoryBtn from '../../../components/common/CommonStoryBtn';
import { componentsMenu } from '../../../menu';

const ChartBarPage = () => {
	return (
		<PageWrapper title={componentsMenu.charts.subMenu.chartsBar.text}>
			<SubHeader>
				<SubHeaderLeft>
					<Breadcrumb
						list={[
							{ title: 'Charts', to: '/charts' },
							{ title: 'Bar', to: '/charts/bar' },
						]}
					/>
				</SubHeaderLeft>
				<SubHeaderRight>
					<CommonStoryBtn to='/story/extra-chart-bar--bar-basic' />
				</SubHeaderRight>
			</SubHeader>
			<Page>
				<div className='row'>
					<BarBasic />
					<BarGrouped />

					<BarStacked />
					<BarStacked100 />

					<BarWithNegativeValues />
					<BarReserved />

					<BarCustomLabel />
					<BarPatterned />

					<BarWithImages />
				</div>
			</Page>
		</PageWrapper>
	);
};

export default ChartBarPage;
