import React from "react";
import Image from "next/image"

interface cardPaisesProp{    
    ImgSrc: string,
    nome: string,
    local: string,
    meta: string 

}

const cardPaises: React.FC<cardPaisesProp> = ({
    ImgSrc,
    nome,
    local,
    meta }) => {
        return(
            <article className="flex flex-col m-5 items-center bg-gray-200 w-fill p-5 rounded-xl">
                <Image className="rounded-lg" 
                    src = {ImgSrc}
                    alt ={"profile picture"} 
                    height={100}
                    width={100}></Image>
                <h1 className="text-x1 font-medium mt-2 mb-2">{nome}</h1>
                <h2 className="text-black/70">{local}</h2>
                <h2 className="text-black/70">{meta}</h2>
            </article>    
        )
    }