import { useState } from "react";

export default function FormularioCadastroProduto(props) {
    const [nome, setNome] = useState('');
    const [preco, setPreco] = useState('');
    const [categoria, setCategoria] = useState('Ração');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (nome && preco) {
            props.adicionarProduto({ nome, preco, categoria });
            alert(`Produto ${nome} cadastrado com sucesso!`);
            setNome('');
            setPreco('');
            setCategoria('Ração');
        } else {
            alert('Por favor, preencha todos os campos obrigatórios!');
        }
    };

    return (
        <div className="container-fluid">
            <h3 className="mb-4">Cadastro de Produto</h3>
            <form onSubmit={handleSubmit}>
                <div className="input-group mb-3">
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Nome do produto" 
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        required
                    />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" style={{ background: props.tema }}>R$</span>
                    <input 
                        type="number" 
                        className="form-control" 
                        placeholder="Preço" 
                        value={preco}
                        onChange={(e) => setPreco(e.target.value)}
                        step="0.01"
                        required
                    />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" style={{ background: props.tema }}>Categoria</span>
                    <select 
                        className="form-select" 
                        value={categoria}
                        onChange={(e) => setCategoria(e.target.value)}
                    >
                        <option value="Ração">Ração</option>
                        <option value="Brinquedos">Brinquedos</option>
                        <option value="Higiene">Higiene</option>
                        <option value="Medicamentos">Medicamentos</option>
                        <option value="Acessórios">Acessórios</option>
                    </select>
                </div>
                <div className="input-group mb-3">
                    <button className="btn btn-outline-secondary" type="submit" style={{ background: props.tema }}>
                        Cadastrar Produto
                    </button>
                </div>
            </form>
        </div>
    );
}
