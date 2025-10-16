## Banco de dados
No projeto está sendo utilizado para fins didáticos o SQLite, para que o [better-auth](https://www.better-auth.com/docs/adapters/sqlite) funcione corretamente é necessário rodar os comandos:
```bash
#  Schema generation
  npx @better-auth/cli@latest generate
```

```bash
#  Schema migration
npx @better-auth/cli@latest migrate
```

# Requisitos
## Requisitos obrigatórios
- [X] Seguimentação de commits
- [X] Lint
- [X] Autenticação via Spotify
- [X] Listar artistas
- [X] Listar albuns de um artista
- [X] Utilizar paginação (scroll infinito ou não)
- [ ] Funcionamento offline
- [ ] Testes unitários
- [ ] Deploy da aplicação
## Bônus
- [ ] Testes E2E
- [ ] Integração com Sentry
- [ ] CI/CD
- [X] Responsividade (celular e tablet)
- [ ] Qualidade de código (Sonarqube)
- [ ] PWA