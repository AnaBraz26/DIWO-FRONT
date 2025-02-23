"use client";
import Image from "next/image";
import { Formik, Form, Field } from "formik";
import InputMask from "react-input-mask-next";
import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import CardPaises from "./components/cardPaises";

export default function Home(){

  return (
    <div>
      <NavBar></NavBar>
      
      {/* ------------------------------------------------ */}
          
      {/* Formulário de Seleção e Edição */}
      <div className="flex justify-center items-center bg-green-600 p-20">
        
        <div className="flex flex-col w=1/3ml-4">
          <h2 className="mr-4 ml-5 text-white">País</h2>
          <input className="ml-4 block w-full px-3 py-2 border bg-white shadow-sm focus:ring-indigo-500focus:border-indigo-500 sm:text-sm rounded-md"
                 placeholder="Selecione"></input>
        </div>
        
        <div className="flex flex-col w-1/3 ml-4">
        <h2 className="mr-4 ml-5 text-white">Local</h2>
        <input className="ml-4 block w-full px-3 py-2 border bg-white shadow-sm focus:ring-indigo-500focus:border-indigo-500 sm:text-sm rounded-md"
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
        <CardPaises
          nome = "Brasil"
          local = "Brasilia"
          meta = "10/2025"
          />
      </div>

    </div>
  );
}