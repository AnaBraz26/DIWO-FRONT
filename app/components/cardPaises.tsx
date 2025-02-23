import Image from "next/image";

interface cardPaisesProp{
    nome: string,
    local: string,
    meta: string,
    img: string,
}

const cardPaises: React.FC<cardPaisesProp> = ({
    nome,
    local,
    meta,
    img }) => {
        return(
            <article className="flex flex-col m-5 bg-gray-200 w-fill p-5 rounded-xl">
                <Image className="rounded-lg"
                       src = {img}
                       alt = {"bandeira"}
                       height = {100}
                       width = {100}></Image>
                <h1 className="text-x1 font-medium mt-2 mb-2">{nome}</h1>
                <h2 className="text-black/70">{local}</h2>
                <h2 className="text-black/70">{meta}</h2>
            </article>
        )
    }

    export default cardPaises;