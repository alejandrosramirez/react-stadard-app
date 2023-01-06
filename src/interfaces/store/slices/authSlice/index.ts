import { IUser } from "@interfaces/globals/models";

export interface IAuthSlice {
	isLogged: boolean;
	token: string;
	user: IUser;
}
