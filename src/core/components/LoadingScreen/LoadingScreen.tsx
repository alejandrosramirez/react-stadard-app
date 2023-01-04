import { useLocation } from "react-router-dom";

import { Group, Loader } from "@mantine/core";

import styles from "./styles";

const LoadingScreen = () => {
	const { classes } = styles();

	const { pathname } = useLocation();

	const getClassNameOfLayoutType = () =>
		pathname.includes("dashboard") ? classes.dashboard : classes.auth;

	return (
		<Group position="center" className={getClassNameOfLayoutType()}>
			<div className={classes.spinnerContainer}>
				<Loader color="gray" size={90} />
			</div>

			<img
				src="https://seeklogo.com/images/M/mantine-logo-235E19C978-seeklogo.com.png"
				alt="logo"
				width={85}
			/>
		</Group>
	);
};

export default LoadingScreen;
