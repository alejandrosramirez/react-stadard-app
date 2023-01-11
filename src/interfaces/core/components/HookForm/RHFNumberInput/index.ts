import { RefAttributes } from "react";
import { NumberInputProps } from "@mantine/core";

export interface IRHFNumberInput
	extends NumberInputProps,
		RefAttributes<HTMLInputElement> {
	label?: string;
	name: string;
}
