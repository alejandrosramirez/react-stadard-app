import { MantineReactTable as Table } from "mantine-react-table";

const SimpleTable = ({ cols, rows }: CORE.Components.ISimpleTable) => {
	return (
		<Table
			columns={cols}
			data={rows}
			enableRowSelection
			enableFilters
			enablePagination={true}
			enableSorting={false}
			enableBottomToolbar={false}
			enableTopToolbar={false}
			mantineTableProps={{
				captionSide: "bottom",
				fontSize: "sm",
				highlightOnHover: false,
				withColumnBorders: false,
				withBorder: false,
			}}
			mantineSelectAllCheckboxProps={{
				size: "sm",
			}}
			mantineSelectCheckboxProps={{
				size: "sm",
			}}
		/>
	);
};

export default SimpleTable;
