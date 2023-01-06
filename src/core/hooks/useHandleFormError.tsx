import { IError } from "@interfaces/globals/error";

const useHandleFormError = () => {
	const handleFormError = async (onSubmit: () => Promise<void>) => {
		try {
			await onSubmit();
		} catch (error) {
			const serverError = error as IError;

			console.log(serverError);
		}
	};

	return {
		handleFormError,
	};
};

export default useHandleFormError;
