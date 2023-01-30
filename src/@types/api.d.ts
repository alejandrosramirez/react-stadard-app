/**
 * Api types
 *
 * @author Miguel Alejandro Salgado Ramírez <alejandrosram@outlook.com>
 */
declare namespace API {
	/**
	 * This namespace is for auth api
	 */
	namespace Auth {
		/**
		 * Interface for login response
		 */
		export interface ILogin {
			token: string;
			user: GENERAL.Models.IUser;
		}

		/**
		 * Interface for login body params
		 */
		export interface ILoginParams {
			email: string;
			password: string;
		}
	}

	/**
	 * This namespace is for base api
	 */
	namespace Base {
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
			};
		}
	}
}
