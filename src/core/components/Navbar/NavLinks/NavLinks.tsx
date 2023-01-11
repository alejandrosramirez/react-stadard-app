import { useState } from "react";
import { NavLink as ReactRouterDomNavLink } from "react-router-dom";
import { Box, Collapse, Group, ThemeIcon, UnstyledButton } from "@mantine/core";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons";

import { isValidArray } from "@helpers";
import { INavLinks } from "@interfaces/core/components/Navbar/NavLinks";
import styles from "./styles";

const NavLinks = ({ icon: Icon, label, initiallyOpened, links }: INavLinks) => {
	const { classes, theme } = styles();

	const hasLinks = isValidArray(links);

	const [opened, setOpened] = useState(initiallyOpened || false);

	const ChevronIcon =
		theme.dir === "ltr" ? IconChevronRight : IconChevronLeft;

	const items = (hasLinks ? links : []).map((link) => (
		<ReactRouterDomNavLink
			to={link.to}
			key={link.label}
			className={classes.link}
		>
			{link.label}
		</ReactRouterDomNavLink>
	));

	return (
		<>
			<UnstyledButton
				onClick={() => setOpened((o) => !o)}
				className={classes.control}
			>
				<Group position="apart" spacing={0}>
					<Box sx={{ display: "flex", alignItems: "center" }}>
						<ThemeIcon variant="light" size={30}>
							<Icon size={18} />
						</ThemeIcon>
						<Box ml="md">{label}</Box>
					</Box>

					{hasLinks && (
						<ChevronIcon
							size={14}
							stroke={1.5}
							style={{
								transform: opened
									? `rotate(${
											theme.dir === "rtl" ? -90 : 90
									  }deg)`
									: "none",
							}}
							className={classes.chevron}
						/>
					)}
				</Group>
			</UnstyledButton>

			{hasLinks ? <Collapse in={opened}>{items}</Collapse> : null}
		</>
	);
};

export default NavLinks;
