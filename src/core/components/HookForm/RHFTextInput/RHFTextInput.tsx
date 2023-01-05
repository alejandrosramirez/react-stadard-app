import { useFormContext, Controller } from "react-hook-form";
import { TextInput } from "@mantine/core";
import { useFocusWithin } from "@mantine/hooks";

import { IRHFTextInput } from "@interfaces/core/components/HookForm/RHFTextInput";

const RHFTextInput = ({ label, name, ...rest }: IRHFTextInput) => {
	const { control } = useFormContext();
	const { ref } = useFocusWithin();

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
				/>
			)}
		/>
	);
};

export default RHFTextInput;
