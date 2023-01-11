import { RefAttributes } from "react";
import { FileInputProps } from "@mantine/core";

export interface IFileValue {
	file: File;
}

export interface IRHFFileInput
	extends FileInputProps,
		RefAttributes<HTMLInputElement> {
	label?: string;
	name: string;
}
