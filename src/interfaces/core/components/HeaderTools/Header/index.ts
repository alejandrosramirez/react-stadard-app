import { Dispatch, SetStateAction } from "react";

export interface IHeader {
	opened: boolean;
	setOpened: Dispatch<SetStateAction<boolean>>;
}
