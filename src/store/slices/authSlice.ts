import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import type { IAuthSlice } from "@/interfaces/store/slices/authSlice";

const initialState: IAuthSlice = {
	isLogged: false,
	token: "",
	user: undefined,
};

export const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		removeUser: () => initialState,
		setToken: (state, action: PayloadAction<string>) => {
			state.token = action.payload;
		},
		setUser: (state, action: PayloadAction<IAuthSlice>) => {
			state.isLogged = true;
			state.user = action.payload.user;
		},
	},
});

// Action creators are generated for each case reducer function
export const { removeUser, setToken, setUser } = authSlice.actions;
