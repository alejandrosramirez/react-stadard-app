import { RefAttributes } from "react";
import { ColorInputProps } from "@mantine/core";

export interface IRHFColorInput extends ColorInputProps, RefAttributes<HTMLInputElement> {
	label?: string;
	name: string;
}
