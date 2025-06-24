import { useState } from "react";

export default function FormularioCadastroServico(props) {
    const [nome, setNome] = useState('');
    const [preco, setPreco] = useState('');
    const [duracao, setDuracao] = useState('');
    const [descricao, setDescricao] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (nome && preco && duracao) {
            props.adicionarServico({ nome, preco, duracao, descricao });
            alert(`Serviço ${nome} cadastrado com sucesso!`);
            setNome('');
            setPreco('');
            setDuracao('');
            setDescricao('');
        } else {
            alert('Por favor, preencha todos os campos obrigatórios (Nome, Preço e Duração)!');
        }
    };

    return (
        <div className="container-fluid">
            <h3 className="mb-4">Cadastro de Serviço</h3>
            <form onSubmit={handleSubmit}>
                <div className="input-group mb-3">
                    <span className="input-group-text" style={{ background: props.tema }}>Serviço</span>
                    <select 
                        className="form-select" 
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        required
                    >
                        <option value="">Selecione um serviço</option>
                        <option value="Banho">Banho</option>
                        <option value="Tosa">Tosa</option>
                        <option value="Banho e Tosa">Banho e Tosa</option>
                        <option value="Consulta Veterinária">Consulta Veterinária</option>
                        <option value="Vacinação">Vacinação</option>
                        <option value="Exame de Sangue">Exame de Sangue</option>
                        <option value="Limpeza Dental">Limpeza Dental</option>
                        <option value="Corte de Unhas">Corte de Unhas</option>
                    </select>
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" style={{ background: props.tema }}>R$</span>
                    <input 
                        type="number" 
                        className="form-control" 
                        placeholder="Preço do serviço" 
                        value={preco}
                        onChange={(e) => setPreco(e.target.value)}
                        step="0.01"
                        required
                    />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" style={{ background: props.tema }}>Duração</span>
                    <select 
                        className="form-select" 
                        value={duracao}
                        onChange={(e) => setDuracao(e.target.value)}
                        required
                    >
                        <option value="">Selecione a duração</option>
                        <option value="30 minutos">30 minutos</option>
                        <option value="1 hora">1 hora</option>
                        <option value="1h 30min">1h 30min</option>
                        <option value="2 horas">2 horas</option>
                        <option value="2h 30min">2h 30min</option>
                        <option value="3 horas">3 horas</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label className="form-label">Descrição (opcional)</label>
                    <textarea 
                        className="form-control" 
                        value={descricao}
                        onChange={(e) => setDescricao(e.target.value)}
                        rows={3}
                        placeholder="Descreva detalhes sobre o serviço..."
                    />
                </div>
                <div className="input-group mb-3">
                    <button className="btn btn-outline-secondary" type="submit" style={{ background: props.tema }}>
                        Cadastrar Serviço
                    </button>
                </div>
            </form>
        </div>
    );
}
