import { Text } from "@mantine/core";

import { Auth, LoginForm } from "@components/auth";
import Message from "@components/Message";

const Login = () => {
	return (
		<Auth.MainLayout>
			<Message title="¡Hola!" subtitle="Si soy yo de nuevo" />

			<LoginForm />
		</Auth.MainLayout>
	);
};

export default Login;
