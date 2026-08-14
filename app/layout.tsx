import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import Script from "next/script"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" })
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" })

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://ianov.tech"),
  title: "Ianov Technology - Transformação Digital para seu Negócio",
  description:
    "Criamos sites e aplicativos personalizados para empresas que buscam digitalizar seus negócios. Soluções tecnológicas modernas e eficientes.",
  generator: "v0.app",
  openGraph: {
    title: "Ianov Technology - Transformação Digital para seu Negócio",
    description:
      "Sites, apps e plataformas construídos com tecnologia de ponta — rápidos, escaláveis e desenhados para converter.",
    locale: "pt_BR",
    type: "website",
    images: ["/logo.png"],
  },
}

export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "dark",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${geist.variable} ${geistMono.variable}`}>
      <head>
        {/* Conexão antecipada com o CDN dos vídeos de fundo */}
        <link rel="preconnect" href="https://assets.mixkit.co" crossOrigin="anonymous" />

        {/* Sem JavaScript, o conteúdo animado no scroll continua visível */}
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important;filter:none!important}`}</style>
        </noscript>
      </head>
      <body className="font-sans antialiased">
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-MFFPMH3M3H"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-MFFPMH3M3H');
          `}
        </Script>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
