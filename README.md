# Next.js Financial Dashboard

Este projeto é uma aplicação web Full Stack de um painel financeiro, desenvolvida como parte da atividade da disciplina do **Prof. Rogério**. O projeto segue o currículo oficial "Next.js Learn", abrangendo desde a estilização básica até autenticação e banco de dados.

🔗 **Deploy na Vercel:** https://curso-nextjs-r8zj.vercel.app/

## Tecnologias Utilizadas

* **Framework:** Next.js 16 (App Router)
* **Linguagem:** TypeScript
* **Estilização:** Tailwind CSS
* **Banco de Dados:** PostgreSQL (via Vercel/Neon)
* **Autenticação:** NextAuth.js (v5 Beta)
* **ORM/Query:** Vercel Postgres SDK (SQL puro)
* **Gerenciador de Pacotes:** pnpm

## Funcionalidades

* **Dashboard Dinâmico:** Gráficos de receita e cartões de resumo com dados reais do banco.
* **Autenticação:** Sistema de Login seguro com criptografia de senha (bcrypt).
* **CRUD de Faturas:** Criação, Edição e Exclusão de faturas com "Server Actions".
* **Busca e Paginação:** Pesquisa em tempo real (com Debounce) e paginação via URL Params.
* **Responsividade:** Layout adaptável para dispositivos móveis e desktop.
* **Streaming:** Carregamento otimizado com Skeletons e Suspense.

---

## Desafios e Soluções (Learning Journey)

Durante o desenvolvimento deste projeto, enfrentei e resolvi diversos desafios técnicos que foram além do tutorial básico:

### 1. Conexão e Seed do Banco de Dados (Postgres)
Tive dificuldades iniciais com o script automático de *seed* (população de dados), que falhava ao criar as tabelas devido a timeouts e erros de conexão.
* **Solução:** Executei os comandos SQL (`CREATE TABLE`) manualmente através do painel "SQL Editor" da Neon/Vercel para garantir a estrutura correta das tabelas `revenue`, `invoices`, `customers` e `users`. Posteriormente, usei o comando `TRUNCATE` para limpar dados duplicados.

### 2. Segurança e Deploy na Vercel (CVE-2025-66478)
No momento do deploy, a Vercel bloqueou a construção do projeto alertando sobre uma vulnerabilidade crítica na versão `16.0.3` do Next.js.
* **Solução:** Foi necessário fazer um *upgrade* forçado das dependências. Removi o arquivo de trava `pnpm-lock.yaml`, atualizei para o **Next.js 16.0.7** e forcei um *Redeploy without Cache* na Vercel.

### 3. Autenticação com NextAuth v5
A configuração da autenticação apresentou erros de rota (`404`) ao tentar realizar o login em produção.
* **Solução:** Implementei manualmente a rota de API (`app/api/auth/[...nextauth]/route.ts`) e exportei corretamente os `handlers` no arquivo de configuração, além de configurar as variáveis de ambiente (`AUTH_SECRET`) no painel da Vercel.

### 4. Tipagem Estrita do TypeScript em Server Actions
Houve conflitos de tipagem entre o retorno das *Server Actions* e o esperado pelo formulário do React.
* **Solução:** Ajustei as funções do CRUD (`createInvoice`, etc.) para lançar erros (`throw Error`) em vez de retornar objetos de erro, permitindo que o arquivo `error.tsx` do Next.js capturasse as falhas corretamente.

---