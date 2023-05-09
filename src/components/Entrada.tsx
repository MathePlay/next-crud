
interface EntradaProps{
    tipo?: 'text' | 'number'
    texto: string
    valor: any
    SomenteLeitura?: boolean
    className?: string
    valorModou?: (valor: any) => void
}

export default function Entrada(props: EntradaProps){
    return(
        <div className={`flex flex-col ${props.className}`}>
            <label className="mb-2">
                {props.texto}
            </label>
            <input 
                type={props.tipo ?? 'text'}
                value={props.valor}
                readOnly={props.SomenteLeitura}
                className={`
                    border border-purple-500 rounded-lg
                    bg-gray-100 focus:outline-none 
                    ${props.SomenteLeitura ? '' : 'focus:bg-white'}
                    px-4 py-2
                `}
                onChange={e => props.valorModou?.(e.target.value)}
            />
        </div>
    )
}