import React from 'react';
import SubHeader, { SubHeaderLeft, SubHeaderRight } from '../../../layout/SubHeader/SubHeader';
import Breadcrumb from '../../../components/bootstrap/Breadcrumb';
import Page from '../../../layout/Page/Page';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import TimelineBasic from './chart-timeline/TimelineBasic';
import TimelineDistributed from './chart-timeline/TimelineDistributed';
import TimelineMultiSeries from './chart-timeline/TimelineMultiSeries';
import TimelineAdvanced from './chart-timeline/TimelineAdvanced';
import TimelineMultipleSeries from './chart-timeline/TimelineMultipleSeries';
import CommonStoryBtn from '../../../components/common/CommonStoryBtn';
import { componentsMenu } from '../../../menu';

const ChartTimelinePage = () => {
	return (
		<PageWrapper title={componentsMenu.charts.subMenu.chartsTimeline.text}>
			<SubHeader>
				<SubHeaderLeft>
					<Breadcrumb
						list={[
							{ title: 'Charts', to: '/charts' },
							{ title: 'Timeline', to: '/charts/timeline' },
						]}
					/>
				</SubHeaderLeft>
				<SubHeaderRight>
					<CommonStoryBtn to='/story/extra-chart-timeline--timeline-basic' />
				</SubHeaderRight>
			</SubHeader>
			<Page>
				<div className='row'>
					<TimelineBasic />
					<TimelineDistributed />

					<TimelineMultiSeries />
					<TimelineAdvanced />

					<TimelineMultipleSeries />
				</div>
			</Page>
		</PageWrapper>
	);
};

export default ChartTimelinePage;
