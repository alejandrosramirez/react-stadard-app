import { ReactElement } from "react";
import { MantineProviderProps } from "@mantine/core";

export interface ICustomMantineProvider extends MantineProviderProps {
	children: ReactElement | ReactElement[];
}
