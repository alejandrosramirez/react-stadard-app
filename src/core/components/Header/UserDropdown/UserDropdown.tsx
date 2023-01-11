import { useSelector } from "react-redux";
import { Group, Menu, Text, UnstyledButton } from "@mantine/core";
import { IconDoorExit as DoorExit } from "@tabler/icons";

import { Avatar } from "@core/components";
import { ISlice } from "@interfaces/store/slices";
import styles from "./styles";

const UserDropdown = () => {
	const { name, lastname, email } = useSelector(
		(state: ISlice) => state.authSlice.user,
	);

	const { classes } = styles();

	return (
		<Group position="center">
			<Menu
				position="bottom-end"
				transition="pop"
				withArrow
				arrowPosition="center"
				classNames={{ dropdown: classes.dropdown }}
			>
				<Menu.Target>
					<UnstyledButton>
						<Group>
							<Avatar
								color="blue"
								radius="xl"
								size={40}
								name={`${name} ${lastname}`}
							/>

							<div className={classes.userInfoContainer}>
								<Text weight={600} size={12} mr={3}>
									{`${name} ${lastname}`}
								</Text>

								<Text weight={500} size={10} color="dimmed">
									{email}
								</Text>
							</div>
						</Group>
					</UnstyledButton>
				</Menu.Target>
				<Menu.Dropdown>
					<Menu.Item
						icon={<DoorExit />}
						color="red"
						onClick={() => console.log("Hola")}
					>
						Cerrar Sesión
					</Menu.Item>
				</Menu.Dropdown>
			</Menu>
		</Group>
	);
};

export default UserDropdown;
