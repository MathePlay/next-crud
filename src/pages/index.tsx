import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Layout from '@/components/Layout'

export default function Home() {
  return (
    <h1 className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}>
      <Layout titulo='Cadastro Simples'>
        <span>Conteudo</span>
      </Layout>
    </h1>
  )
}
