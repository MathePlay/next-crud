
interface BotaoProps {
    className?: string
    children: any
    cor?: string
}

export default function Botao(props: BotaoProps){
    
    return (
        <button className={`
            ${props.cor ?? 'bg-gradient-to-r from-purple-400 to-purple-700'}
            text-gray-100 px-4 py-2 rounded-md
            ${props.className}
        `}>
            {props.children}
        </button>
    )
}