export default function ListaCliente(props) {
    const handleRemover = (id) => {
        if (window.confirm('Tem certeza que deseja excluir este cliente?')) {
            props.removerCliente(id);
        }
    };

    return (
        <div className="container-fluid">
            <h3 className="mb-4">Lista de Clientes</h3>
            <div className="list-group">
                {props.clientes.map((cliente, index) => (
                    <div key={cliente.id} className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
                         style={index === 1 ? { backgroundColor: props.tema } : {}}>
                        <div>
                            <strong>{cliente.nome}</strong>
                            {cliente.nomeSocial && cliente.nomeSocial !== cliente.nome && (
                                <span> ({cliente.nomeSocial})</span>
                            )}
                            <br />
                            <small className="text-muted">{cliente.email}</small>
                        </div>
                        <button 
                            className="btn btn-danger btn-sm"
                            onClick={() => handleRemover(cliente.id)}
                        >
                            Excluir
                        </button>
                    </div>
                ))}
                {props.clientes.length === 0 && (
                    <div className="list-group-item text-center text-muted">
                        Nenhum cliente cadastrado
                    </div>
                )}
            </div>
        </div>
    );
}
