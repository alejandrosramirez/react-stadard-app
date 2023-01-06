import { IUser } from "@interfaces/globals/models";

export interface ILogin {
	token: string;
	user: IUser;
}

export interface ILoginParams {
	email: string;
	password: string;
}
