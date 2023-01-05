import { Controller, useFormContext } from "react-hook-form";
import { MultiSelect } from "@mantine/core";
import { useFocusWithin } from "@mantine/hooks";

import { IRHFMultiSelect } from "@interfaces/core/components/HookForm/RHFMultiSelect";

const RHFMultiSelect = ({
	label,
	name,
	clearable = true,
	data,
	...rest
}: IRHFMultiSelect) => {
	const { control } = useFormContext();
	const { ref } = useFocusWithin();

	return (
		<Controller
			name={name}
			control={control}
			render={({ field, fieldState: { error } }) => (
				<MultiSelect
					{...field}
					{...rest}
					id={name}
					ref={ref}
					label={error?.message ? error.message : label}
					error={!!error}
					data={data}
					clearable={clearable}
					searchable
				/>
			)}
		/>
	);
};

export default RHFMultiSelect;
