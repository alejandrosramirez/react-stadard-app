import { Avatar as MantineAvatar, Text } from "@mantine/core";

import { getInitials } from "@helpers";
import { IAvatar } from "@interfaces/core/components/Avatar";

const Avatar = ({ name, borderSize = 1, borderColor, icon: Icon, ...rest }: IAvatar) => {
	return (
		<MantineAvatar
			{...rest}
			styles={(theme) => ({
				root: {
					border: `${borderSize}px solid ${
						borderColor ? borderColor : theme.colors.blue[5]
					}`,
				},
			})}
		>
			{Icon ? <Icon /> : <Text size={10}>{getInitials(name)}</Text>}
		</MantineAvatar>
	);
};

export default Avatar;
