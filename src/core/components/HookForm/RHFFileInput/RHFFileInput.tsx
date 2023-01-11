import { useFormContext, Controller } from "react-hook-form";
import { FileInput } from "@mantine/core";
import { useFocusWithin } from "@mantine/hooks";

import { IRHFFileInput } from "@interfaces/core/components/HookForm/RHFFileInput";
import ValueComponent from "./ValueComponent";

const RHFFileInput = ({
	label,
	name,
	multiple = false,
	...rest
}: IRHFFileInput) => {
	const { control } = useFormContext();
	const { ref } = useFocusWithin();

	return (
		<Controller
			name={name}
			control={control}
			render={({ field, fieldState: { error } }) => (
				<FileInput
					{...field}
					{...rest}
					id={name}
					ref={ref}
					label={error?.message ? error.message : label}
					error={!!error}
					clearable
					multiple={multiple}
					valueComponent={ValueComponent}
				/>
			)}
		/>
	);
};

export default RHFFileInput;
