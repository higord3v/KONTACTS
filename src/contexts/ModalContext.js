import { createContext } from 'react';
import useModalProvider from '../hooks/useModalProvider';

const ModalContext = createContext({});

export const ModalProvider = (props) => {
	const modal = useModalProvider();

	return (
			<ModalContext.Provider value={modal}>
				{props.children}
			</ModalContext.Provider>
		)
}

export default ModalContext;