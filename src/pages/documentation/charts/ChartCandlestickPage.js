import React from 'react';
import SubHeader, { SubHeaderLeft, SubHeaderRight } from '../../../layout/SubHeader/SubHeader';
import Breadcrumb from '../../../components/bootstrap/Breadcrumb';
import Page from '../../../layout/Page/Page';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import CandlestickBasic from './chart-candlestick/CandlestickBasic';
import CandlestickCombo from './chart-candlestick/CandlestickCombo';
import CandlestickCategoryXAxis from './chart-candlestick/CandlestickCategoryXAxis';
import CandlestickLine from './chart-candlestick/CandlestickLine';
import CommonStoryBtn from '../../../components/common/CommonStoryBtn';
import { componentsMenu } from '../../../menu';

const ChartCandlestickPage = () => {
	return (
		<PageWrapper title={componentsMenu.charts.subMenu.chartsCandleStick.text}>
			<SubHeader>
				<SubHeaderLeft>
					<Breadcrumb
						list={[
							{ title: 'Charts', to: '/charts' },
							{ title: 'Candlestick', to: '/charts/candlestick' },
						]}
					/>
				</SubHeaderLeft>
				<SubHeaderRight>
					<CommonStoryBtn to='/story/extra-chart-candlestick--candlestick-basic' />
				</SubHeaderRight>
			</SubHeader>
			<Page>
				<div className='row'>
					<CandlestickBasic />
					<CandlestickCombo />

					<CandlestickCategoryXAxis />
					<CandlestickLine />
				</div>
			</Page>
		</PageWrapper>
	);
};

export default ChartCandlestickPage;
