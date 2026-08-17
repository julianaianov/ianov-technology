"use client"

import { forwardRef, useEffect, useRef } from "react"

interface AutoVideoProps {
  src: string
  className?: string
  poster?: string
}

/**
 * Vídeo de fundo que toca sozinho também no celular.
 *
 * No mobile o autoplay falha por três motivos e cada um é tratado aqui:
 * 1. `preload="none"` faz o navegador não baixar nada e o play nunca começar
 *    — por isso usamos "metadata" e chamamos play() explicitamente;
 * 2. o iOS só libera autoplay com o vídeo mudo de verdade (a propriedade,
 *    não só o atributo, que pode se perder na hidratação);
 * 3. modo de baixo consumo e economia de dados bloqueiam a primeira
 *    tentativa — então repetimos no primeiro toque do usuário.
 *
 * De quebra, o vídeo pausa quando sai da tela para poupar bateria e dados.
 */
export const AutoVideo = forwardRef<HTMLVideoElement, AutoVideoProps>(function AutoVideo(
  { src, className, poster },
  forwardedRef,
) {
  const innerRef = useRef<HTMLVideoElement | null>(null)

  const setRefs = (node: HTMLVideoElement | null) => {
    innerRef.current = node
    if (typeof forwardedRef === "function") forwardedRef(node)
    else if (forwardedRef) forwardedRef.current = node
  }

  useEffect(() => {
    const video = innerRef.current
    if (!video) return

    // Garante o estado que os navegadores móveis exigem para autoplay.
    video.muted = true
    video.defaultMuted = true
    video.playsInline = true

    const tryPlay = () => {
      const attempt = video.play()
      // play() rejeita quando o navegador bloqueia; ignoramos e tentamos de novo
      // no próximo gatilho em vez de deixar estourar um erro no console.
      if (attempt && typeof attempt.catch === "function") attempt.catch(() => {})
    }

    // Tenta assim que houver dado suficiente.
    video.addEventListener("loadeddata", tryPlay)
    video.addEventListener("canplay", tryPlay)

    // Rede lenta: se ainda não começou, o carregamento explícito destrava.
    if (video.readyState === 0) video.load()
    tryPlay()

    // Última cartada: qualquer interação do usuário libera o play mesmo
    // com bloqueio por economia de bateria.
    const onGesture = () => tryPlay()
    const gestures: Array<keyof DocumentEventMap> = ["touchstart", "click", "scroll"]
    gestures.forEach((evt) =>
      document.addEventListener(evt, onGesture, { once: true, passive: true }),
    )

    // Pausa fora da tela para não gastar bateria e dados à toa.
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) tryPlay()
        else video.pause()
      },
      { threshold: 0.05 },
    )
    observer.observe(video)

    return () => {
      video.removeEventListener("loadeddata", tryPlay)
      video.removeEventListener("canplay", tryPlay)
      gestures.forEach((evt) => document.removeEventListener(evt, onGesture))
      observer.disconnect()
    }
  }, [src])

  return (
    <video
      ref={setRefs}
      autoPlay
      muted
      loop
      playsInline
      // "metadata" em vez de "none": sem isso o mobile não inicia sozinho.
      preload="metadata"
      poster={poster}
      aria-hidden
      className={className}
    >
      <source src={src} type="video/mp4" />
    </video>
  )
})
