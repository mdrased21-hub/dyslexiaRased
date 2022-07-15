import React from 'react';
import SubHeader, { SubHeaderLeft, SubHeaderRight } from '../../../layout/SubHeader/SubHeader';
import Breadcrumb from '../../../components/bootstrap/Breadcrumb';
import Page from '../../../layout/Page/Page';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import PieBasic from './chart-pieDonut/PieBasic';
import DonutBasic from './chart-pieDonut/DonutBasic';
import DonutUpdate from './chart-pieDonut/DonutUpdate';
import PieMonochrome from './chart-pieDonut/PieMonochrome';
import DonutGradient from './chart-pieDonut/DonutGradient';
import DonutSemi from './chart-pieDonut/DonutSemi';
import DonutPattern from './chart-pieDonut/DonutPattern';
import PieWithImage from './chart-pieDonut/PieWithImage';
import CommonStoryBtn from '../../../components/common/CommonStoryBtn';
import { componentsMenu } from '../../../menu';

const ChartPieDonutPage = () => {
	return (
		<PageWrapper title={componentsMenu.charts.subMenu.chartsPieDonut.text}>
			<SubHeader>
				<SubHeaderLeft>
					<Breadcrumb
						list={[
							{ title: 'Charts', to: '/charts' },
							{ title: 'Pie & Donut', to: '/charts/pie-donut' },
						]}
					/>
				</SubHeaderLeft>
				<SubHeaderRight>
					<CommonStoryBtn to='/story/extra-chart-pie-donut--pie-basic' />
				</SubHeaderRight>
			</SubHeader>
			<Page>
				<div className='row'>
					<PieBasic />
					<DonutBasic />

					<DonutUpdate />
					<PieMonochrome />

					<DonutGradient />
					<DonutSemi />

					<DonutPattern />
					<PieWithImage />
				</div>
			</Page>
		</PageWrapper>
	);
};

export default ChartPieDonutPage;
