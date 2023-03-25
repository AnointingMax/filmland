import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import "App.css";
import { BottomNav } from "components";
import { Home } from "pages";

function App() {
	return (
		<BrowserRouter basename="/filmland">
			<Routes>
				<Route Component={Wrapper}>
					<Route index Component={Home} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

const Wrapper = () => {
	return (
		<>
			<div className="body">
				<Outlet />
			</div>
			<BottomNav />
		</>
	);
};

export default App;
