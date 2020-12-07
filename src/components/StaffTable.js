import React, { useEffect, useState } from "react";
import { useOverrides, Stack } from "@quarkly/components";
import EmployeeCard from "./EmployeeCard";
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
		fetch("https://api.airtable.com/v0/appWw7KBKSc9bPjZE/Employee%20directory?view=All%20employees", {
			headers: {
				'Authorization': 'Bearer keyfXFTNzyz4R8sID'
			}
		}).then(response => response.json()).then(data => setEmployees(data.records.map(({
			fields
		}) => fields)));
	}, []);
	return <Stack {...rest}>
		{employees.map(employee => <EmployeeCard employee={employee} />)}
	</Stack>;
};

Object.assign(StaffTable, { ...Stack,
	defaultProps,
	overrides
});
export default StaffTable;