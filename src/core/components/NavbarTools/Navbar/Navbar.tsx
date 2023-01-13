import { useEffect, useState } from "react";
import { Navbar as MantineNavbar, ScrollArea, Transition } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

import { NavGroup, NavLink } from "@core/components";
import { navbarBaseWidth, navbarSmWidth } from "@core/constants";
import { INavGroup } from "@interfaces/core/components/NavbarTools/NavGroup";
import { INavLink } from "@interfaces/core/components/NavbarTools/NavLink";
import { INavbar } from "@/interfaces/core/components/NavbarTools/Navbar";
import LinksManager from "@routes/LinksManager";
import styles from "./styles";

const Navbar = ({ opened }: INavbar) => {
	const { classes, theme } = styles();

	const [navbarWidth, setNavbarWidth] = useState(navbarBaseWidth);

	const links = LinksManager.map((link: INavGroup | INavLink) => {
		if ("links" in link) {
			return <NavGroup {...link} key={link.label} />;
		}

		return <NavLink {...link} key={link.label} />;
	});

	const maxWidthSm = useMediaQuery(`(max-width: ${theme.breakpoints.sm}px)`);
	const minWidthSm = useMediaQuery(`(min-width: ${theme.breakpoints.sm}px)`);

	const isDisplaySm = maxWidthSm && minWidthSm;

	useEffect(() => {
		if (isDisplaySm) {
			setNavbarWidth(navbarSmWidth);
			return;
		}

		setNavbarWidth(navbarBaseWidth);
	}, [maxWidthSm, minWidthSm]);

	return (
		<Transition
			mounted={navbarBaseWidth === navbarWidth}
			transition="scale-x"
			duration={400}
			timingFunction="ease"
		>
			{(styles) => (
				<MantineNavbar
					p="md"
					hiddenBreakpoint="sm"
					hidden={!opened}
					style={styles}
					width={{
						sm: navbarBaseWidth,
						md: navbarBaseWidth,
						lg: navbarBaseWidth,
					}}
					onMouseLeave={() => {
						if (isDisplaySm) {
							setNavbarWidth(navbarSmWidth);
						}
					}}
					onMouseEnter={() => {
						if (isDisplaySm) {
							setNavbarWidth(navbarBaseWidth);
						}
					}}
					className={classes.navbar}
				>
					<MantineNavbar.Section
						grow
						component={ScrollArea}
						className={classes.links}
					>
						<div className={classes.linksInner}>{links}</div>
					</MantineNavbar.Section>
				</MantineNavbar>
			)}
		</Transition>
	);
};

export default Navbar;
