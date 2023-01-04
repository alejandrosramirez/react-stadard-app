import { Card, Center, Container, Image, Stack } from '@mantine/core';

import type { IMainLayout } from "@interfaces/components/auth/MainLayout";

import reactLogo from "@assets/react.svg";

import styles from "./styles";

const MainLayout = ({ children, className }: IMainLayout) => {
	const { classes } = styles();

	const containerClassName = className ? className : classes.container;

	return (
		<Container className={containerClassName}>
			<Card px={20} py={30} className={classes.card}>
				<Stack align="stretch" justify="center" spacing={30}>
					<Center>
						<Image src={reactLogo} alt="logo" width={100} />
					</Center>

					{children}
				</Stack>
			</Card>
		</Container>
	);
};

export default MainLayout;
