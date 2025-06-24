import { useState } from "react";

export default function FormularioCadastroPet(props) {
    const [nome, setNome] = useState('');
    const [tipo, setTipo] = useState('Cachorro');
    const [raca, setRaca] = useState('');
    const [genero, setGenero] = useState('Macho');
    const [dono, setDono] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (nome && dono) {
            props.adicionarPet({ nome, tipo, raca, genero, dono });
            alert(`Pet ${nome} cadastrado com sucesso!`);
            setNome('');
            setTipo('Cachorro');
            setRaca('');
            setGenero('Macho');
            setDono('');
        } else {
            alert('Por favor, preencha pelo menos o nome do pet e do dono!');
        }
    };

    return (
        <div className="container-fluid">
            <h3 className="mb-4">Cadastro de Pet</h3>
            <form onSubmit={handleSubmit}>
                <div className="input-group mb-3">
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Nome do pet" 
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        required
                    />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" style={{ background: props.tema }}>Tipo</span>
                    <select 
                        className="form-select" 
                        value={tipo}
                        onChange={(e) => setTipo(e.target.value)}
                    >
                        <option value="Cachorro">Cachorro</option>
                        <option value="Gato">Gato</option>
                        <option value="Pássaro">Pássaro</option>
                        <option value="Peixe">Peixe</option>
                        <option value="Outros">Outros</option>
                    </select>
                </div>
                <div className="input-group mb-3">
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Raça" 
                        value={raca}
                        onChange={(e) => setRaca(e.target.value)}
                    />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" style={{ background: props.tema }}>Gênero</span>
                    <select 
                        className="form-select" 
                        value={genero}
                        onChange={(e) => setGenero(e.target.value)}
                    >
                        <option value="Macho">Macho</option>
                        <option value="Fêmea">Fêmea</option>
                    </select>
                </div>
                <div className="input-group mb-3">
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Nome do dono" 
                        value={dono}
                        onChange={(e) => setDono(e.target.value)}
                        required
                    />
                </div>
                <div className="input-group mb-3">
                    <button className="btn btn-outline-secondary" type="submit" style={{ background: props.tema }}>
                        Cadastrar Pet
                    </button>
                </div>
            </form>
        </div>
    );
}
