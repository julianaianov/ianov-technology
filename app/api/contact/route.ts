import { NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, message } = await request.json()

    // Validação básica
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Nome, email e mensagem são obrigatórios" },
        { status: 400 }
      )
    }

    // Verificar se a API key está configurada
    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { error: "API key do Resend não configurada" },
        { status: 500 }
      )
    }

    // Formatar mensagem
    const emailContent = `
Nova mensagem de contato do site Ianov Technology

Nome: ${name}
Email: ${email}
Telefone: ${phone || "Não informado"}

Mensagem:
${message}

---
Este e-mail foi enviado automaticamente pelo formulário de contato do site.
    `.trim()

    // Enviar e-mail usando Resend
    // Nota: Para usar um e-mail personalizado no "from", você precisa verificar o domínio no Resend
    // Por enquanto, usamos o domínio de teste do Resend
    const fromEmail = process.env.EMAIL_FROM || "onboarding@resend.dev"
    const toEmail = process.env.EMAIL_TO || "ianov.technology@gmail.com"
    
    const { data, error } = await resend.emails.send({
      from: `Ianov Technology <${fromEmail}>`,
      to: toEmail,
      replyTo: email,
      subject: `Nova mensagem de contato - ${name}`,
      text: emailContent,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">
            Nova mensagem de contato do site Ianov Technology
          </h2>
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <p><strong>Nome:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Telefone:</strong> ${phone || "Não informado"}</p>
          </div>
          <div style="background-color: #fff; padding: 20px; border-left: 4px solid #3b82f6; margin: 20px 0;">
            <p><strong>Mensagem:</strong></p>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          <p style="color: #666; font-size: 12px; margin-top: 30px; border-top: 1px solid #ddd; padding-top: 10px;">
            Este e-mail foi enviado automaticamente pelo formulário de contato do site.
          </p>
        </div>
      `,
    })

    if (error) {
      console.error("Erro do Resend:", error)
      return NextResponse.json(
        { error: "Erro ao enviar e-mail. Tente novamente mais tarde." },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { message: "E-mail enviado com sucesso!", data },
      { status: 200 }
    )
  } catch (error) {
    console.error("Erro ao enviar e-mail:", error)
    return NextResponse.json(
      { error: "Erro ao enviar e-mail. Tente novamente mais tarde." },
      { status: 500 }
    )
  }
}

