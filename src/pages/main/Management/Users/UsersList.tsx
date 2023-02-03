import { useMemo } from "react";
import { MRT_ColumnDef } from "mantine-react-table";

import { SimpleTable } from "@core/components";

const UsersList = () => {
	const cols = useMemo<MRT_ColumnDef<GENERAL.Models.IUser>[]>(
		() => [
			{
				accessorFn: (row) => `${row.name} ${row.lastname}`,
				id: "name",
				header: "Nombre",
			},
			{
				accessorKey: "email",
				id: "email",
				header: "Correo Electrónico",
			},
			{
				accessorKey: "phone",
				id: "phone",
				header: "Teléfono",
			},
		],
		[],
	);

	const rows: Partial<GENERAL.Models.IUser>[] = [
		{
			id: 1,
			uuid: "3f40a239-cffa-4e09-af4d-882b31f64f77",
			name: "Alejandro",
			lastname: "Salgado",
			email: "alejandrosram@outlook.com",
			phone: "3330204397",
		},
		{
			id: 2,
			uuid: "ae6c2d64-ceab-4d0d-ae42-8ab679b65107",
			name: "Luis",
			lastname: "Gonzalez",
			email: "luisglez@outlook.com",
			phone: "3330204397",
		},
	];

	return <SimpleTable cols={cols} rows={rows} />;
};

export default UsersList;
