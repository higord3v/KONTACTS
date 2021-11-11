import HomeTableLines from '../HomeTableLines';

const HomeTable = () => {
	return (
		<div className="container-table">
			<div className="table-head">
				<strong>Nome</strong>
				<strong>E-mail</strong>
				<strong>Telefone</strong>
			</div>
				<HomeTableLines/>
		</div>
	)
}

export default HomeTable;