"use client";
import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import CardPaises from "./components/cardPaises";

interface Pais{
  nome: string;
  bandeira: string;
  local: string;
  meta: string;
}

export default function Home(){
  const [paises, setPaises] = useState<Pais[]>([]);
  const [paisSelecionado, setPaisSelecionado] = useState<string>("");

  useEffect(() => {
    fetch("https://restcountries.com/v2/all")
    .then ((response) => response.json())
    .then ((data)=> {
       const paisesFormatados: Pais[] = data.map((pais: any) => ({
        nome: pais.translations?.pt || pais.name,
        bandeira: pais.flag?.svg || pais.flag,
       }));
       setPaises(paisesFormatados)
    })
    .catch((erro) => console.error("Erro ao carregar os paises:", erro));
  }, []);

  return (
    <div>
      <NavBar></NavBar>
      
      {/* ------------------------------------------------ */}
          
      {/* Formulário de Seleção e Edição */}
      <div className="flex justify-center items-center bg-green-600 p-20">
        
        <div className="flex flex-col w=1/3 ml-4">
          <h2 className="mr-4 ml-5 text-white">País</h2>
          <select className="text-black ml-4 block w-full px-3 py-2 border bg-white shadow-sm focus:ring-indigo-500focus:border-indigo-500 sm:text-sm rounded-md"
                  value={paisSelecionado}
                  onChange={(e) => setPaisSelecionado(e.target.value)}
                  >        
                <option value =""> Selecione um pais</option>
                  {paises.map((pais,index) =>( 
                    <option key={index} value={pais.nome}>
                    {pais.nome}
                </option>
                ))}
            </select>
        </div>
        
        <div className="flex flex-col w-1/3 ml-4">
        <h2 className="mr-4 ml-5 text-white">Local</h2>
        <input className="text-black ml-4 block w-full px-3 py-2 border bg-white shadow-sm focus:ring-indigo-500focus:border-indigo-500 sm:text-sm rounded-md"
                 placeholder="Digite o local que deseja conhecer"></input>
        </div>

        <div className="flex flex-col w=1/3 ml-4">
        <h2 className="mr-4 ml-5 text-white">Meta</h2>
        <input className="ml-4 block w-full px-3 py-2 border bg-white shadow-sm focus:ring-indigo-500focus:border-indigo-500 sm:text-sm rounded-md"
                 placeholder="Mês/Ano"></input>
        </div>

        <div className="flex flex-col ml-4 w=1/3">
        <button className="mt-6 ml-4 px-9 py-3 border bg-green-900 shadow-sm focus:ring-indigo-500focus:border-indigo-500 sm:text-sm rounded-md">
          Adicionar</button>
        </div>      
      </div>

      <div className="flex flex-wrap ml-32">
        {paises.map((pais, index) => (
          <CardPaises
            key={index}
            nome = {pais.nome}
            local = "Brasilia"
            meta = "202"
            img = {pais.bandeira}/>
        ))}
      </div>

    </div>
  );
}