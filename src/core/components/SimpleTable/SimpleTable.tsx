import { Table } from "@mantine/core";

import { ISimpleTable } from "@interfaces/core/components/SimpleTable";

const SimpleTable = ({ columns, rows, caption, ...rest }: ISimpleTable) => {
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
