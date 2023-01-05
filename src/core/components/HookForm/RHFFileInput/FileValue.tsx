import { Center } from "@mantine/core";
import { IconPhoto as Photo } from "@tabler/icons";

import { IFileValue } from "@interfaces/core/components/HookForm/RHFFileInput";

const FileValue = ({ file }: IFileValue) => {
	return (
		<Center
			inline
			sx={(theme) => ({
				backgroundColor:
					theme.colorScheme === "dark"
						? theme.colors.dark[7]
						: theme.colors.gray[1],
				fontSize: theme.fontSizes.xs,
				padding: "3px 7px",
				borderRadius: theme.radius.sm,
			})}
		>
			<Photo size={14} style={{ marginRight: 5 }} />

			<span
				style={{
					whiteSpace: "nowrap",
					textOverflow: "ellipsis",
					overflow: "hidden",
					maxWidth: 200,
					display: "inline-block",
				}}
			>
				{file.name}
			</span>
		</Center>
	);
};

export default FileValue;
