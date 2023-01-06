import { buildFormData } from "@helpers";
import { ILogin, ILoginParams } from "@interfaces/api/authManagerApi";
import { api } from "./manager";

const name = "auth";

export const authManagerApi = api.injectEndpoints({
	endpoints: (builder) => ({
		login: builder.mutation<ILogin, ILoginParams>({
			query: (body) => ({
				method: "POST",
				url: `${name}/login`,
				body: buildFormData(body),
			}),
			extraOptions: { maxRetries: 0 },
		}),
	}),
});
