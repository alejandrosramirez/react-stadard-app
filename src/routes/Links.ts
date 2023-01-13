import { IconCopyright, IconGauge, IconTools, IconUsers } from "@tabler/icons";

import { rootPaths } from "./Paths";

const Links: Record<string, any> = [
	{
		icon: IconGauge,
		label: "Escritorio",
		to: rootPaths.home,
	},
	{
		icon: IconTools,
		label: "Gestión",
		root: rootPaths.management,
		links: [
			{
				icon: IconUsers,
				label: "Usuarios",
				to: `${rootPaths.management}/users`,
			},
			{
				icon: IconCopyright,
				label: "Roles",
				to: `${rootPaths.management}/roles`,
			},
		],
	},
];

export default Links;
