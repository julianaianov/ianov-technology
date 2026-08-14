"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface RotatingWordsProps {
  words: string[]
  className?: string
  /** ms por caractere ao digitar */
  typeSpeed?: number
  /** ms por caractere ao apagar */
  deleteSpeed?: number
  /** pausa com a palavra completa na tela */
  holdTime?: number
}

/**
 * Efeito de máquina de escrever alternando entre palavras.
 * Mantém a largura reservada pela maior palavra para o título não "pular".
 */
export function RotatingWords({
  words,
  className,
  typeSpeed = 75,
  deleteSpeed = 38,
  holdTime = 1700,
}: RotatingWordsProps) {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState("")
  const [deleting, setDeleting] = useState(false)
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches)
  }, [])

  useEffect(() => {
    if (reduced) {
      setText(words[0])
      return
    }

    const current = words[index % words.length]

    if (!deleting && text === current) {
      const t = setTimeout(() => setDeleting(true), holdTime)
      return () => clearTimeout(t)
    }

    if (deleting && text === "") {
      setDeleting(false)
      setIndex((i) => (i + 1) % words.length)
      return
    }

    const t = setTimeout(
      () =>
        setText((prev) =>
          deleting ? current.slice(0, prev.length - 1) : current.slice(0, prev.length + 1),
        ),
      deleting ? deleteSpeed : typeSpeed,
    )
    return () => clearTimeout(t)
  }, [text, deleting, index, words, typeSpeed, deleteSpeed, holdTime, reduced])

  const longest = words.reduce((a, b) => (a.length >= b.length ? a : b), "")

  return (
    // inline-grid empilha as duas camadas na mesma célula: a invisível reserva
    // a largura da maior palavra e o título nunca "pula" ao trocar o texto.
    <span className={cn("inline-grid", className)}>
      <span aria-hidden className="invisible col-start-1 row-start-1">
        {longest}
      </span>
      <span className="col-start-1 row-start-1 justify-self-start">
        <span className="gradient-text">{text}</span>
        <span
          aria-hidden
          className="animate-caret ml-1 inline-block h-[0.85em] w-[3px] translate-y-[0.06em] bg-cyan-300 align-middle shadow-[0_0_12px_#22d3ee]"
        />
      </span>
    </span>
  )
}
