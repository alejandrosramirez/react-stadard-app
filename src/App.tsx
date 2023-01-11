import { Provider } from "react-redux";
import { BrowserRouter, HashRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";

import { NotificationsProvider } from "@mantine/notifications";

import { CustomMantineProvider } from "@core/providers";
import RouteManager from "@routes/RouteManager";
import { persistor, store } from "@store/manager";
import { theme } from "@/theme";

const App = () => {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<PersistGate persistor={persistor}>
					<CustomMantineProvider theme={theme}>
						<NotificationsProvider
							limit={5}
							position="top-right"
							zIndex={2077}
						>
							<RouteManager />
						</NotificationsProvider>
					</CustomMantineProvider>
				</PersistGate>
			</BrowserRouter>
		</Provider>
	);
};

export default App;
