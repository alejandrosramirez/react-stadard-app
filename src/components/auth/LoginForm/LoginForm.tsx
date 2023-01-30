import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { Button, Grid } from "@mantine/core";
import { IconLock as Lock, IconMail as Mail } from "@tabler/icons-react";

import { auth } from "@/api/auth";
import { FormProvider, RHFPasswordInput, RHFTextInput } from "@core/components/HookForm";
import { useHandleServerRequest, useLogin } from "@core/hooks";
import { ILoginParams } from "@interfaces/api/authManagerApi";

const { useLoginMutation } = auth;

const LoginForm = () => {
	const { handleLogin } = useLogin();

	const [submitForm] = useLoginMutation();
	const { handleServerRequest } = useHandleServerRequest();

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
		const user = await submitForm(data).unwrap();

		handleLogin(user);
	};

	const {
		formState: { isSubmitting },
		setError,
	} = formMethods;

	const onSubmit = (data: ILoginParams) =>
		handleServerRequest(() => handleSubmit(data), setError);

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

				<Grid.Col span={12}>
					<Button type="submit" loading={isSubmitting} fullWidth>
						Iniciar Sesión
					</Button>
				</Grid.Col>
			</Grid>
		</FormProvider>
	);
};

export default LoginForm;
