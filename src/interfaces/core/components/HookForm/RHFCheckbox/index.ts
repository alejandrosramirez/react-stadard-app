import { RefAttributes } from "react";
import { CheckboxProps } from "@mantine/core";

export interface IRHFCheckbox
	extends CheckboxProps,
		RefAttributes<HTMLInputElement> {
	label?: string;
	name: string;
}
