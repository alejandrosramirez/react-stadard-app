import { Text } from "@mantine/core";

import { IMessage } from "@interfaces/components/Message";
import styles from "./styles";

const Message = ({ title, subtitle, className }: IMessage) => {
	const { classes } = styles();

	return (
		<div className={className}>
			<Text className={classes.title}>{title}</Text>
			<Text className={classes.subtitle}>{subtitle}</Text>
		</div>
	);
};

export default Message;
