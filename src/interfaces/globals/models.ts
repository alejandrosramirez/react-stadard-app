/**
 * Models interfaces used for responses, other interfaces, etc
 */
export interface IAddress {
	id: number;
	uuid: string;
	addressable_id: number;
	addressable_type: string;
	street: string;
	outer_number: string;
	inner_number: string | null;
	zip_code: string;
	colony: string;
	city: string;
	state_id: number;
	references: string | null;
	lat: number | null;
	lng: number | null;
	created_at: string | null;
	updated_at: string | null;
	deleted_at: string | null;
	addressable?: any | null;
	state?: IState | null;
}

export interface IAdmin {
	id: number;
	uuid: string;
	avatar: string | null;
	name: string;
	lastname: string | null;
	email: string;
	email_verified_at: string | null;
	password: string;
	remember_token: string | null;
	disabled: boolean;
	created_at: string | null;
	updated_at: string | null;
	deleted_at: string | null;
}

export interface IPermission {
	id: number;
	uuid: string;
	name: string;
	description: string;
	guard_name: string;
	created_at: string | null;
	updated_at: string | null;
	admins?: Array<IAdmin> | null;
	roles?: Array<IRole> | null;
	users?: Array<IUser> | null;
	permissions?: Array<IPermission> | null;
	admins_count?: number | null;
	roles_count?: number | null;
	users_count?: number | null;
	permissions_count?: number | null;
}

export interface IRole {
	id: number;
	uuid: string;
	name: string;
	description: string;
	guard_name: string;
	created_at: string | null;
	updated_at: string | null;
	deleted_at: string | null;
	admins?: Array<IAdmin> | null;
	permissions?: Array<IPermission> | null;
	users?: Array<IUser> | null;
	admins_count?: number | null;
	permissions_count?: number | null;
	users_count?: number | null;
}

export interface IState {
	id: number;
	uuid: string;
	name: string;
	short_name: string;
	created_at: string | null;
	updated_at: string | null;
	deleted_at: string | null;
	addresses?: Array<IAddress> | null;
	addresses_count?: number | null;
}

export interface IUser {
	id: number;
	uuid: string;
	avatar: string | null;
	name: string;
	lastname: string | null;
	phone: string;
	email: string;
	email_verified_at: string | null;
	password: string;
	remember_token: string | null;
	disabled: boolean;
	created_at: string | null;
	updated_at: string | null;
	deleted_at: string | null;
	stripe_id: string | null;
	pm_type: string | null;
	pm_last_four: string | null;
	trial_ends_at: string | null;
	addresses?: Array<IAddress> | null;
	addresses_count?: number | null;
}
