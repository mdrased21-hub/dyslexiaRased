import React from 'react';
import SubHeader, { SubHeaderLeft, SubHeaderRight } from '../../../layout/SubHeader/SubHeader';
import Breadcrumb from '../../../components/bootstrap/Breadcrumb';
import Page from '../../../layout/Page/Page';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import BubbleBasic from './chart-bubble/BubbleBasic';
import Bubble3D from './chart-bubble/Bubble3D';
import CommonStoryBtn from '../../../components/common/CommonStoryBtn';
import { componentsMenu } from '../../../menu';

const ChartBubblePage = () => {
	return (
		<PageWrapper title={componentsMenu.charts.subMenu.chartsBubble.text}>
			<SubHeader>
				<SubHeaderLeft>
					<Breadcrumb
						list={[
							{ title: 'Charts', to: '/charts' },
							{ title: 'Bubble', to: '/charts/bubble' },
						]}
					/>
				</SubHeaderLeft>
				<SubHeaderRight>
					<CommonStoryBtn to='/story/extra-chart-bubble--bubble-basic' />
				</SubHeaderRight>
			</SubHeader>
			<Page>
				<div className='row'>
					<BubbleBasic />
					<Bubble3D />
				</div>
			</Page>
		</PageWrapper>
	);
};

export default ChartBubblePage;
