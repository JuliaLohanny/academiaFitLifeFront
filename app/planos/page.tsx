"use client"

import { useState, useEffect } from "react"

interface Plano {
    id: number
    nome: string
    preco: number
}

export default function Planos() {

    const [planos, setPlanos] = useState<Plano[]>([])
    const [carregando, setCarregando] = useState(true)

    async function listarPlanos() {
        try {
            const response = await fetch("http://localhost:3001/planos")

            const data = await response.json()

            if (!response.ok) {
                throw new Error("Erro ao buscar planos!")
            }

            console.log(data)
            setPlanos(data)

        } catch (error) {
            console.log("Error: ", error)
        } finally {
            setCarregando(false)
        }
    }

    useEffect(() => {
        listarPlanos()
    }, [])

    return (
        <main className="min-h-screen bg-slate-950 px-6 py-16">

            {/* Cabeçalho */}
            <div className="mx-auto max-w-6xl text-center mb-12">

                <p className="text-emerald-400 font-semibold text-sm uppercase tracking-[0.25em] mb-3">
                    FitLife
                </p>

                <h1 className="text-4xl md:text-5xl font-bold text-white">
                    Escolha seu plano
                </h1>

                <p className="text-slate-400 mt-4 max-w-xl mx-auto">
                    Encontre o plano ideal para alcançar seus objetivos
                    e transformar sua rotina.
                </p>

            </div>

            {/* Carregando */}
            {carregando ? (

                <div className="flex justify-center items-center py-20">
                    <div className="flex items-center gap-3 text-slate-300">
                        <div className="h-5 w-5 animate-spin rounded-full border-2 border-slate-600 border-t-emerald-400" />
                        <p>Carregando planos...</p>
                    </div>
                </div>

            ) : (

                <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                    {planos.map((plano, index) => (

                        <div
                            key={plano.id}
                            className="group relative overflow-hidden rounded-2xl bg-white p-7 shadow-xl transition duration-300 hover:-translate-y-2 hover:shadow-emerald-500/10"
                        >

                            {/* Destaque */}
                            {index === 1 && (
                                <div className="absolute right-0 top-0 rounded-bl-xl bg-emerald-500 px-4 py-2 text-xs font-bold uppercase tracking-wide text-white">
                                    Popular
                                </div>
                            )}

                            {/* Nome */}
                            <div className="mb-6">

                                <h2 className="text-2xl font-bold text-slate-900">
                                    {plano.nome}
                                </h2>

                                <div className="mt-4 flex items-baseline">
                                    <span className="text-sm font-medium text-slate-500">
                                        R$
                                    </span>

                                    <span className="ml-1 text-4xl font-extrabold text-slate-900">
                                        {Number(plano.preco).toFixed(2)}
                                    </span>

                                    <span className="ml-2 text-sm text-slate-500">
                                        /mês
                                    </span>
                                </div>

                            </div>

                            {/* Separador */}
                            <div className="h-px bg-slate-200 mb-6" />

                            {/* Benefícios */}
                            <ul className="space-y-4 mb-8">

                                <li className="flex items-center gap-3 text-slate-600">
                                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                                        ✓
                                    </span>
                                    Acesso aos treinos
                                </li>

                                <li className="flex items-center gap-3 text-slate-600">
                                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                                        ✓
                                    </span>
                                    Acompanhamento personalizado
                                </li>

                                <li className="flex items-center gap-3 text-slate-600">
                                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                                        ✓
                                    </span>
                                    Suporte online
                                </li>

                            </ul>

                            {/* Botão */}
                            <button
                                className="w-full rounded-xl bg-emerald-500 py-3.5 font-bold text-white transition hover:bg-emerald-600 active:scale-[0.98]"
                            >
                                Se inscrever
                            </button>

                        </div>

                    ))}

                </div>

            )}

            {/* Nenhum plano */}
            {!carregando && planos.length === 0 && (
                <div className="text-center py-20">
                    <p className="text-slate-400">
                        Nenhum plano disponível no momento.
                    </p>
                </div>
            )}

        </main>
    )
}