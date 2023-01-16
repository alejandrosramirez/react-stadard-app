import { ReactNode } from "react";
import { TableProps } from "@mantine/core";

export interface ISimpleTable extends TableProps {
	columns: {
		title: string | JSX.Element | ReactNode;
		align?: "left" | "center" | "right" | "justify" | "char";
	}[];
	rows: (JSX.Element | ReactNode)[];
	caption?: string | JSX.Element | ReactNode;
}
