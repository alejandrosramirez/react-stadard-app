import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const useActiveLink = () => {
	const location = useLocation();
	const [activeLink, setActiveLink] = useState("");

	useEffect(() => {
		setActiveLink(location.pathname);
	}, [location]);

	return { activeLink };
};

export default useActiveLink;
