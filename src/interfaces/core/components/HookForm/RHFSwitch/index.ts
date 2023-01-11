import { RefAttributes } from "react";
import { SwitchProps } from "@mantine/core";

export interface IRHFSwitch
	extends SwitchProps,
		RefAttributes<HTMLInputElement> {
	label?: string;
	name: string;
	onChange?: (value: any) => void;
}
