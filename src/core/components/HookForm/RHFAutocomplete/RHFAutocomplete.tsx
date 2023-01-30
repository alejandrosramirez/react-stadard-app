import { useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { Autocomplete } from "@mantine/core";
import { useFocusWithin } from "@mantine/hooks";

import { baseManagerApi } from "@api/base";
import { useDebouncedCallback } from "@core/hooks";
import { isValidArray } from "@helpers";

const { useLazyGetQuery } = baseManagerApi;

const RHFAutocomplete = ({
	label,
	name,
	param,
	query = {},
	buildOptions,
	...rest
}: CORE.Components.IRHFAutocomplete) => {
	const { control } = useFormContext();
	const { ref } = useFocusWithin();

	const [fetch] = useLazyGetQuery();

	const [data, setData] = useState<any[]>([]);

	const handleSearch = useDebouncedCallback(async (search = "") => {
		const resp = await fetch({
			module: param,
			params: { ...query, search },
		}).unwrap();

		if (!isValidArray(resp?.data)) {
			setData([]);
			return;
		}

		setData(buildOptions(resp.data));
	}, 700);

	return (
		<Controller
			name={name}
			control={control}
			render={({ field, fieldState: { error } }) => (
				<Autocomplete
					{...field}
					{...rest}
					id={name}
					ref={ref}
					label={error?.message ? error.message : label}
					error={!!error}
					data={data}
					onChange={(value) => {
						handleSearch(value);
						field.onChange(value);
					}}
				/>
			)}
		/>
	);
};

export default RHFAutocomplete;
