import AppProvider from "context/AppContext";
import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import App from "./App";

const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<AppProvider>
				<App />
			</AppProvider>
			<ReactQueryDevtools />
		</QueryClientProvider>
	</React.StrictMode>
);
