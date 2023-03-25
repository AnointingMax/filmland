import { createContext, useContext, useEffect, useState } from "react";
import { getFromStorage, setToStorage } from "constants";
import { useQuery } from "react-query";
import { getGenres } from "api";

const AppContext = createContext();

const AppProvider = ({ children }) => {
	const [genres, setGenres] = useState(getFromStorage("genres") ?? []);

	useEffect(() => {
		setToStorage("genres", genres);
	}, [genres]);

	const { isLoading } = useQuery({
		queryKey: ["genres"],
		queryFn: getGenres,
		onSuccess: (data) => {
			setGenres(data.genres);
		},
		refetchOnWindowFocus: false,
	});

	return (
		<AppContext.Provider value={{ genres, setGenres }}>
			{isLoading ? null : children}
		</AppContext.Provider>
	);
};

export const useAppContext = () => {
	return useContext(AppContext);
};

export default AppProvider;
