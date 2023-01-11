import { Controller, useFormContext } from "react-hook-form";
import { Checkbox } from "@mantine/core";
import { useFocusWithin } from "@mantine/hooks";

import { IRHFCheckbox } from "@interfaces/core/components/HookForm/RHFCheckbox";

const RHFCheckbox = ({ label, name, ...rest }: IRHFCheckbox) => {
	const { control } = useFormContext();
	const { ref } = useFocusWithin();

	return (
		<Controller
			name={name}
			control={control}
			render={({ field, fieldState: { error } }) => (
				<Checkbox
					{...field}
					{...rest}
					id={name}
					ref={ref}
					label={error?.message ? error.message : label}
					error={!!error}
					checked={field.value}
				/>
			)}
		/>
	);
};

export default RHFCheckbox;
