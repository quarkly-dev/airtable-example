import React from "react";
import { useOverrides, Override, StackItem } from "@quarkly/components";
import { Box, Text } from "@quarkly/widgets";
const defaultProps = {
	"width": "25%",
	"lg-width": "50%",
	"sm-width": "100%"
};
const overrides = {
	"box": {
		"kind": "Box",
		"props": {
			"height": "0",
			"margin": "0 0 20px 0",
			"padding-bottom": "100%",
			"background-size": "cover",
			"background-position": "center",
			"background-image": "url(https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=582&q=80) 50% 0/cover no-repeat"
		}
	},
	"title": {
		"kind": "Text",
		"props": {
			"color": "--grey",
			"margin": "0",
			"children": "Title"
		}
	},
	"name": {
		"kind": "Text",
		"props": {
			"as": "h3",
			"font": "--headline3",
			"margin": "5px 0 20px 0",
			"children": "Name"
		}
	},
	"location": {
		"kind": "Text",
		"props": {
			"as": "p",
			"margin": "20px 0 5px 0",
			"children": "Location"
		}
	},
	"Status": {
		"kind": "Text",
		"props": {
			"as": "p",
			"margin": "20px 0 5px 0",
			"children": "Status"
		}
	},
	"start_date": {
		"kind": "Text",
		"props": {
			"as": "p",
			"margin": "20px 0 5px 0",
			"children": "Start date"
		}
	},
	"department": {
		"kind": "Text",
		"props": {
			"as": "p",
			"margin": "20px 0 5px 0",
			"children": "Department"
		}
	},
	"reports_to": {
		"kind": "Text",
		"props": {
			"as": "p",
			"margin": "20px 0 5px 0",
			"children": "Reports to"
		}
	},
	"email": {
		"kind": "Text",
		"props": {
			"as": "p",
			"margin": "20px 0 5px 0",
			"children": "Email address"
		}
	},
	"phone": {
		"kind": "Text",
		"props": {
			"as": "p",
			"margin": "20px 0 5px 0",
			"children": "Phone"
		}
	},
	"address": {
		"kind": "Text",
		"props": {
			"as": "p",
			"margin": "20px 0 5px 0",
			"children": "Home address"
		}
	},
	"dob": {
		"kind": "Text",
		"props": {
			"as": "p",
			"margin": "20px 0 5px 0",
			"children": "DOB"
		}
	}
};

const EmployeeCard = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	const {
		employee = {}
	} = rest;

	const getUrl = employee => Array.isArray(employee.Photo) && employee.Photo[0] && employee.Photo[0].url;

	return <StackItem {...rest}>
		<Override slot="StackItemContent" flex-direction="column" />
		<Box {...override("box")} background-image={`url(${getUrl(employee)})`} />
		<Text {...override("title")} children={employee.Title} />
		<Text {...override("name")} children={employee.Name} />
		<Text {...override("location")} children={employee.Location} />
		<Text {...override("Status")} children={employee.Status} />
		<Text {...override("start_date")} children={employee['Start date']} />
		<Text {...override("department")} children={employee.Department} />
		<Text {...override("reports_to")} children={employee['Reports to']} />
		<Text {...override("email")} children={employee['Email address']} />
		<Text {...override("phone")} children={employee.Phone} />
		<Text {...override("address")} children={employee['Home address']} />
		<Text {...override("dob")} children={employee.DOB} />
		{children}
	</StackItem>;
};

Object.assign(EmployeeCard, { ...StackItem,
	defaultProps,
	overrides
});
export default EmployeeCard;