## O Projeto
O projeto foi criado em Next.js por ser um framework robusto com diversas funcionalidades que otimizam o tempo do desenvolvedor além de sido um ótimo candidato aos requisitos propostos. Mais abaixo irei listar as lib's que foram utilizadas e o porquê de cada uma.

## Libs utilizadas
1. [Better Auth](https://www.better-auth.com/docs/introduction)
   No caso do [better-auth](https://www.better-auth.com/docs/introduction), precisava de uma biblioteca que tivesse a compatibilidade com o spotify, mas que também pudesse me oferecer tanto api's que cumprissem o requisitos, tanto para o caso do projeto escalar, como por exemplo: outras formas de autenticação (email/senha, link magnético...), organization, passkey, etc.
2. [React Hook Form](https://react-hook-form.com/get-started)
   Lib sólida de formulário no ecossistema react, comunidade grande, atualizações ativas no github, documentação bem elaborada, compatibilidade com shadcn.
3. [Zod](https://zod.dev/basics)
   O zod é uma lib de validação e transformação de dados que se tornou obrigatória em todo o projeto, tanto por ter uma documentação simples, mas também ser extremamente poderosa e versátil.
4. [Zustand](https://zustand.docs.pmnd.rs/getting-started/introduction)
   Para o projeto eu quis trazer uma biblioteca que fosse fácil de utilizar e que também tivesse um contexto global.
6. [Shadcn](https://ui.shadcn.com/docs)
   Trouxe alguns componentes do shadcn para facilitar na criação das lp's
7. [Prisma](https://www.prisma.io/)
   Uma das formas de se configurar o better-auth, como é uma biblioteca sólida e a integração com a vercel é simples, foi a escolha que mais fez sentido.
8. [t3/env-nextjs](https://env.t3.gg/docs/introduction)
   Uma biblioteca que organiza e traz segurança para configurar as variáveis de ambiente.
9. [Biome](https://biomejs.dev/)
   Ferramenta que traz tanto o lint (eslint) quanto a formatação (prettier) com desempenho e fácil configuração.
10. Vitest

# Spotify
1. Para cadastrar um projeto para conseguir as variavéis de ambientes necessárias (Conferir no .env.example), você poderá acessar o link https://developer.spotify.com.
Por regras do spotify não é possível utilizar o localhost, então você poderá cadastrar no spotify a redirect URI http://127.0.0.1:3000/api/auth/callback/spotify.

## Configuração Local
O primeiro passo para utilizar o projeto é instalar as dependências
```bash
npm install
```
Se for utilizar a vercel para fazer o deploy da aplicação, é recomendável ter instalado a cli
```bash
npm i -g vercel@latest
```
Como estamos utilizando o biome para lint/format, você poderá baixar o plugin no seu editor favorito https://biomejs.dev/guides/editors/first-party-extensions/.

## Configurando o Prisma-Vercel (Não recomendado para rodar localmente)
Para esse passo a passo é necessário ter uma conta na Vercel.
1. Como primeiro passo após o cadastro é entrar no link https://vercel.com/marketplace/prisma, você irá instalar o prisma no seu workspace vercel. Nessa parte é só seguir o fluxo comum de configuração **lembrando de utilizar o plano "Free"**.
2. Após configurar o prisma na vercel, você agora irá realizar a conexão do seu projeto local com a vercel.
    Conectando em um projeto vercel.
```bash
vercel link  
```
   Extraia a URL do banco de dados do Vercel
```bash
vercel env pull .env.development.local
```
   Isso atualizará seu arquivo .env local e configurará sua conexão de banco de dados com esta instância do Prisma Postgres.
    
   Agora iremos rodar o migrate e seed
```bash
npx prisma migrate dev --name init
```
```bash
npx prisma db seed
```
   Por fim, agora você poderá realizar o deploy vercel com o comando:
```bash
vercel deploy
```
   
## [Configurando Banco de dados SQLite](https://www.better-auth.com/docs/adapters/sqlite)
1. Entre no arquivo auth.ts localizado dentro da pasta src
2. Altere o ``database:prismaAdapter(...)`` por ``database: new Database("database.sqlite")``

## Configurando o Better Auth
1. Precisamos de ínicio configurar as variáveis de ambiente
  ```bash
copy .env.example .env.x
  ```
2. Nessa etapa como iremos rodar alguns script se for utilizar o Prisma com a Vercel é necessário que siga os passos "Configurando o Prisma-Vercel". Caso utilize o SQLite "Configurando Banco de dados SQLite"
   Agora que temos as variáveis necessárias e o banco configurado, podemos rodar os comandos:
```bash
npm run generate
```
E o comando (No caso de utilizar o SQLite local)
```bash
npm run migrate
```

# Requisitos
## Requisitos obrigatórios
- [X] Seguimentação de commits
- [X] Lint
- [X] Autenticação via Spotify
- [X] Listar artistas
- [X] Listar albuns de um artista
- [X] Utilizar paginação (scroll infinito ou não)
- [X] Funcionamento offline
- [ ] Testes unitários
- [X] Deploy da aplicação
## Bônus
- [ ] Testes E2E
- [ ] Integração com Sentry
- [ ] CI/CD
- [X] Responsividade (celular e tablet)
- [x] Qualidade de código (Sonarqube)
- [ ] PWA