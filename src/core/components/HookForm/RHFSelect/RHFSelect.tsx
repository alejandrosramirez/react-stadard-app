import { Controller, useFormContext } from "react-hook-form";
import { Select } from "@mantine/core";
import { useFocusWithin } from "@mantine/hooks";

import { IRHFSelect } from "@interfaces/core/components/HookForm/RHFSelect";

const RHFSelect = ({ label, name, clearable = true, data, ...rest }: IRHFSelect) => {
	const { control } = useFormContext();
	const { ref } = useFocusWithin();

	return (
		<Controller
			name={name}
			control={control}
			render={({ field, fieldState: { error } }) => (
				<Select
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

export default RHFSelect;
