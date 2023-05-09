import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Layout from '@/components/Layout'
import Tabela from '@/components/Tabela'
import Cliente from '@/core/CLiente'
import Botao from '@/components/Botao'
import Formulario from '@/components/Formulario'
import { useState } from 'react'

export default function Home() {


    const clientes = [
        new Cliente('Ana', 34, '1'),
        new Cliente('Bia', 45, '2'),
        new Cliente('Carlos', 23, '3'),
        new Cliente('Pedro', 54, '5'),
    ]

    function clienteSelecionado() {

    }

    function clienteExcluido() {

    }

    const [visivel, setVisivel] = useState<'tabela' | 'formulario'>()

    return (
        <div className={`
            flex justify-center items-center h-screen
            bg-gradient-to-r from-blue-500 to-purple-500
            text-white
        `}>
            <Layout titulo='Cadastro Simples'>
                {visivel === 'tabela' ? (
                    <>
                    <div className='flex justify-end'>
                        <Botao className='mb-4'>Novo Cliente</Botao>
                    </div>
                    <Tabela
                        clientes={clientes}
                        clienteSelecionado={clienteSelecionado}
                        clienteExcluido={clienteExcluido}
                    />
                </>
                ) : (
                    <Formulario cliente={clientes[0]} />
                )}
            </Layout>
        </div>
    )
}
