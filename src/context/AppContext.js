import { createContext, useContext, useEffect, useState } from "react";
import { getFromStorage, setToStorage } from "constants";

const AppContext = createContext();

const AppProvider = ({ children }) => {
	const [genres, setGenres] = useState(getFromStorage("genres") ?? []);

	useEffect(() => {
		setToStorage("genres", genres);
	}, [genres]);

	return (
		<AppContext.Provider value={{ genres, setGenres }}>
			{children}
		</AppContext.Provider>
	);
};

export const useAppContext = () => {
	return useContext(AppContext);
};

export default AppProvider;
