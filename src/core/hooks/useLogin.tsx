import { useDispatch } from "react-redux";

import { setUser } from "@store/slices/authSlice";
import { ILogin } from "@interfaces/api/authManagerApi";

const useLogin = () => {
	const dispatch = useDispatch();

	const handleLogin = (user: ILogin) => dispatch(setUser({ isLogged: true, ...user }));

	return {
		handleLogin,
	};
};

export default useLogin;
