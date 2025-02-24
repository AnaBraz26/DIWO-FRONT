"use client";
import dynamic from "next/dynamic";
import React from "react";
import "react-quill/dist/quill.snow.css";

const ReactQuill = dynamic(() => import('react-quill'), {ssr: false})

interface ModalProps{
    isVisible: boolean;
    onClose: () => void;
}

const Modal_editar: React.FC<ModalProps> = ({isVisible, onClose}) =>{
    const [editorContent, setEditorContent] = React.useState<string>('');

    if(!isVisible) return null;

    return(
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-index">
            <div className="flex flex-col m-10 items-center justify-center bg-green-700 w-1/2 h-50 p-5 rounded-xl">
                <h2 className="text-xl text-black text-bold " > Editar Local </h2>
            
                <div className="justify-center">                          
                <div className="flex flex-col mt-5 items-center">
                    <h2 className="mr-4 ml-5 text-white">Local</h2>
                    <input className="ml-4 block w-full px-10 py-2 border bg-white shadow-sm focus:ring-indigo-500focus:border-indigo-500 sm:text-sm rounded-md"
                            placeholder="Digite o local que deseja conhecer"></input>
                </div>

                <div className="flex flex-col mt-5 items-center">
                    <h2 className="mr-4 ml-5 text-white">Meta</h2>
                    <input className="ml-4 block w-full px-10 py-2 border bg-white shadow-sm focus:ring-indigo-500focus:border-indigo-500 sm:text-sm rounded-md"
                            placeholder="Mês/Ano"></input>
                </div>
                

                <div className="w-1/2 flex flexjustify-center items-center">
                    <button onClick={onClose} className="flex m-10 items-center px-6 py-3 bg-red-500 text-white rounded-md"> Cancelar </button>
                    <button onClick={onClose} className="flex m-10 items-center px-6 py-3 bg-blue-500 text-white rounded-md"> Editar </button>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Modal_editar;