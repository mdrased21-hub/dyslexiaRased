import React from 'react';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import SubHeader, { SubHeaderLeft, SubHeaderRight } from '../../../layout/SubHeader/SubHeader';
import Page from '../../../layout/Page/Page';
import { demoPages } from '../../../menu';

const Sales = () => {
	return (
		<PageWrapper title={demoPages.crm.subMenu.sales.text}>
			<SubHeader>
				<SubHeaderLeft>left</SubHeaderLeft>
				<SubHeaderRight>Right</SubHeaderRight>
			</SubHeader>
			<Page>Sales</Page>
		</PageWrapper>
	);
};

export default Sales;
