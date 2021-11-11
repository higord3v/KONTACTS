import useModal from '../../hooks/useModal';
import close from '../../assets/close.svg';
import { useState, useEffect } from 'react';
import useAuth from '../../hooks/useAuth';

const HomeModal = () => {
	const { 
		modal,
		setModal,
		modalType,
		itemAtual,
		postContato,
		putContato,
		delContato
	} = useModal();
	const [nomeInput, setNomeInput] = useState('');
	const [emailInput, setEmailInput] = useState('');
	const [telefoneInput, setTelefoneInput] = useState('');
	const { token } = useAuth();

	useEffect(() => {
		const adequarModal = () => {
			if (modalType === 'editar') {
			setNomeInput(itemAtual.nome);
			setEmailInput(itemAtual.email);	
			setTelefoneInput(itemAtual.telefone);
			return;
		}
			setNomeInput('');	
			setEmailInput('');	
			setTelefoneInput('');
		}
		adequarModal();
		
	},[modal, modalType, itemAtual])

	const handleSubmit = async (e) => {
		e.preventDefault();

		const dados = {
			nome: nomeInput,
			email: emailInput,
			telefone: telefoneInput
		}
		const tokenRequisicao = { token };

		if (modalType === 'excluir') {
			await delContato(tokenRequisicao, itemAtual.id);
			return setModal(false);
		}
		
		if (!emailInput || !telefoneInput || !nomeInput) return;

		if (modalType === 'adicionar') {
			await postContato(tokenRequisicao, dados);
			return setModal(false);
		}
		
		
		await putContato(tokenRequisicao, dados, itemAtual.id)
		return setModal(false);
}

	return (
		<>
			{ modal && (
			<div
				onClick={() => setModal(false)} 
				className="backdrop">
				<form
					onClick={e => e.stopPropagation()} 
					onSubmit={handleSubmit} 
					className="modal-container">
					<img 
						onClick={() => setModal(false)}
						src={close}
						alt="fechar"/>
					<h2>
					{modalType === 'adicionar' && 'Novo Contato'}
					{modalType === 'excluir' && 'Confirmar Exclusão?'}
					{modalType === 'editar' && 'Editar Contato'}
					</h2>
					{ (modalType === 'editar' || modalType === 'adicionar') && (
					   <>	
						<input 
							type="text"
							placeholder="Nome"
							value={nomeInput}
							onChange={e => setNomeInput(e.target.value)}
						/>
						<input 
							type="email"
							placeholder="E-mail"
							value={emailInput}
							onChange={e => setEmailInput(e.target.value)}
						/>
						<input 
							type="number"
							placeholder="Telefone"
							value={telefoneInput}
							onChange={e => setTelefoneInput(e.target.value)}
						 />
						</>
						 )
					}
					<button
					  className="modal-button-1"
					  type="submit"
					  style={{cursor: 'pointer'}}
					>	
					  {modalType === 'adicionar' && 'ADICIONAR'}
					  {modalType === 'editar' && 'SALVAR'}
					  {modalType === 'excluir' && 'EXCLUIR'}
					</button>

					<button 
					  className="modal-button-2"
					  onClick={() => setModal(false)}
					  style={{cursor: 'pointer'}}  
					>
					  {modalType === 'adicionar' ? 'LIMPAR': 'CANCELAR'}
					</button>
				</form>
			</div>
				)}
		</>
	);
}

export default HomeModal;