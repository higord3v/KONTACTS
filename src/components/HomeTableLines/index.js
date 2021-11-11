import { useEffect, useState } from 'react';
import useModal from '../../hooks/useModal';
import useAuth from '../../hooks/useAuth';
import editar from '../../assets/editar.svg';
import lixo from '../../assets/lixo.svg';

const HomeTableLines = () => {
	const [contatos, setContatos] = useState([]);
	const { setModalType, setModal, modal, setItemAtual } = useModal();
	const { token } = useAuth();

	useEffect(() => {
		const carregarContatos = async () => {
			try {
				const response = await fetch("https://cubos-api-contacts.herokuapp.com/contatos", {
					headers: {
						'Authorization': `Bearer ${token}`,
						'Content-Type': 'application/json'
					}
				})
				const dados = await response.json();
				setContatos(dados);
			} catch (error) {
				console.log(error.message);
			}
		}
		carregarContatos();
		//eslint-disable-next-line
	}, [modal])	
	
	const handleOnClick = (tipo) => {
		setModal(true);
		setModalType(tipo);
	}

	return (
		<div className="table-body">
			{
				(typeof contatos === 'object') && (contatos.map((item, index) => 
					 (
						<div onClick={() => setItemAtual(item)} className="table-line" key={index}>
							<span>{item.nome}</span>
							<span>{item.email}</span>
							<span>{item.telefone}</span>
							<div>
								<img
								 src={editar} alt="editar"
								 onClick={() => handleOnClick('editar')}
								 />
								<img
								 src={lixo}
								 alt="excluir" 
								 onClick={() => handleOnClick('excluir')}
								/>
							</div>
						</div>
				)))
			}
		</div>
	);
}

export default HomeTableLines;