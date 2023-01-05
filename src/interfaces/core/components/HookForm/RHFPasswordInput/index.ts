import { RefAttributes } from "react";
import { PasswordInputProps } from "@mantine/core";

export interface IRHFPasswordInput extends PasswordInputProps, RefAttributes<HTMLInputElement> {
	label?: string;
	name: string;
	onChange?: (value: any) => void;
}

export interface IGetVisibilityIcon {
	reveal: boolean;
	size: number;
}
