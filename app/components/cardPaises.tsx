import Image from "next/image";

interface cardPaisesProp{
    nome: string,
    local: string,
    meta: string,
    img: string,
}

const CardPaises: React.FC<cardPaisesProp> = ({
    nome,
    local,
    meta,
    img }) => {
        return(
            <div>
                <article className="relative flex flex-col bg-gray-200 m-5 p-5 rounded-xl w-60">
                   
                   <div className="flex items-start justify-between"> 
                        <Image className="rounded-lg"
                            src = {img}
                            alt = {`Bandeira de ${nome}`}
                            height = {50}
                            width = {80} /> 

                        <div className="flex space-x-3">                   
                            <img className="w-6 cursor-pointer" src="editar.png" alt="Editar"></img> 
                            <img className="w-5 cursor-pointer" src="x.svg" alt="Excluir"></img>                
                        </div>                          
                            
                    </div>

                    <h1 className="text-x1 text-green-800 font-bold font-sans mt-2 mb-2">{nome}</h1>                
                    <h2 className="text-black/70">{local}</h2>
                    <h2 className="text-black/70">{meta}</h2>

                </article>
            </div>  
        )
    }

    export default CardPaises;