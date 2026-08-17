/**
 * Fontes de mídia do site em um só lugar.
 *
 * Hoje apontam para vídeos hospedados no Mixkit (uso livre). Para trocar por
 * vídeos próprios, coloque os arquivos em `public/videos/` e substitua a URL
 * por `/videos/seu-arquivo.mp4` — nenhum componente precisa ser alterado.
 *
 * Alternativas já verificadas, caso queira variar:
 *   tela de código ..... https://assets.mixkit.co/videos/9757/9757-720.mp4
 *   corredor de data center  https://assets.mixkit.co/videos/23282/23282-720.mp4
 *   mapa-múndi de dados ... https://assets.mixkit.co/videos/12748/12748-720.mp4
 */
export const videos = {
  /** Topo da página — olho refletindo código (vídeo já usado no site antigo) */
  hero: "https://assets.mixkit.co/videos/46631/46631-720.mp4",
  /** Bloco "em produção" — mãos digitando em teclado com iluminação neon */
  showcase: "https://assets.mixkit.co/videos/43527/43527-720.mp4",
  /** Faixa de transição — rede de pontos luminosos conectados */
  interlude: "https://assets.mixkit.co/videos/31510/31510-720.mp4",
  /** Bloco de contato — skyline urbano em neon à noite */
  contact: "https://assets.mixkit.co/videos/28653/28653-720.mp4",
} as const

/**
 * Primeiro quadro de cada vídeo, servido enquanto ele carrega e usado como
 * imagem fixa caso o aparelho bloqueie o autoplay (modo de baixo consumo do
 * iOS, por exemplo) — evita o retângulo preto. Ao trocar um vídeo, gere o
 * poster correspondente a partir do novo arquivo.
 */
export const posters = {
  hero: "/posters/hero.jpg",
  showcase: "/posters/showcase.jpg",
  interlude: "/posters/interlude.jpg",
  contact: "/posters/contact.jpg",
} as const
