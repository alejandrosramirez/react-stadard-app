import { useSelector } from 'react-redux';
import { useMantineTheme } from "@mantine/core";

import { ISlice } from '@interfaces/store/slices';
import styles from "./styles";

const UserDropdown = () => {
	const { name, lastname } = useSelector((state: ISlice) => state.authSlice.user);

	const theme = useMantineTheme();

	const { classes } = styles();

	return <div>UserDropdown</div>;
};

export default UserDropdown;
