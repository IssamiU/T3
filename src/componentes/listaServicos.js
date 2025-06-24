export default function ListaServicos(props) {
    const handleRemover = (id) => {
        if (window.confirm('Tem certeza que deseja excluir este serviço?')) {
            props.removerServico(id);
        }
    };

    return (
        <div className="container-fluid">
            <h3 className="mb-4">Lista de Serviços</h3>
            <div className="list-group">
                {props.servicos.map((servico, index) => (
                    <div key={servico.id} className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
                         style={index === 2 ? { backgroundColor: props.tema } : {}}>
                        <div>
                            <strong>{servico.nome}</strong> - R$ {servico.preco}
                            <br />
                            <small className="text-muted">Duração: {servico.duracao}</small>
                            {servico.descricao && (
                                <>
                                    <br />
                                    <small className="text-muted">{servico.descricao}</small>
                                </>
                            )}
                        </div>
                        <button 
                            className="btn btn-danger btn-sm"
                            onClick={() => handleRemover(servico.id)}
                        >
                            Excluir
                        </button>
                    </div>
                ))}
                {props.servicos.length === 0 && (
                    <div className="list-group-item text-center text-muted">
                        Nenhum serviço cadastrado
                    </div>
                )}
            </div>
        </div>
    );
}
