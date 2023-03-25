import { createContext, useContext, useEffect, useState } from "react";
import { getFromStorage, setToStorage } from "constants";
import { useQueries } from "react-query";
import { getConfig, getGenres } from "api";

const AppContext = createContext();

const AppProvider = ({ children }) => {
	const [genres, setGenres] = useState(getFromStorage("genres") ?? []);
	const [imageConfig, setImageConfig] = useState(
		getFromStorage("imageConfig") ?? null
	);

	useEffect(() => {
		setToStorage("genres", genres);
	}, [genres]);

	useEffect(() => {
		setToStorage("imageConfig", imageConfig);
	}, [imageConfig]);

	const { isLoading } = useQueries([
		{
			queryKey: ["genres"],
			queryFn: getGenres,
			onSuccess: (data) => {
				setGenres(data.genres);
			},
			refetchOnWindowFocus: false,
		},
		{
			queryKey: ["configuration"],
			queryFn: getConfig,
			onSuccess: (data) => {
				setImageConfig(data.images);
			},
			refetchOnWindowFocus: false,
		},
	]);

	return (
		<AppContext.Provider
			value={{ genres, setGenres, imageConfig, setImageConfig }}
		>
			{isLoading ? null : children}
		</AppContext.Provider>
	);
};

export const useAppContext = () => {
	return useContext(AppContext);
};

export default AppProvider;
