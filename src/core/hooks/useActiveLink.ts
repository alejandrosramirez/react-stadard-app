import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const useActiveLink = (root?: string) => {
	const location = useLocation();

	const [activeLink, setActiveLink] = useState("");
	const [opened, setOpened] = useState(false);

	useEffect(() => {
		if (root) {
			const hasChildren = location.pathname.includes(root);
			setOpened(hasChildren ? true : false);
		}

		setActiveLink(location.pathname);
	}, [location, root]);

	const toggle = () => setOpened((o) => !o);

	return { activeLink, opened, toggle };
};

export default useActiveLink;
