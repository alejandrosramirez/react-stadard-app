import { Controller, useFormContext } from "react-hook-form";
import { Textarea } from "@mantine/core";
import { useFocusWithin } from "@mantine/hooks";

import { IRHFTextarea } from "@interfaces/core/components/HookForm/RHFTextarea";

const RHFTextarea = ({
	label,
	name,
	autosize = false,
	...rest
}: IRHFTextarea) => {
	const { control } = useFormContext();
	const { ref } = useFocusWithin();

	return (
		<Controller
			name={name}
			control={control}
			render={({ field, fieldState: { error } }) => (
				<Textarea
					{...field}
					{...rest}
					id={name}
					ref={ref}
					label={error?.message ? error.message : label}
					error={!!error}
					autosize={autosize}
				/>
			)}
		/>
	);
};

export default RHFTextarea;
