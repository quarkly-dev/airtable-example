import React, { useEffect, useState } from "react";
import Airtable from "airtable";
import { useOverrides, Stack } from "@quarkly/components";
import EmployeeCard from "./EmployeeCard";
const base = new Airtable({
	apiKey: 'keyfXFTNzyz4R8sID'
}).base('appWw7KBKSc9bPjZE');
const defaultProps = {
	"margin-top": "40px"
};
const overrides = {};

const StaffTable = props => {
	const {
		rest
	} = useOverrides(props, overrides, defaultProps);
	const [employees, setEmployees] = useState([]);
	useEffect(() => {
		base('Employee directory').select({
			view: "All employees"
		}).all((err, records) => {
			console.log(records);
			setEmployees(records.map(({
				id,
				fields
			}) => ({
				id,
				...fields
			})));
		});
	}, []);
	return <Stack {...rest}>
		{employees.map(employee => <EmployeeCard key={employee.id} employee={employee} />)}
	</Stack>;
};

Object.assign(StaffTable, { ...Stack,
	defaultProps,
	overrides
});
export default StaffTable;