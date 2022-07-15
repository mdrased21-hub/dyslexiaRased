import React, { useState } from 'react';
import { componentsMenu } from '../../../menu';
import SubHeader, { SubHeaderLeft } from '../../../layout/SubHeader/SubHeader';
import Breadcrumb from '../../../components/bootstrap/Breadcrumb';
import Page from '../../../layout/Page/Page';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import Card, {
	CardBody,
	CardCodeView,
	CardHeader,
	CardLabel,
	CardTitle,
} from '../../../components/bootstrap/Card';
import useSortableData from '../../../hooks/useSortableData';
import PaginationButtons, { dataPagination } from '../../../components/PaginationButtons';
import useSelectTable from '../../../hooks/useSelectTable';
import Checks from '../../../components/bootstrap/forms/Checks';
import Icon from '../../../components/icon/Icon';

const TablePage = () => {
	const _generalUsage = `
const Foo = () => {
	const data = [
		{id: 1, firstName: 'John', lastName: 'Doe' },
		{id: 2, firstName: 'Ella', lastName: 'Oliver' },
		{id: 3, firstName: 'Sam', lastName: 'Roberts' },
		{id: 4, firstName: 'Grace', lastName: 'Buckland' },
		{id: 5, firstName: 'Jane', lastName: 'Lee' },
		{id: 6, firstName: 'Chloe', lastName: 'Walker' },
		{id: 7, firstName: 'Ryan', lastName: 'McGrath' },
	];

	const [currentPage, setCurrentPage] = useState(1);
	const [perPage, setPerPage] = useState(10);

	const { items, requestSort, getClassNamesFor } = useSortableData(filteredData);
	/**
	  *
	  * items: Array
	  * requestSort: Function
	  * getClassNamesFor: Function
	  *
	  */
	const onCurrentPageData = dataPagination(items, currentPage, perPage);
	/**
	  *
	  * onCurrentPageData: Array
	  *
	  */
	const { selectTable, SelectAllCheck } = useSelectTable(onCurrentPageData);
	/**
	  *
	  * selectTable: Object
	  * SelectAllCheck: Node
	  *
	  */

	return (
		<Card>
			<CardBody>
				<table>
					<thead className='table table-modern'>
						<tr>
							<th>{SelectAllCheck}</th>
							<th onClick={() => requestSort('firstName')}>
								First Name
								<Icon
									size='lg'
									className={getClassNamesFor('firstName')}
									icon='FilterList'
								/>
							</th>
							<th onClick={() => requestSort('lastName')}>
								Last Name
								<Icon
									size='lg'
									className={getClassNamesFor('lastName')}
									icon='FilterList'
								/>
							</th>
						</tr>
					</thead>
					<tbody>
						{onCurrentPageData.map((item) => (
							<tr key={item.id.toString()}>
								<td>
									<Checks
										id={item.id.toString()}
										name='selectedList'
										value={item.id}
										onChange={selectTable.handleChange}
										checked={selectTable.values.selectedList.includes( item.id.toString() )}
									/>
								</td>
								<td>{item.firstName}</td>
								<td>{item.lastName}</td>
							</tr>
						))}
					</tbody>
				</table>
			</CardBody>
			<PaginationButtons
				data={items}
				label='items'
				setCurrentPage={setCurrentPage}
				currentPage={currentPage}
				perPage={perPage}
				setPerPage={setPerPage}
			/>
		</Card>
	);
}`;

	const data = [
		{ id: 1, firstName: 'John', lastName: 'Doe' },
		{ id: 2, firstName: 'Ella', lastName: 'Oliver' },
		{ id: 3, firstName: 'Sam', lastName: 'Roberts' },
		{ id: 4, firstName: 'Grace', lastName: 'Buckland' },
		{ id: 5, firstName: 'Jane', lastName: 'Lee' },
		{ id: 6, firstName: 'Chloe', lastName: 'Walker' },
		{ id: 7, firstName: 'Ryan', lastName: 'McGrath' },
	];

	const [currentPage, setCurrentPage] = useState(1);
	const [perPage, setPerPage] = useState(3);

	const { items, requestSort, getClassNamesFor } = useSortableData(data);
	const onCurrentPageData = dataPagination(items, currentPage, perPage);
	const { selectTable, SelectAllCheck } = useSelectTable(onCurrentPageData);

	return (
		<PageWrapper title={componentsMenu.components.subMenu.table.text}>
			<SubHeader>
				<SubHeaderLeft>
					<Breadcrumb
						list={[
							{
								title: componentsMenu.components.text,
								to: `/${componentsMenu.components.path}`,
							},
							{
								title: componentsMenu.components.subMenu.table.text,
								to: `/${componentsMenu.components.subMenu.table.path}`,
							},
						]}
					/>
				</SubHeaderLeft>
			</SubHeader>
			<Page>
				<div className='row'>
					<div className='col-12'>
						<Card>
							<CardHeader>
								<CardLabel icon='Assignment'>
									<CardTitle>General Usage</CardTitle>
								</CardLabel>
							</CardHeader>
							<CardBody>
								<CardCodeView>{_generalUsage}</CardCodeView>
							</CardBody>
						</Card>
					</div>
					<div className='col-12'>
						<Card>
							<CardBody>
								<table className='table table-modern'>
									<thead>
										<tr>
											<th style={{ width: 50 }}>{SelectAllCheck}</th>
											<th
												onClick={() => requestSort('firstName')}
												className='cursor-pointer text-decoration-underline'>
												First Name{' '}
												<Icon
													size='lg'
													className={getClassNamesFor('firstName')}
													icon='FilterList'
												/>
											</th>
											<th
												onClick={() => requestSort('lastName')}
												className='cursor-pointer text-decoration-underline'>
												Last Name{' '}
												<Icon
													size='lg'
													className={getClassNamesFor('lastName')}
													icon='FilterList'
												/>
											</th>
										</tr>
									</thead>
									<tbody>
										{onCurrentPageData.map((item) => (
											<tr key={item.id}>
												<td>
													<Checks
														id={item.id.toString()}
														name='selectedList'
														value={item.id}
														onChange={selectTable.handleChange}
														checked={selectTable.values.selectedList.includes(
															item.id.toString(),
														)}
													/>
												</td>
												<td>{item.firstName}</td>
												<td>{item.lastName}</td>
											</tr>
										))}
									</tbody>
								</table>
							</CardBody>
							<PaginationButtons
								data={items}
								label='items'
								setCurrentPage={setCurrentPage}
								currentPage={currentPage}
								perPage={perPage}
								setPerPage={setPerPage}
							/>
						</Card>
					</div>
				</div>
			</Page>
		</PageWrapper>
	);
};

export default TablePage;
