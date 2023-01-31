import { useFormContext, Controller } from "react-hook-form";
import { TextInput } from "@mantine/core";
import { useFocusWithin } from "@mantine/hooks";

import styles from "../styles";

const RHFTextInput = ({ label, name, ...rest }: CORE.Components.IRHFTextInput) => {
	const { control } = useFormContext();
	const { ref } = useFocusWithin();

	const { classes } = styles();

	return (
		<Controller
			name={name}
			control={control}
			render={({ field, fieldState: { error } }) => (
				<TextInput
					{...field}
					{...rest}
					id={name}
					ref={ref}
					label={error?.message ? error.message : label}
					error={!!error}
					classNames={{
						invalid: classes.invalid,
						input: classes.input,
						label: `${classes.label} ${error && classes.labelError}`,
					}}
				/>
			)}
		/>
	);
};

export default RHFTextInput;
