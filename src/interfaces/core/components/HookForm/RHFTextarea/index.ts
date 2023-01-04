import { RefAttributes } from "react";
import { TextareaProps } from "@mantine/core";

export interface IRHFTextarea extends TextareaProps, RefAttributes<HTMLTextAreaElement> {
	label?: string;
	name: string;
}
