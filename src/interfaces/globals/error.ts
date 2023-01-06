interface ILaravelErrorData {
	code: string;
	type: string;
	body: string | Record<string, any>;
}

interface INestErrorData {
	error : string;
	message : string;
	status : number;
}

export interface IError {
	data: ILaravelErrorData | INestErrorData;
}
