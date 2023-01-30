import { buildFormData } from "@helpers";
import { api } from "./manager";

const name = "auth";

export const auth = api.injectEndpoints({
	endpoints: (builder) => ({
		login: builder.mutation<API.Auth.ILogin, API.Auth.ILoginParams>({
			query: (body) => ({
				method: "POST",
				url: `${name}/login`,
				body: buildFormData(body),
			}),
			extraOptions: { maxRetries: 0 },
		}),
	}),
});
