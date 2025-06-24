export default function ListaProdutos(props) {
    const handleRemover = (id) => {
        if (window.confirm('Tem certeza que deseja excluir este produto?')) {
            props.removerProduto(id);
        }
    };

    const getBadgeColor = (categoria) => {
        switch(categoria) {
            case 'Ração': return 'bg-primary';
            case 'Brinquedos': return 'bg-success';
            case 'Higiene': return 'bg-info';
            case 'Medicamentos': return 'bg-danger';
            case 'Acessórios': return 'bg-warning';
            default: return 'bg-secondary';
        }
    };

    return (
        <div className="container-fluid">
            <h3 className="mb-4">Lista de Produtos</h3>
            <div className="list-group">
                {props.produtos.map((produto, index) => (
                    <div key={produto.id} className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
                         style={index === 2 ? { backgroundColor: props.tema } : {}}>
                        <div>
                            <strong>{produto.nome}</strong> - R$ {produto.preco} 
                            <span className={`badge ${getBadgeColor(produto.categoria)} ms-2`}>
                                {produto.categoria}
                            </span>
                        </div>
                        <button 
                            className="btn btn-danger btn-sm"
                            onClick={() => handleRemover(produto.id)}
                        >
                            Excluir
                        </button>
                    </div>
                ))}
                {props.produtos.length === 0 && (
                    <div className="list-group-item text-center text-muted">
                        Nenhum produto cadastrado
                    </div>
                )}
            </div>
        </div>
    );
}
