import { ReactNode } from "react";
import { FormProviderProps, UseFormReturn } from "react-hook-form";

export interface IFormProvider extends FormProviderProps {
	children: ReactNode | ReactNode[];
	onSubmit: () => void;
	methods: UseFormReturn<any, any>;
}
