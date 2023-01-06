import { Burger, Header as MantineHeader, MediaQuery } from "@mantine/core";

import { ToggleTheme } from "@core/components";
import { IHeader } from "@interfaces/core/layouts/DashboardLayout/Header";
import styles from "./styles";

const Header = ({ opened, setOpened }: IHeader) => {
	const { classes, theme } = styles();

	return (
		<MantineHeader height={70} className={classes.header}>
			<div className={classes.inner}>
				<div className={classes.inner}>
					<MediaQuery largerThan="sm" styles={{ display: "none" }}>
						<Burger
							mr="xl"
							size="md"
							opened={opened}
							color={theme.colors.gray[6]}
							onClick={() => setOpened((o) => !o)}
						/>
					</MediaQuery>


				</div>

				<div className={classes.tools}>
					<div className={classes.leftTools}>
						<MediaQuery
							smallerThan="sm"
							styles={{ display: "none" }}
						>
							<h1>Hi</h1>
						</MediaQuery>
					</div>

					<div className={classes.rightTools}>
						<ToggleTheme />
					</div>
				</div>
			</div>
		</MantineHeader>
	);
};

export default Header;
