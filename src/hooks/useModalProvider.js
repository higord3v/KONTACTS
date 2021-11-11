import { useState } from 'react';
import toast from '../helpers/toast';

const postContato = async ({token}, dados) => {
	try {
		const response = await fetch(`${process.env.REACT_APP_BASE}/contatos`, {
				method: 'POST',
				headers: {
					'Authorization': `Bearer ${token}`,
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(dados)
		});
		const data = await response.json();

		if (!response.ok) {
		  throw new Error(data);
		}

	} catch (error) {
		return toast.messageError(error.message);
	}
}

const putContato = async ({token}, dados, id) => {
	try {
		const response = await fetch(`${process.env.REACT_APP_BASE}/contatos/${id}`, {
		method: 'PUT',
		headers: {
			'Authorization': `Bearer ${token}`,
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(dados)
	});

	const data = await response.json();

	if (!response.ok) {
	  throw new Error(data);
	}

	} catch (error) {
		return toast.messageError(error.message);	
	}
}

const delContato = async ({token}, id) => {
	return await fetch(`${process.env.REACT_APP_BASE}/contatos/${id}`, {
				method: 'DELETE',
				headers: {
					'Authorization': `Bearer ${token}`
				}
		})
}

const useModalProvider = () => {
	const [modal, setModal] = useState(false);
	const [modalType, setModalType] = useState('');
	const [itemAtual, setItemAtual] = useState('');

	return {
		modal,
		setModal,
		modalType,
		setModalType,
		itemAtual,
		setItemAtual,
		postContato,
		putContato,
		delContato
	}
}

export default useModalProvider;