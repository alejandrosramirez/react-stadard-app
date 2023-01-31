/**
 * Components types
 *
 * @author Miguel Alejandro Salgado Ramírez <alejandrosram@outlook.com>
 */
declare namespace COMPONENTS {
	/**
	 * This namespace is for auth custom components
	 */
	namespace Auth {
		/**
		 * Interface for Layout component
		 */
		export interface ILayout {
			children: React.ReactElement | React.ReactElement[];
		}
	}

	/**
	 * Interface for auth components folder
	 */
	export interface IAuth {
		Layout: (Props: Auth.ILayout) => JSX.Element;
	}
}
