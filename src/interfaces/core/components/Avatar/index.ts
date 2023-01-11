import { AvatarProps } from "@mantine/core";

export interface IAvatar extends AvatarProps {
	name: string;
	borderColor?: string;
	borderSize?: number;
	icon?: (props: any) => JSX.Element;
}
