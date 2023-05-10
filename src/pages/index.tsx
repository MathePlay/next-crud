import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Layout from '@/components/Layout'
import Tabela from '@/components/Tabela'
import Cliente from '@/core/CLiente'
import Botao from '@/components/Botao'
import Formulario from '@/components/Formulario'
import { useEffect, useState } from 'react'
import ClienteRepositorio from '@/backend/ClienteRepositorio'
import ColecaoCliente from '@/backend/db/ColecaoCliente'
import useClientes from '@/hooks/useClientes'
import useTabelaOuForm from '@/hooks/useTabelaOuForm'

export default function Home() {

    const {
        tabelaVisivel, 
        exibirTabela,
        clienteSelecionado,
        excluirCliente,
        novoCliente, 
        salvarCliente, 
        cliente, 
        clientes
    } = useClientes()

    return (
        <div className={`
            flex justify-center items-center h-screen
            bg-gradient-to-r from-blue-500 to-purple-500
            text-white
        `}>
            <Layout titulo='Cadastro Simples'>
                {tabelaVisivel ? (
                    <>
                    <div className='flex justify-end'>
                        <Botao className='mb-4' onClick={novoCliente}>
                            Novo Cliente
                        </Botao>
                    </div>
                    <Tabela
                        clientes={clientes}
                        clienteSelecionado={clienteSelecionado}
                        clienteExcluido={excluirCliente}
                    />
                </>
                ) : (
                    <Formulario 
                        cliente={cliente}
                        clienteMudou={salvarCliente}
                        cancelado={() => exibirTabela()}
                    />
                )}
            </Layout>
        </div>
    )
}
