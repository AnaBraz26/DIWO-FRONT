"use client";
import Image from "next/image";
import { useState } from "react";
import Editar from "../modal/Editar";
import Excluir from "../modal/Excluir";

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
    
        const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
        const openModal = () => setIsModalVisible(true);
        const closeModal = () => setIsModalVisible(false);

        const [isModalVisible2, setIsModalVisible2] = useState<boolean>(false);
        const openModal2 = () => setIsModalVisible2(true);
        const closeModal2 = () => setIsModalVisible2(false);

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
                            <button onClick={openModal} className="w-6 cursor-pointer">
                                <img src="editar.png" alt="Editar"></img>
                            </button>
                                <Editar isVisible={isModalVisible} onClose={closeModal}/>
                                            
                            <button onClick={openModal2} className="w-6 cursor-pointer">
                                <img src="x.svg" alt="Excluir"></img>   
                            </button>
                                <Excluir isVisible2={isModalVisible2} onClose2={closeModal2}/>     
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