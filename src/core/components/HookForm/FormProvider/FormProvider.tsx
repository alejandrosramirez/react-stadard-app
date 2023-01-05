import { FormProvider as Form } from "react-hook-form";

import { IFormProvider } from "@interfaces/core/components/HookForm/FormProvider";

const FormProvider = ({ children, onSubmit, methods }: IFormProvider) => {
	return (
		<Form {...methods}>
			<form onSubmit={onSubmit}>{children}</form>
		</Form>
	);
};

export default FormProvider;
