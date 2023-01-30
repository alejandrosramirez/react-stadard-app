import { Auth, LoginForm } from "@components/auth";
import { Message } from "@core/components";

const Login = () => {
	return (
		<Auth.MainLayout>
			<Message title="¡Hola!" subtitle="Si soy yo de nuevo" />

			<LoginForm />
		</Auth.MainLayout>
	);
};

export default Login;
