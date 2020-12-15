import React, { useCallback } from "react";
import { useOverrides } from "@quarkly/components";
import { Input } from "@quarkly/widgets";
const defaultProps = {};
const overrides = {
	label: {
		kind: "Text",
		props: {
			"children": "Label name"
		}
	},
	input: {
		kind: "Input",
		props: {
			margin: "0px 0px 8px 0px"
		}
	}
};
export default function Control({
	label,
	name,
	value,
	onChange,
	...props
}) {
	const onInputChange = useCallback(event => {
		const {
			target
		} = event;
		onChange(event, name, target?.value);
	}, [onChange, name]);
	const {
		override
	} = useOverrides(props, overrides, defaultProps);
	return <>
		<label {...override("label")}>
			{label}
		</label>
		<Input {...override("input")} onChange={onInputChange} value={value} />
	</>;
}
;