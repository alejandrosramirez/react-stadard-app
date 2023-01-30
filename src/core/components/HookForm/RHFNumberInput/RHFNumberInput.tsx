import { Controller, useFormContext } from "react-hook-form";
import { NumberInput } from "@mantine/core";
import { useFocusWithin } from "@mantine/hooks";

const RHFNumberInput = ({ label, name, ...rest }: CORE.Components.IRHFNumberInput) => {
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
