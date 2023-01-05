import { RefAttributes } from "react";
import { ColorPickerProps } from "@mantine/core";

export interface IRHFColorPicker extends ColorPickerProps, RefAttributes<HTMLDivElement> {
	label?: string;
	name: string;
}
