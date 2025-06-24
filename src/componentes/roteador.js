import { useState } from "react";
import BarraNavegacao from "./barraNavegacao";
import ListaCliente from "./listaCliente";
import FormularioCadastroCliente from "./formularioCadastroCliente";
import ListaProdutos from "./listaProdutos.js";
import FormularioCadastroProduto from "./formularioCadastroProduto";
import ListaPets from "./listaPets";
import FormularioCadastroPet from "./formularioCadastroPet";
import ListaServicos from "./listaServicos";
import FormularioCadastroServico from "./formularioCadastroServico";

export default function Roteador() {
    const [tela, setTela] = useState('Clientes');
    const [clientes, setClientes] = useState([]);
    const [produtos, setProdutos] = useState([]);
    const [pets, setPets] = useState([]);
    const [servicos, setServicos] = useState([]);

    const adicionarCliente = (cliente) => {
        const novoCliente = { ...cliente, id: Date.now() };
        setClientes([...clientes, novoCliente]);
    };

    const adicionarProduto = (produto) => {
        const novoProduto = { ...produto, id: Date.now() };
        setProdutos([...produtos, novoProduto]);
    };

    const adicionarPet = (pet) => {
        const novoPet = { ...pet, id: Date.now() };
        setPets([...pets, novoPet]);
    };

    const adicionarServico = (servico) => {
        const novoServico = { ...servico, id: Date.now() };
        setServicos([...servicos, novoServico]);
    };

    const removerCliente = (id) => {
        setClientes(clientes.filter(cliente => cliente.id !== id));
    };

    const removerProduto = (id) => {
        setProdutos(produtos.filter(produto => produto.id !== id));
    };

    const removerPet = (id) => {
        setPets(pets.filter(pet => pet.id !== id));
    };

    const removerServico = (id) => {
        setServicos(servicos.filter(servico => servico.id !== id));
    };

    const selecionarView = (valor, e) => {
        e.preventDefault();
        setTela(valor);
    };

    const construirView = () => {
        const botoes = [
            'Clientes', 'Produtos', 'Pets', 'Serviços',
            'Cadastrar Cliente', 'Cadastrar Produto', 
            'Cadastrar Pet', 'Cadastrar Serviço'
        ];

        switch(tela) {
            case 'Clientes':
                return (
                    <>
                        <BarraNavegacao seletorView={selecionarView} tema="#e3f2fd" botoes={botoes} />
                        <ListaCliente tema="#e3f2fd" clientes={clientes} removerCliente={removerCliente} />
                    </>
                );
            case 'Produtos':
                return (
                    <>
                        <BarraNavegacao seletorView={selecionarView} tema="#e3f2fd" botoes={botoes} />
                        <ListaProdutos tema="#e3f2fd" produtos={produtos} removerProduto={removerProduto} />
                    </>
                );
            case 'Pets':
                return (
                    <>
                        <BarraNavegacao seletorView={selecionarView} tema="#e3f2fd" botoes={botoes} />
                        <ListaPets tema="#e3f2fd" pets={pets} removerPet={removerPet} />
                    </>
                );
            case 'Serviços':
                return (
                    <>
                        <BarraNavegacao seletorView={selecionarView} tema="#e3f2fd" botoes={botoes} />
                        <ListaServicos tema="#e3f2fd" servicos={servicos} removerServico={removerServico} />
                    </>
                );
            case 'Cadastrar Cliente':
                return (
                    <>
                        <BarraNavegacao seletorView={selecionarView} tema="#e3f2fd" botoes={botoes} />
                        <FormularioCadastroCliente tema="#e3f2fd" adicionarCliente={adicionarCliente} />
                    </>
                );
            case 'Cadastrar Produto':
                return (
                    <>
                        <BarraNavegacao seletorView={selecionarView} tema="#e3f2fd" botoes={botoes} />
                        <FormularioCadastroProduto tema="#e3f2fd" adicionarProduto={adicionarProduto} />
                    </>
                );
            case 'Cadastrar Pet':
                return (
                    <>
                        <BarraNavegacao seletorView={selecionarView} tema="#e3f2fd" botoes={botoes} />
                        <FormularioCadastroPet tema="#e3f2fd" adicionarPet={adicionarPet} />
                    </>
                );
            case 'Cadastrar Serviço':
                return (
                    <>
                        <BarraNavegacao seletorView={selecionarView} tema="#e3f2fd" botoes={botoes} />
                        <FormularioCadastroServico tema="#e3f2fd" adicionarServico={adicionarServico} />
                    </>
                );
            default:
                return (
                    <>
                        <BarraNavegacao seletorView={selecionarView} tema="#e3f2fd" botoes={botoes} />
                        <ListaCliente tema="#e3f2fd" clientes={clientes} removerCliente={removerCliente} />
                    </>
                );
        }
    };

    return construirView();
}
