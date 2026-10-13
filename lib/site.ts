/** Dados do site usados no SEO: metadados, sitemap, robots e dados estruturados. */
// Na Vercel, sem NEXT_PUBLIC_SITE_URL, vale o domínio de produção do projeto.
const vercelUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? (vercelUrl ? `https://${vercelUrl}` : "https://ianov.tech")
).replace(/\/$/, "")

export const siteName = "Ianov Technology"

export const siteTitle = "Ianov Technology | Criação de Sites, Aplicativos e Sistemas Web"

export const siteDescription =
  "Empresa de desenvolvimento de software no Rio de Janeiro. Criamos sites institucionais, aplicativos mobile e sistemas web sob medida para o seu negócio. Peça um orçamento."

export const siteKeywords = [
  "criação de sites",
  "desenvolvimento de sites",
  "site institucional",
  "desenvolvimento de aplicativos",
  "criação de aplicativos",
  "aplicativo mobile",
  "sistemas web",
  "sistema sob medida",
  "desenvolvimento de software",
  "empresa de software Rio de Janeiro",
  "criação de sites Rio de Janeiro",
  "landing page",
  "Ianov Technology",
]

export const siteServices = ["Sites Institucionais", "Aplicativos Mobile", "Sistemas Web"]

export const siteContact = {
  email: "ianov.technology@gmail.com",
  phone: "+5521995007374",
  city: "Rio de Janeiro",
  region: "RJ",
  country: "BR",
}
