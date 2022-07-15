import React from 'react';
import {
	componentsMenu,
	dashboardMenu,
	demoPages,
	dmsMenu,
	dmsMenu2,
	dmsStudentMenu,
	layoutMenu,
} from '../menu';
import DashboardHeader from '../pages/common/Headers/DashboardHeader';
import DashboardBookingHeader from '../pages/common/Headers/DashboardBookingHeader';
import ProfilePageHeader from '../pages/common/Headers/ProfilePageHeader';
import SummaryHeader from '../pages/common/Headers/SummaryHeader';
import ProductsHeader from '../pages/common/Headers/ProductsHeader';
import ProductListHeader from '../pages/common/Headers/ProductListHeader';
import PageLayoutHeader from '../pages/common/Headers/PageLayoutHeader';
import ComponentsHeader from '../pages/common/Headers/ComponentsHeader';
import FormHeader from '../pages/common/Headers/FormHeader';
import ChartsHeader from '../pages/common/Headers/ChartsHeader';
import ContentHeader from '../pages/common/Headers/ContentHeader';
import UtilitiesHeader from '../pages/common/Headers/UtilitiesHeader';
import IconHeader from '../pages/common/Headers/IconHeader';
import ExtrasHeader from '../pages/common/Headers/ExtrasHeader';
// import DefaultHeader from '../pages/common/Headers/DefaultHeader';

const headers = [
	{ path: layoutMenu.pageLayout.subMenu.onlySubheader.path, element: null, exact: true },
	{ path: layoutMenu.pageLayout.subMenu.onlyContent.path, element: null, exact: true },
	{ path: layoutMenu.blank.path, element: null, exact: true },
	{ path: demoPages.login.path, element: null, exact: true },
	{ path: demoPages.signUp.path, element: null, exact: true },
	{ path: demoPages.page404.path, element: null, exact: true },
	{ path: demoPages.knowledge.subMenu.grid.path, element: null, exact: true },
	{ path: dashboardMenu.dashboard.path, element: <DashboardHeader />, exact: true },
	{
		path: demoPages.projectManagement.subMenu.list.path,
		element: <DashboardHeader />,
		exact: true,
	},
	{ path: demoPages.pricingTable.path, element: <DashboardHeader />, exact: true },
	{
		path: dashboardMenu.dashboardBooking.path,
		element: <DashboardBookingHeader />,
		exact: true,
	},
	{
		path: demoPages.appointment.subMenu.calendar.path,
		element: <DashboardBookingHeader />,
		exact: true,
	},
	{
		path: demoPages.appointment.subMenu.employeeList.path,
		element: <DashboardBookingHeader />,
		exact: true,
	},
	{
		path: demoPages.listPages.subMenu.listFluid.path,
		element: <DashboardBookingHeader />,
		exact: true,
	},
	{
		path: `${demoPages.editPages.path}/*`,
		element: <DashboardBookingHeader />,
		exact: true,
	},
	{
		path: `${demoPages.appointment.subMenu.employeeID.path}/*`,
		element: <DashboardBookingHeader />,
		exact: true,
	},
	{
		path: `${demoPages.projectManagement.subMenu.itemID.path}/*`,
		element: <DashboardBookingHeader />,
		exact: true,
	},
	{
		path: demoPages.singlePages.subMenu.fluidSingle.path,
		element: <ProfilePageHeader />,
		exact: true,
	},
	{
		path: demoPages.singlePages.subMenu.boxedSingle.path,
		element: <ProfilePageHeader />,
		exact: true,
	},
	{
		path: demoPages.sales.subMenu.transactions.path,
		element: <ProfilePageHeader />,
		exact: true,
	},
	{
		path: demoPages.chat.subMenu.withListChat.path,
		element: <ProfilePageHeader />,
		exact: true,
	},
	{
		path: demoPages.chat.subMenu.onlyListChat.path,
		element: <ProfilePageHeader />,
		exact: true,
	},
	{
		path: `${demoPages.knowledge.subMenu.itemID.path}/:id`,
		element: <ProfilePageHeader />,
		exact: true,
	},
	{
		path: demoPages.crm.subMenu.dashboard.path,
		element: <ProfilePageHeader />,
		exact: true,
	},
	{
		path: demoPages.crm.subMenu.customersList.path,
		element: <ProfilePageHeader />,
		exact: true,
	},
	{
		path: `${demoPages.crm.subMenu.customerID.path}/:id`,
		element: <ProfilePageHeader />,
		exact: true,
	},
	{
		path: dashboardMenu.summary.path,
		element: <SummaryHeader />,
		exact: true,
	},
	{
		path: demoPages.gridPages.subMenu.gridBoxed.path,
		element: <ProductsHeader />,
		exact: true,
	},
	{
		path: demoPages.gridPages.subMenu.gridFluid.path,
		element: <ProductsHeader />,
		exact: true,
	},
	{
		path: demoPages.listPages.subMenu.listBoxed.path,
		element: <ProductListHeader />,
		exact: true,
	},
	{
		path: demoPages.sales.subMenu.salesList.path,
		element: <ProductListHeader />,
		exact: true,
	},
	{
		path: demoPages.sales.subMenu.productsGrid.path,
		element: <ProductListHeader />,
		exact: true,
	},
	{
		path: `${demoPages.sales.subMenu.productID.path}/:id`,
		element: <ProductListHeader />,
		exact: true,
	},
	{
		path: `${layoutMenu.asideTypes.path}/*`,
		element: <PageLayoutHeader />,
		exact: true,
	},
	{
		path: layoutMenu.pageLayout.subMenu.headerAndSubheader.path,
		element: <PageLayoutHeader />,
		exact: true,
	},
	{
		path: layoutMenu.pageLayout.subMenu.onlyHeader.path,
		element: <PageLayoutHeader />,
		exact: true,
	},
	{
		path: `${componentsMenu.components.path}/*`,
		element: <ComponentsHeader />,
	},
	{
		path: `${componentsMenu.forms.path}/*`,
		element: <FormHeader />,
	},
	{
		path: `${componentsMenu.charts.path}/*`,
		element: <ChartsHeader />,
	},
	{
		path: `${componentsMenu.content.path}/*`,
		element: <ContentHeader />,
	},
	{
		path: `${componentsMenu.utilities.path}/*`,
		element: <UtilitiesHeader />,
	},
	{
		path: `${componentsMenu.icons.path}/*`,
		element: <IconHeader />,
	},
	{
		path: `${componentsMenu.extra.path}/*`,
		element: <ExtrasHeader />,
	},
	{
		path: dmsMenu.studentList.path,
		element: <ProfilePageHeader />,
	},
	{
		path: dmsMenu2.registerStudent.path,
		element: <ProfilePageHeader />,
	},
	{
		path: dmsMenu2.studentDetails.path,
		element: <ProfilePageHeader />,
	},
	{
		path: `${dmsMenu2.studentDetails.path}/:id`,
		element: <ProfilePageHeader />,
	},
	{
		path: `${dmsMenu2.editStudent.path}/:id`,
		element: <ProfilePageHeader />,
	},
	{
		path: dmsMenu.changePassword.path,
		element: <ProfilePageHeader />,
	},
	{
		path: dmsStudentMenu.quizList.path,
		element: <ProfilePageHeader />,
	},
	{
		path: `${dmsMenu2.quiz.path}/:id`,
		element: <ProfilePageHeader />,
	},
	// {
	// 	path: `*`,
	// 	element: <DefaultHeader />,
	// },
];

export default headers;
