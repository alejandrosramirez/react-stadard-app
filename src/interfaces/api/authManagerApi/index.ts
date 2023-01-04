export interface ILogin {
	token: string;
	user: {
		id: number;
		uuid: string;
		name: string;
		lastname: string;
		email: string;
		created_at: Date;
		updated_at: Date;
	};
}

export interface ILoginParams {
	email: string;
	password: string;
}
