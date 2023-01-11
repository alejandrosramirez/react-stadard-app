import { Controller, useFormContext } from "react-hook-form";
import { Switch } from "@mantine/core";
import { useFocusWithin } from "@mantine/hooks";

import { IRHFSwitch } from "@interfaces/core/components/HookForm/RHFSwitch";

const RHFSwitch = ({ label, name, onChange, ...rest }: IRHFSwitch) => {
	const { control } = useFormContext();
	const { ref } = useFocusWithin();

	const handleOnChange =
		(fieldOnChange: (value: any) => void) => (event: any) => {
			if (typeof onChange === "function") {
				onChange(event);
			}

			fieldOnChange(event);
		};

	return (
		<Controller
			name={name}
			control={control}
			render={({ field, fieldState: { error } }) => (
				<Switch
					{...field}
					{...rest}
					id={name}
					ref={ref}
					label={error?.message ? error.message : label}
					error={!!error}
					checked={field.value}
					onChange={handleOnChange(field.onChange)}
				/>
			)}
		/>
	);
};

export default RHFSwitch;
