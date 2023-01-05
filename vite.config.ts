import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

import { resolve } from "path";

const resolvePath = (path: string) => resolve(resolve(__dirname), path);

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			"@": resolvePath("src"),
			"@api": resolvePath("src/api"),
			"@assets": resolvePath("src/assets"),
			"@components": resolvePath("src/components"),
			"@constants": resolvePath("src/constants"),
			"@core": resolvePath("src/core"),
			"@helpers": resolvePath("src/helpers"),
			"@interfaces": resolvePath("src/interfaces"),
			"@pages": resolvePath("src/pages"),
			"@routes": resolvePath("src/routes"),
			"@store": resolvePath("src/store"),
		},
	},
	server: {
		host: "0.0.0.0",
		port: 10086,
		open: true,
		cors: true,
	},
	build: {
		outDir: "dist",
	},
});
