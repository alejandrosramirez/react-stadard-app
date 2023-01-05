import { Controller, useFormContext } from "react-hook-form";
import { NumberInput } from "@mantine/core";
import { useFocusWithin } from "@mantine/hooks";

import { IRHFNumberInput } from "@interfaces/core/components/HookForm/RHFNumberInput";

const RHFNumberInput = ({ label, name, ...rest }: IRHFNumberInput) => {
	const { control } = useFormContext();
	const { ref } = useFocusWithin();

	return (
		<Controller
			name={name}
			control={control}
			render={({ field, fieldState: { error } }) => (
				<NumberInput
					{...field}
					{...rest}
					id={name}
					ref={ref}
					label={error?.message ? error.message : label}
					error={!!error}
				/>
			)}
		/>
	);
};

export default RHFNumberInput;
