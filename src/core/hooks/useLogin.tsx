import { useDispatch } from "react-redux";

import { setUser } from "@store/slices/authSlice";

const useLogin = () => {
	const dispatch = useDispatch();

	const handleLogin = (user: API.Auth.ILogin) =>
		dispatch(setUser({ isLogged: true, ...user }));

	return {
		handleLogin,
	};
};

export default useLogin;
