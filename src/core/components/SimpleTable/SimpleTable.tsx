import { Table } from "@mantine/core";

const SimpleTable = ({
	columns,
	rows,
	caption,
	...rest
}: CORE.Components.ISimpleTable) => {
	return (
		<Table {...rest}>
			<thead>
				<tr>
					{columns.map((column, idx) => (
						<th key={idx} align={column.align}>
							{column.title}
						</th>
					))}
				</tr>
			</thead>

			<tbody>{rows}</tbody>

			{caption ? <caption>{caption}</caption> : <></>}
		</Table>
	);
};

export default SimpleTable;
