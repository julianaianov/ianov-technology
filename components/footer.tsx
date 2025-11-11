import Image from "next/image"

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Image src="/logo.png" alt="Ianov Technology" width={180} height={40} className="h-10 w-auto mb-4" />
            <p className="text-muted-foreground leading-relaxed max-w-md">
              Transformando negócios através da tecnologia. Criamos soluções digitais que impulsionam o crescimento e a
              inovação.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold mb-4">Navegação</h3>
            <ul className="space-y-2">
              <li>
                <a href="#servicos" className="text-muted-foreground hover:text-primary transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#processo" className="text-muted-foreground hover:text-primary transition-colors">
                  Processo
                </a>
              </li>
              <li>
                <a href="#tecnologias" className="text-muted-foreground hover:text-primary transition-colors">
                  Tecnologias
                </a>
              </li>
              <li>
                <a href="#contato" className="text-muted-foreground hover:text-primary transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contato</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>ianov.technology@gmail.com</li>
              <li>(21) 99500-7374</li>
              <li>Rio de Janeiro, Brasil</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Ianov Technology. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
