export interface IGetParams {
	module: string;
	params?: Record<string, any>;
	tags?: any[];
}

export interface IPersistParams {
	module: string;
	body: any;
	method: "POST" | "PUT";
	tags?: any[];
}

export interface IDeleteParams {
	module: string;
	tags?: any[];
}

export interface IGetFileParams {
	module: string;
	params: {
		name: string;
	}
}
