import { Card, Center, Image, Stack } from "@mantine/core";

import logo from "@assets/logo.svg";
import { IMainLayout } from "@interfaces/components/auth/MainLayout";

import styles from "./styles";

const MainLayout = ({ children, className }: IMainLayout) => {
	const { classes } = styles();

	const containerClassName = className ? className : classes.container;

	return (
		<div className={containerClassName}>
			<Card px={20} py={30} className={classes.card}>
				<Stack align="stretch" justify="center" spacing={30}>
					<Center>
						<Image src={logo} alt="logo" width={100} />
					</Center>

					{children}
				</Stack>
			</Card>
		</div>
	);
};

export default MainLayout;
