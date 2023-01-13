import { lazy } from "react";
import { useRoutes, Navigate } from "react-router-dom";

import { Loader, PrivateRoute, PublicRoute } from "@core/components";
import { AuthLayout, DashboardLayout, PageLayout } from "@core/layouts";

// ** Auth
// // Login
const Login = Loader(lazy(() => import("@pages/auth/Login")));

// ** Dashboard
// // Home
const Home = Loader(lazy(() => import("@pages/dashboard/Home")));

// // ** Management
// // // Users
const Users = Loader(lazy(() => import("@pages/dashboard/Management/Users")));

// Misc Pages
const P403 = Loader(lazy(() => import("@/pages/errors/P403")));
const P404 = Loader(lazy(() => import("@/pages/errors/P404")));
const P500 = Loader(lazy(() => import("@/pages/errors/P500")));

const RouteManager = () => {
	return useRoutes([
		{
			path: "/",
			element: <Navigate to={"/dashboard/home"} replace />,
		},
		{
			path: "auth",
			element: <PublicRoute component={AuthLayout} />,
			children: [
				{
					index: true,
					element: <Navigate to={"/auth/login"} replace />,
				},
				{
					path: "login",
					element: <Login />,
				},
			],
		},
		{
			path: "dashboard",
			element: <PrivateRoute component={DashboardLayout} />,
			children: [
				{
					index: true,
					element: <Navigate to={"/dashboard/home"} replace />,
				},
				{
					path: "home",
					element: <Home />,
				},
			],
		},
		{
			path: "management",
			element: <PageLayout />,
			children: [
				{
					index: true,
					element: <Navigate to={"/dashboard/management/users"} replace />,
				},
				{
					path: "users",
					element: <Users />,
				},
			],
		},
		{
			path: "*",
			children: [
				{ path: "403", element: <P403 /> },
				{ path: "404", element: <P404 /> },
				{ path: "500", element: <P500 /> },
				{ path: "*", element: <Navigate to={"404"} replace /> },
			],
		},
	]);
};

export default RouteManager;
