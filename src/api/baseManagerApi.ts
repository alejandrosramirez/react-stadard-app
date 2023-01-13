import { isEmpty } from "lodash";
import { stringify } from "qs";

import { buildFormData } from "@helpers";
import {
	IDeleteParams,
	IGetParams,
	IGetFileParams,
	IPersistParams,
} from "@interfaces/api/baseManagerApi";
import { api } from "./manager";

export const baseManagerApi = api.injectEndpoints({
	endpoints: (builder) => ({
		get: builder.query<any, IGetParams>({
			query: ({ module, params }) =>
				`${module}${params && !isEmpty(params) ? `?${stringify(params)}` : ""}`,

			providesTags: (result, error, { tags = [] }) => tags,
		}),
		persist: builder.mutation<any, IPersistParams>({
			query: ({ module, body, method = "POST" }) => ({
				url: module,
				method,
				body: buildFormData(body),
			}),
			invalidatesTags: (result, error, { tags = [] }) => tags,
			extraOptions: { maxRetries: 0 },
		}),
		delete: builder.mutation<any, IDeleteParams>({
			query: ({ module }) => ({
				url: module,
				method: "DELETE",
			}),
			invalidatesTags: (result, error, { tags = [] }) => tags,
			extraOptions: { maxRetries: 0 },
		}),
		getFile: builder.query<any, IGetFileParams>({
			query: ({ module, params }) => ({
				url: module,
				method: "GET",
				responseHandler: async ({ blob }) => {
					const blobUrl = window.URL.createObjectURL(await blob());
					const aTag = document.createElement("a");
					aTag.href = blobUrl;
					aTag.download = `${params.name ?? "doc"}${blobUrl.substring(
						blobUrl.lastIndexOf("/") + 1,
					)}`;
					document.body.appendChild(aTag);
					aTag.click();
					document.body.removeChild(aTag);
				},
				cache: "no-cache",
			}),
			extraOptions: { maxRetries: 0 },
		}),
	}),
});
