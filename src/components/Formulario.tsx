import { useState } from "react";
import Entrada from "./Entrada";
import Cliente from "@/core/CLiente";
import Botao from "./Botao";

interface FormularioProps{
    cliente: Cliente
}

export default function Formulario(props: FormularioProps){
    const id = props.cliente?.id
    const [nome, setNome] = useState(props.cliente?.nome ?? '')
    const [idade, setIdade] = useState(props.cliente?.idade ?? 0)

    return(
        <div>
            {id ? (
                <Entrada
                    SomenteLeitura
                    texto='Id' 
                    valor={id}
                    className="mb-5"
                />
            ) : false}
            <Entrada 
                texto='Nome' 
                valor={nome}
                valorModou={setNome}
                className="mb-5"
            />
            <Entrada 
                texto='Idade' 
                tipo='number' 
                valor={idade}
                valorModou={setIdade}
            />
            <div className=" flex justify-end mt-7">
                <Botao cor="bg-gradient-to-r from-blue-400 to-blue-700" className="mr-2">
                    {id ? 'Alterar' : 'Salvar'}
                </Botao>
                <Botao cor="bg-gradient-to-r from-gray-400 to-gray-700">
                    Cancelar
                </Botao>
            </div>
        </div>
    )
}