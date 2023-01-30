import { Controller, useFormContext } from "react-hook-form";
import { ColorInput } from "@mantine/core";
import { useFocusWithin } from "@mantine/hooks";

import { defaultSwatches } from "@core/constants";

const RHFColorInput = ({
	label,
	name,
	swatches,
	...rest
}: CORE.Components.IRHFColorInput) => {
	const { control } = useFormContext();
	const { ref } = useFocusWithin();

	return (
		<Controller
			name={name}
			control={control}
			render={({ field, fieldState: { error } }) => (
				<ColorInput
					{...field}
					{...rest}
					id={name}
					ref={ref}
					label={error?.message ? error.message : label}
					error={!!error}
					swatches={swatches ?? defaultSwatches}
					disallowInput
					withPicker={false}
				/>
			)}
		/>
	);
};

export default RHFColorInput;
