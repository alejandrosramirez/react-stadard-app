import { NavLink as ReactRouterDomNavLink } from "react-router-dom";
import { Box, Group, ThemeIcon, UnstyledButton } from "@mantine/core";

import { useActiveLink } from "@core/hooks";
import { INavLink } from "@interfaces/core/components/NavbarTools/NavLink";
import styles from "../styles";

const NavLink = ({ icon: NavLinkIcon, label, to }: INavLink) => {
	const { classes } = styles();

	const { activeLink } = useActiveLink();

	console.log("acctive: ", activeLink);

	return (
		<ReactRouterDomNavLink to={to} className={classes.link}>
			<UnstyledButton className={classes.control}>
				<Group position="apart" spacing={0}>
					<Box sx={{ display: "flex", alignItems: "center" }}>
						<ThemeIcon variant="light" size={30}>
							<NavLinkIcon size={18} />
						</ThemeIcon>
						<Box ml="md">{label}</Box>
					</Box>
				</Group>
			</UnstyledButton>
		</ReactRouterDomNavLink>
	);
};

export default NavLink;
