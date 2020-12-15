import React, { useCallback, useState } from "react";
import Airtable from "airtable";
import atomize from "@quarkly/atomize";
import { useOverrides } from "@quarkly/components";
import { Text, Button, Box } from "@quarkly/widgets";
import Control from "./Control";
const base = new Airtable({
	apiKey: 'keyfXFTNzyz4R8sID'
}).base('appWw7KBKSc9bPjZE');
const defaultProps = {
	"display": "flex",
	"flex-direction": "column",
	"max-width": "360px"
};
const overrides = {
	"text": {
		"kind": "Text",
		"props": {
			"font": "--headline2",
			"children": "Add employee"
		}
	},
	"button": {
		"kind": "Button",
		"props": {
			"type": "button",
			"margin": "24px 0px 0px 0px",
			"children": "Add"
		}
	}
};

function createRecord(data, update) {
	base('Employee directory').create([{
		"fields": { ...data
		}
	}], function (err, records) {
		if (err) {
			console.error(err);
			return;
		}

		console.log(records);
		update();
	});
}

const Form = atomize.form();

const AddForm = props => {
	const {
		override,
		rest
	} = useOverrides(props, overrides, defaultProps);
	const [formData, setFormData] = useState({});
	const onSubmit = useCallback(() => {
		createRecord(formData, () => window.location.reload());
	}, [formData]);
	const onChange = useCallback((event, name, value) => {
		setFormData(data => ({ ...data,
			[name]: value
		}));
	}, [setFormData]);
	return <Form {...rest}>
		<Text {...override("text")} />
		<Control label="Name" name="Name" onChange={onChange} />
		<Control label="Speciality" name="Title" onChange={onChange} />
		<Control label="Start on" name="Start date" onChange={onChange} />
		<Control label="Email" name="Email address" onChange={onChange} />
		<Control label="Phone" name="Phone" onChange={onChange} />
		<Control label="Address" name="Home address" onChange={onChange} />
		<Button {...override("button")} onClick={onSubmit} />
	</Form>;
};

Object.assign(AddForm, { ...Box,
	defaultProps,
	overrides
});
export default AddForm;