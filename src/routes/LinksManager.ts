import { IconCopyright, IconGauge, IconTools, IconUsers } from "@tabler/icons";

const LinksManager: Record<string, any> = [
	{
		icon: IconGauge,
		label: "Escritorio",
		to: "/home",
	},
	{
		icon: IconTools,
		label: "Gestión",
		links: [
			{
				icon: IconUsers,
				label: "Usuarios",
				to: "/management/users",
			},
			{
				icon: IconCopyright,
				label: "Roles",
				to: "/management/roles",
			},
		],
	},
];

export default LinksManager;
