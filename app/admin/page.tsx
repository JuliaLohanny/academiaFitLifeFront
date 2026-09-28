"use client"

import { useState } from "react"

export default function Admin() {

    const [nome, setNome] = useState("")
    const [preco, setPreco] = useState("")

    async function cadastrarPlano(e: any) {
        e.preventDefault()

        try {
            const response = await fetch("http://localhost:3001/planos", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    nome,
                    preco
                })
            })

            if (response.ok) {
                alert("Plano cadastrado com sucesso")
                setNome("")
                setPreco("")
            }
        } catch (error) {
            console.log(error)
            alert("Erro ao cadastrar plano")
        }
    }

    return (
        <main className="min-h-screen bg-slate-950 flex items-center justify-center px-4 py-10">

            <div className="w-full max-w-lg">

                {/* Cabeçalho */}
                <div className="mb-8 text-center">
                    <p className="text-emerald-400 font-semibold text-sm uppercase tracking-widest mb-2">
                        FitLife
                    </p>

                    <h1 className="text-3xl font-bold text-white">
                        Cadastrar Plano
                    </h1>

                    <p className="text-slate-400 mt-2">
                        Adicione um novo plano para seus clientes.
                    </p>
                </div>

                {/* Card */}
                <div className="bg-white rounded-2xl shadow-2xl p-8">

                    <form onSubmit={cadastrarPlano} className="space-y-6">

                        {/* Nome */}
                        <div>
                            <label
                                htmlFor="nome"
                                className="block text-sm font-semibold text-slate-700 mb-2"
                            >
                                Nome do plano
                            </label>

                            <input
                                id="nome"
                                type="text"
                                value={nome}
                                onChange={(e) => setNome(e.target.value)}
                                placeholder="Ex: Plano Premium"
                                required
                                className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 placeholder:text-slate-400"
                            />
                        </div>

                        {/* Preço */}
                        <div>
                            <label
                                htmlFor="preco"
                                className="block text-sm font-semibold text-slate-700 mb-2"
                            >
                                Preço mensal
                            </label>

                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 font-medium">
                                    R$
                                </span>

                                <input
                                    id="preco"
                                    type="number"
                                    step="0.01"
                                    min="0"
                                    value={preco}
                                    onChange={(e) => setPreco(e.target.value)}
                                    placeholder="0,00"
                                    required
                                    className="w-full rounded-xl border border-slate-300 pl-12 pr-4 py-3 text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 placeholder:text-slate-400"
                                />
                            </div>
                        </div>

                        {/* Botão */}
                        <button
                            type="submit"
                            className="w-full rounded-xl bg-emerald-500 px-4 py-3.5 font-bold text-white shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-600 hover:shadow-emerald-500/30 active:scale-[0.98]"
                        >
                            Cadastrar Plano
                        </button>

                    </form>
                </div>

                {/* Rodapé */}
                <p className="text-center text-slate-500 text-sm mt-6">
                    Painel administrativo • FitLife
                </p>

            </div>
        </main>
    )
}