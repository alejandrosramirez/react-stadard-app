import { Controller, useFormContext } from "react-hook-form";
import { ColorPicker, Text } from "@mantine/core";
import { useFocusWithin } from "@mantine/hooks";

import { defaultSwatches } from "@core/constants";

const RHFColorPicker = ({
	label,
	name,
	swatches,
	...rest
}: CORE.Components.IRHFColorPicker) => {
	const { control } = useFormContext();
	const { ref } = useFocusWithin();

	return (
		<Controller
			name={name}
			control={control}
			render={({ field, fieldState: { error } }) => (
				<div>
					<Text>{error?.message ? error.message : label}</Text>
					<ColorPicker
						{...field}
						{...rest}
						id={name}
						ref={ref}
						swatches={swatches ?? defaultSwatches}
						withPicker={false}
						fullWidth
					/>
					<Text align="center" sx={{ marginTop: 5 }}>
						{field.value}
					</Text>
				</div>
			)}
		/>
	);
};

export default RHFColorPicker;
