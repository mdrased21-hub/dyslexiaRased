import React, { useEffect, useRef } from 'react';
import { useFormik } from 'formik';
import Checks from '../components/bootstrap/forms/Checks';

const useSelectTable = (data) => {
	const selectTable = useFormik({
		initialValues: {
			selectAll: false,
			selectedList: [],
		},
	});

	// Update Select List
	useEffect(() => {
		if (selectTable.values.selectAll) {
			selectTable.setValues({
				...selectTable.values,
				selectedList: data.map((d) => d.id.toString()),
			});
		} else {
			selectTable.setValues({
				...selectTable.values,
				selectedList: [],
			});
		}
		return () => {};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [selectTable.values.selectAll]);

	// Select All -- indeterminate
	const ref = useRef(null);
	useEffect(() => {
		if (
			!!selectTable.values.selectedList.length &&
			selectTable.values.selectedList.length !== data.map((d) => d.id.toString()).length
		) {
			ref.current.checked = false;
			ref.current.indeterminate = true;
		} else if (
			selectTable.values.selectedList.length === data.map((d) => d.id.toString()).length
		) {
			ref.current.checked = true;
			ref.current.indeterminate = false;
		} else if (selectTable.values.selectedList.length === 0) {
			ref.current.checked = false;
			ref.current.indeterminate = false;
		}
	}, [selectTable.values.selectAll, selectTable.values.selectedList, data]);

	const SelectAllCheck = (
		<Checks
			ref={ref}
			id='selectAll'
			onChange={selectTable.handleChange}
			checked={selectTable.values.selectAll}
		/>
	);

	const selectItemHandleChange = selectTable.handleChange;
	const selectedIdList = selectTable.values.selectedList;

	return { selectTable, selectItemHandleChange, selectedIdList, SelectAllCheck };
};
export default useSelectTable;
