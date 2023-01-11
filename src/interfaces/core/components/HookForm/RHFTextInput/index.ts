import { RefAttributes } from "react";
import { TextInputProps } from "@mantine/core";

export interface IRHFTextInput
	extends TextInputProps,
		RefAttributes<HTMLInputElement> {
	label?: string;
	name: string;
}
