import { useState } from "react";

export default function FormularioCadastroCliente(props) {
    const [nome, setNome] = useState('');
    const [nomeSocial, setNomeSocial] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (nome && email) {
            props.adicionarCliente({ nome, nomeSocial, email });
            alert(`Cliente ${nome} cadastrado com sucesso!`);
            setNome('');
            setNomeSocial('');
            setEmail('');
        } else {
            alert('Por favor, preencha pelo menos o nome e e-mail!');
        }
    };

    return (
        <div className="container-fluid">
            <h3 className="mb-4">Cadastro de Cliente</h3>
            <form onSubmit={handleSubmit}>
                <div className="input-group mb-3">
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Nome" 
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        required
                    />
                </div>
                <div className="input-group mb-3">
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Nome social" 
                        value={nomeSocial}
                        onChange={(e) => setNomeSocial(e.target.value)}
                    />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" style={{ background: props.tema }}>@</span>
                    <input 
                        type="email" 
                        className="form-control" 
                        placeholder="E-mail" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="input-group mb-3">
                    <button className="btn btn-outline-secondary" type="submit" style={{ background: props.tema }}>
                        Cadastrar Cliente
                    </button>
                </div>
            </form>
        </div>
    );
}
