import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Grid } from "@mantine/core";
import { IconLock as Lock, IconMail as Mail } from "@tabler/icons";

import { authManagerApi } from "@api/authManagerApi";
import { FormProvider, RHFPasswordInput, RHFTextInput } from "@core/components/HookForm";
import { useHandleFormError } from "@core/hooks";
import { ILoginParams } from "@interfaces/api/authManagerApi";

const { useLoginMutation } = authManagerApi;

const LoginForm = () => {
	const [submitForm] = useLoginMutation();
	const { handleFormError } = useHandleFormError();

	const loginSchema = Yup.object().shape({
		email: Yup.string()
			.email("El correo ingresado no es válido")
			.required("Debes de ingresar un correo electrónico"),
		password: Yup.string().required("Debes de ingresar una contraseña"),
	});

	const defaultValues: ILoginParams = {
		email: "",
		password: "",
	};

	const formMethods = useForm<ILoginParams>({
		resolver: yupResolver(loginSchema),
		defaultValues,
	});

	const { handleSubmit: submitRHF } = formMethods;

	const handleSubmit = async (data: ILoginParams) => {
		const resp = await submitForm(data).unwrap();
		console.log(resp);
	};

	const onSubmit = (data: ILoginParams) => handleFormError(() => handleSubmit(data))

	return (
		<FormProvider methods={formMethods} onSubmit={submitRHF(onSubmit)}>
			<Grid>
				<Grid.Col span={12}>
					<RHFTextInput
						label="Correo electrónico"
						name="email"
						placeholder="usuario@empresa.com"
						icon={<Mail size={14} />}
					/>
				</Grid.Col>

				<Grid.Col span={12}>
					<RHFPasswordInput
						label="Contraseña"
						name="password"
						placeholder="•••••••••••••••"
						icon={<Lock size={14} />}
					/>
				</Grid.Col>
			</Grid>
		</FormProvider>
	);
};

export default LoginForm;
