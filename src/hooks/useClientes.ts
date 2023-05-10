import ClienteRepositorio from "@/backend/ClienteRepositorio"
import ColecaoCliente from "@/backend/db/ColecaoCliente"
import Cliente from "@/core/CLiente"
import { useEffect, useState } from "react"
import useTabelaOuForm from "./useTabelaOuForm"

export default function useClientes(){
    const repositorio: ClienteRepositorio = new ColecaoCliente

    const { tabelaVisivel, exibirTabela, exibirFormulario, formularioVisivel } = useTabelaOuForm()
    
    const [cliente, setCliente] = useState<Cliente>(Cliente.vazio)
    const [clientes, setClientes] = useState<Cliente[]>([])

    useEffect(obterTodos, [])
    
    function obterTodos(){
        repositorio.obterTodos().then(clientes => {
            setClientes(clientes)
            exibirTabela()
        })
    }

    function clienteSelecionado(cliente: Cliente) {
        setCliente(cliente)
        exibirFormulario()
    }

    async function excluirCliente(cliente: Cliente) {
        await repositorio.excluir(cliente)
        obterTodos()
    }

    async function salvarCliente(cliente: Cliente) {
        await repositorio.salvar(cliente)
        obterTodos()
    }

    function novoCliente(){
        setCliente(Cliente.vazio)
        exibirFormulario()
    }

    return {
        tabelaVisivel, exibirTabela,
        cliente,
        clientes,
        novoCliente,
        salvarCliente,
        excluirCliente,
        clienteSelecionado,
        obterTodos
    }
}