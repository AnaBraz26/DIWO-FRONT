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
                <article className="flex flex-col m-5 bg-gray-200 w-fill p-5 rounded-xl">
                    <Image className="rounded-lg object-cover justify-left"
                        src = {img}
                        alt = {`Bandeira de ${nome}`}
                        height = {50}
                        width = {50}></Image>
                    <h1 className="text-x1 font-medium mt-2 mb-2">{nome}</h1>
                    <h2 className="text-black/70">{local}</h2>
                    <h2 className="text-black/70">{meta}</h2>
                </article>
            </div>    
        )
    }

    export default CardPaises;