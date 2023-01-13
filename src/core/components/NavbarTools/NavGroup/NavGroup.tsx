import { useState } from "react";
import { NavLink as ReactRouterDomNavLink } from "react-router-dom";
import { Box, Collapse, Group, ThemeIcon, UnstyledButton } from "@mantine/core";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons";

import { isValidArray } from "@helpers";
import { INavGroup } from "@/interfaces/core/components/Navbar/NavGroup";
import styles from "../styles";

const NavGroup = ({ icon: NavGroupIcon, label, links }: INavGroup) => {
	const { classes, theme } = styles();

	const hasLinks = isValidArray(links);

	const [opened, setOpened] = useState(false);

	const items = (hasLinks ? links : []).map(({ label, to }) => (
		<ReactRouterDomNavLink to={to} key={label} className={classes.sublink}>
			{label}
		</ReactRouterDomNavLink>
	));

	const ChevronIcon = theme.dir === "ltr" ? IconChevronRight : IconChevronLeft;

	return (
		<>
			<UnstyledButton
				onClick={() => setOpened((o) => !o)}
				className={classes.control}
			>
				<Group position="apart" spacing={0}>
					<Box sx={{ display: "flex", alignItems: "center" }}>
						<ThemeIcon variant="light" size={30}>
							<NavGroupIcon size={18} />
						</ThemeIcon>
						<Box ml="md">{label}</Box>
					</Box>

					<ChevronIcon
						size={14}
						stroke={1.5}
						style={{
							transform: opened
								? `rotate(${theme.dir === "rtl" ? -90 : 90}deg)`
								: "none",
						}}
						className={classes.chevron}
					/>
				</Group>
			</UnstyledButton>

			<Collapse in={opened}>{items}</Collapse>
		</>
	);
};

export default NavGroup;
