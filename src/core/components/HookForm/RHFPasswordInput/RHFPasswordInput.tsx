import { Controller, useFormContext } from "react-hook-form";
import { PasswordInput } from "@mantine/core";
import { useFocusWithin } from "@mantine/hooks";
import { IconEye as Eye, IconEyeOff as EyeOff } from "@tabler/icons";

import styles from "@core/components/HookForm/styles";
import {
	IRHFPasswordInput,
	IGetVisibilityIcon,
} from "@interfaces/core/components/HookForm/RHFPasswordInput";

const RHFPasswordInput = ({ label, name, onChange, ...rest }: IRHFPasswordInput) => {
	const { control } = useFormContext();
	const { ref } = useFocusWithin();

	const { classes } = styles();

	const handleOnChange = (fieldOnChange: (value: any) => void) => (event: any) => {
		if (typeof onChange === "function") {
			onChange(event);
		}

		fieldOnChange(event);
	};

	const getVisibilityIcon = ({ reveal, size }: IGetVisibilityIcon) =>
		reveal ? <EyeOff size={size} /> : <Eye size={size} />;

	return (
		<Controller
			name={name}
			control={control}
			render={({ field, fieldState: { error } }) => (
				<PasswordInput
					{...field}
					{...rest}
					id={name}
					ref={ref}
					label={error?.message ? error.message : label}
					error={!!error}
					visibilityToggleIcon={getVisibilityIcon}
					onChange={handleOnChange(field.onChange)}
					autoComplete="off"
					classNames={{
						innerInput: classes.innerInput,
						invalid: classes.invalidPassword,
						input: classes.inputPassword,
						label: `${classes.label} ${error && classes.labelError}`,
					}}
				/>
			)}
		/>
	);
};

export default RHFPasswordInput;
