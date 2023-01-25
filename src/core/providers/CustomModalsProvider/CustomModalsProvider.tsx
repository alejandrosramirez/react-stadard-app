import { useMantineTheme } from "@mantine/core";
import { ModalsProvider as MantineModalsProvider } from "@mantine/modals";

import { ICustomModalsProvider } from "@interfaces/core/providers/CustomModalsProvider";

const CustomModalsProvider = ({ children, modals }: ICustomModalsProvider) => {
	const theme = useMantineTheme();

	return (
		<MantineModalsProvider
			modals={modals}
			modalProps={{
				centered: true,
				overflow: "outside",
				transition: "slide-up",
				closeOnEscape: true,
				overlayOpacity: 0.25,
				closeOnClickOutside: true,
				overlayBlur: 3,
				styles: {
					title: {
						fontWeight: 600,
						fontSize: "16px",
						lineHeight: "155%",
					},
					modal: {
						padding: "0 !important",
					},
					header: {
						padding: "10px 20px !important",
						borderBottom: `solid 1px ${
							theme.colorScheme === "dark"
								? theme.colors.dark[4]
								: theme.colors.gray[2]
						} !important`,
						margin: "0 !important",
					},
					body: {
						padding: "20px",
					},
				},
			}}
		>
			{children}
		</MantineModalsProvider>
	);
};

export default CustomModalsProvider;
