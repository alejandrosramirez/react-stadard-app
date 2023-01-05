import { RefAttributes } from "react";
import { AutocompleteProps } from "@mantine/core";

export interface IRHFAutocomplete extends AutocompleteProps, RefAttributes<HTMLInputElement> {
	label?: string;
	name: string;
	param: string;
	query?: {};
	labelKey?: string;
	valueKey?: string;
	callback: (value: any) => void;
	buildOptions: (data: any[]) => any[];
}
