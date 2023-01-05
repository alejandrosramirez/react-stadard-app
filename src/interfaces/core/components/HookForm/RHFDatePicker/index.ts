import { RefAttributes } from "react";
import { DatePickerProps } from "@mantine/dates";

export interface IRHFDatePicker extends DatePickerProps, RefAttributes<HTMLInputElement> {
	label?: string;
	name: string;
	placeholder: string;
	locale: "es" | "en";
	format: string;
}
