import { api } from "@api/manager";
import { buildFormData } from "@helpers";

import { ILogin, ILoginParams } from "@interfaces/api/authManagerApi";

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
