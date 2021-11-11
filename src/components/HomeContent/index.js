import HomeTable from '../HomeTable';
import useModal from '../../hooks/useModal';

const HomeContent = () => {
   	const { setModal, setModalType} = useModal();

   	const handleOnClick = () => {
   		setModalType('adicionar');
   		setModal(true);
   	}

	return (
		<div className="container-content">
			<button 
				className="add-button"
				onClick={handleOnClick}>
			  Adicionar
			</button>
			<HomeTable/>
		</div>
	);
}

export default HomeContent;