import { RefAttributes } from "react";
import { DateRangePickerProps } from "@mantine/dates";

export interface IRHFDateRangePicker
	extends DateRangePickerProps,
		RefAttributes<HTMLInputElement> {
	label?: string;
	name: string;
	placeholder: string;
	locale: "es" | "en";
	format: string;
}
