import React from 'react';
import SubHeader, { SubHeaderLeft, SubHeaderRight } from '../../../layout/SubHeader/SubHeader';
import Breadcrumb from '../../../components/bootstrap/Breadcrumb';
import Page from '../../../layout/Page/Page';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import LineBasic from './chart-line/LineBasic';
import LineWithLabel from './chart-line/LineWithLabel';
import LineZoomableTimeSeries from './chart-line/LineZoomableTimeSeries';
import LineWithAnnotations from './chart-line/LineWithAnnotations';
import LineSyncingOptions from './chart-line/LineSyncingOptions';
import LineBrush from './chart-line/LineBrush';
import LineStep from './chart-line/LineStep';
import LineGradient from './chart-line/LineGradient';
import LineRealtime from './chart-line/LineRealtime';
import LineDashed from './chart-line/LineDashed';
import LineWithMissingData from './chart-line/LineWithMissingData';
import CommonStoryBtn from '../../../components/common/CommonStoryBtn';
import { componentsMenu } from '../../../menu';

const ChartLinePage = () => {
	return (
		<PageWrapper title={componentsMenu.charts.subMenu.chartsLine.text}>
			<SubHeader>
				<SubHeaderLeft>
					<Breadcrumb
						list={[
							{ title: 'Charts', to: '/charts' },
							{ title: 'Line', to: '/charts/line' },
						]}
					/>
				</SubHeaderLeft>
				<SubHeaderRight>
					<CommonStoryBtn to='/story/extra-chart-line--line-basic' />
				</SubHeaderRight>
			</SubHeader>
			<Page>
				<div className='row'>
					<LineBasic />
					<LineWithLabel />

					<LineZoomableTimeSeries />
					<LineWithAnnotations />

					<LineSyncingOptions />
					<LineBrush />

					<LineStep />
					<LineGradient />

					<LineRealtime />
					<LineDashed />

					<LineWithMissingData />
				</div>
			</Page>
		</PageWrapper>
	);
};

export default ChartLinePage;
