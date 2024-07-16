
import React from 'react';
import Link from "next/link";

const Rodape = () => {
    return (
        <>
            <footer className="bg-green-800 h-28 mt-20 flex justify-center items-center text-white" id="contato">
                <div className="flex space-x-20">
                    <p className="text-white font-bold max-w-44">Entre em contato e faça seu cadastro:</p>
                    <p className="text-white">Endereço: Av.1234, bairro Cabo Branco</p>
                    <p className="text-white">Telefone: (00) 0000-0000</p>
                    <p className="text-white font-bold cursor-pointer hover:text-blue-500"><a href="#reserva.tsx">Clique aqui para fazer a reserva</a></p>
                </div>
                <Link href="/reserva">Reserva</Link>
            </footer>
        </>
    )
}

export default Rodape