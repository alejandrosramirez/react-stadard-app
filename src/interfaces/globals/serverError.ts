/**
 * Error interface used for server side errors
 */
export interface IServerError {
	data: {
		error: string;
		message: string | Record<string, any>;
		status: number;
	};
}
