import { IconGauge } from "@tabler/icons";

const LinksManager: Record<string, any> = [
	{
		icon: IconGauge,
		label: "Escritorio",
		to: "/dashboard/home",
	},
	{
		icon: IconGauge,
		label: "Gestión",
		links: [
			{
				label: "Usuarios",
				to: "/dashboard/management/users",
			},
		],
	},
];

export default LinksManager;
