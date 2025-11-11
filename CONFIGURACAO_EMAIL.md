# Configuração de E-mail com Resend

O formulário de contato usa o Resend para envio de e-mails. O Resend é uma API moderna e confiável para envio de e-mails transacionais.

## Variáveis de Ambiente

O arquivo `.env.local` já está configurado com as seguintes variáveis:

```
RESEND_API_KEY=re_h9S3NEjo_KExCapN9HbCaPX2uG3a2Ay2a
EMAIL_FROM=ianov.technology@gmail.com
EMAIL_TO=ianov.technology@gmail.com
```

## Configuração no Resend

1. Acesse: https://resend.com
2. Faça login na sua conta
3. Vá em "API Keys" para gerenciar suas chaves de API
4. Para produção, você precisará verificar seu domínio no Resend

## Nota

- O arquivo `.env.local` não será commitado no Git (está no .gitignore)
- Nunca compartilhe sua API key publicamente
- Para produção, configure essas variáveis de ambiente no seu provedor de hospedagem (Vercel, Netlify, etc.)
- O Resend oferece 3.000 e-mails gratuitos por mês no plano gratuito

