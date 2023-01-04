export interface IAuthSlice {
	isLogged: boolean;
	token: string;
	user?: {
		id: number;
		uuid: string;
		name: string;
		lastname: string;
		email: string;
		created_at: Date;
		updated_at: Date;
	}
}
