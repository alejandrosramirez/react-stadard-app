import { UseFormSetError } from "react-hook-form";
import { showNotification } from "@mantine/notifications";
import { IconX as X } from "@tabler/icons";

import { IServerError } from "@interfaces/globals/serverError";

const useHandleFormError = () => {
	const handleFormError = async (
		onSubmit: () => Promise<void>,
		setError: UseFormSetError<any>
	) => {
		try {
			await onSubmit();
		} catch (error) {
			const { data } = error as IServerError;

			if (data.status === 422) {
				// handle form validation
				// handle your own validation server errors from selected backend
				// this is a Laravel example
				// by the way don't use it if it's not necessary
				Object.entries(data.message as Record<string, any>).map(
					(error) => {
						setError(error[0], {
							message: error[1].join("<br />"),
						});
					}
				);
			} else {
				// Show a custom message with any other status code
				showNotification({
					message: data.message as string,
					color: "red",
					icon: <X size={16} />,
				});
			}
		}
	};

	return {
		handleFormError,
	};
};

export default useHandleFormError;
