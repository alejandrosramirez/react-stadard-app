import { SimpleTable } from "@core/components";

const UsersList = () => {
	return (
		<SimpleTable
			columns={[
				{
					title: "Nombre",
					align: "right",
				},
				{
					title: "Apellidos",
					align: "center",
				},
				{
					title: "Correo electrónico",
					align: "center",
				},
			]}
			rows={[
				<tr key={1}>
					<td>1</td>
					<td>2</td>
					<td>3</td>
				</tr>,
			]}
			withBorder
			withColumnBorders
			caption="Ejemplo de tabla simple"
			captionSide="bottom"
		/>
	);
};

export default UsersList;
