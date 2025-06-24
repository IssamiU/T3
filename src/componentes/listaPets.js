export default function ListaPets(props) {
    const handleRemover = (id) => {
        if (window.confirm('Tem certeza que deseja excluir este pet?')) {
            props.removerPet(id);
        }
    };

    return (
        <div className="container-fluid">
            <h3 className="mb-4">Lista de Pets</h3>
            <div className="list-group">
                {props.pets.map((pet, index) => (
                    <div key={pet.id} className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
                         style={index === 2 ? { backgroundColor: props.tema } : {}}>
                        <div>
                            <strong>{pet.nome}</strong> - {pet.tipo}, {pet.raca} ({pet.genero})
                            <br />
                            <small className="text-muted">Dono: {pet.dono}</small>
                        </div>
                        <button 
                            className="btn btn-danger btn-sm"
                            onClick={() => handleRemover(pet.id)}
                        >
                            Excluir
                        </button>
                    </div>
                ))}
                {props.pets.length === 0 && (
                    <div className="list-group-item text-center text-muted">
                        Nenhum pet cadastrado
                    </div>
                )}
            </div>
        </div>
    );
}
