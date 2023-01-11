import { RefAttributes } from "react";
import { SelectItem, SelectProps } from "@mantine/core";

export interface IRHFSelect
	extends SelectProps,
		RefAttributes<HTMLInputElement> {
	label?: string;
	name: string;
	clearable?: boolean;
	data: string[] | SelectItem[];
}
