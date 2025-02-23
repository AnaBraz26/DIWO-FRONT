"use client";
import dynamic from "next/dynamic";
import React from "react";

interface ModalProps{
    isVisible2: boolean;
    onClose2: () => void;
}

const Modal_excluir: React.FC<ModalProps> = ({isVisible2, onClose2}) =>{
    const [editorContent, setEditorContent] = React.useState<string>('');

    if(!isVisible2) return null;

    return(
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="flex flex-col m-10 items-center bg-green-600 w-50 h-25 p-5 rounded-xl">
                <h2 className="text-black text-center text-xl mb-4 justify-center text-bold" > Você tem certeza que quer excluir esse destino? </h2>
                <div className="w-1/2 flex justify-center">
                    <button onClick={onClose2} className="flex m-10 items-center px-10 py-5 bg-red-500 text-black text-bold rounded-md"> Não </button>
                    <button onClick={onClose2} className="flex m-10 items-center px-10 py-5 bg-blue-500 text-black text-bold rounded-md"> Sim </button>
                </div>
            </div>
        </div>
    );
};

export default Modal_excluir;