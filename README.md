# Projeto de Automação QA – E2E, API, Performance e CI/CD

Este repositório apresenta um projeto completo de automação de testes desenvolvido como prova prática para a posição de Engenheiro(a) de Qualidade Pleno.
O objetivo é demonstrar organização, boas práticas, capacidade de análise e integração dos testes em um fluxo de CI/CD, cobrindo diferentes níveis de validação de qualidade.

---

## Objetivos do projeto

* Validar fluxos críticos do usuário através de testes End-to-End (E2E)
* Garantir contrato e consistência de dados via testes de API
* Avaliar comportamento sob carga com testes de performance
* Integrar todas as camadas de teste em um pipeline automatizado

---

## Tecnologias utilizadas

* Cypress – Testes E2E
* Cucumber (BDD) – Escrita de cenários em linguagem natural (português)
* Page Object Model + Elements – Organização e manutenção do código
* Postman – Criação de collections de API
* Newman – Execução automatizada de testes de API
* k6 – Testes de carga e estresse
* GitHub Actions – Integração e entrega contínua (CI/CD)
* Node.js / npm

---

## Aplicações testadas

### Aplicação Web (E2E)

* SauceDemo: [https://www.saucedemo.com](https://www.saucedemo.com)
  Fluxos testados:
* Login com sucesso
* Login inválido (usuário bloqueado)
* Checkout completo

### API (Funcional e Performance)

* JSONPlaceholder: [https://jsonplaceholder.typicode.com](https://jsonplaceholder.typicode.com)
  Endpoints utilizados:
* `/posts/1`
* `/posts`
* `/comments?postId=1`

---

## Pré-requisitos

* Node.js (LTS recomendado) e npm
* Git
* k6 instalado localmente (necessário para executar testes de carga)

Observação: Postman/Insomnia são opcionais para execução local, pois os testes de API são executados via Newman usando os arquivos JSON versionados em `postman/`.

---

## Instalação do projeto

Na raiz do repositório:

```bash
npm install
```

Para simular o ambiente do CI/CD (recomendado):

```bash
npm ci
```

---

## Estrutura do projeto

```text
cypress/
├── e2e/
│   └── features/                 # Cenários BDD (.feature) em português
├── fixtures/
│   └── usuarios.json             # Dados de teste
├── support/
│   ├── step_definitions/         # Implementação Given / When / Then
│   ├── pages/                    # Page Objects (ações por página)
│   ├── elements/                 # Seletores centralizados (locators)
│   ├── commands.js               # Custom commands (ex.: login)
│   └── e2e.js                    # Configurações globais do Cypress
├── screenshots/                  # Evidências automáticas (falhas)
└── videos/                       # Evidências de execução (vídeos)

k6/
├── load_posts_ramping.js         # Script de teste de carga

postman/
├── jsonplaceholder.collection.json
└── jsonplaceholder.env.json

reports/
├── newman/
│   └── report.html               # Evidência dos testes de API
└── k6/
   └── load-summary.json          # Evidência dos testes de carga

.github/
└── workflows/
    └── ci.yml                    # Pipeline CI/CD

package.json
package-lock.json
cypress.config.js
README.md
```

---

## Testes E2E (Cypress + Cucumber)

### Cenários implementados

1. Login com sucesso (`@smoke`)
2. Login inválido (usuário bloqueado) (`@regressao @negativo`)
3. Checkout completo (`@regressao`)

### Executar localmente

Abrir o Cypress em modo interativo:

```bash
npm run cy:open
```

Executar Smoke (apenas o cenário crítico de login):

```bash
npm run e2e:smoke
```

Executar Regressão (checkout + login inválido):

```bash
npm run e2e:regressao
```

---

## Testes de API (Postman + Newman)

### Validações realizadas

* Status Code
* Headers (Content-Type)
* Estrutura e campos principais do body

### Executar localmente

```bash
npm run api:run
```

Relatório gerado:

* `reports/newman/report.html`

---

## Testes de Carga (k6)

### Teste de carga (ramping)

Simula aumento progressivo de usuários virtuais (VUs) no endpoint `/posts`, com thresholds definidos (tempo de resposta p95 e taxa de erro).

```bash
npm run k6:load
```

Evidência gerada:

* `reports/k6/load-summary.json`

### Métricas avaliadas

* Tempo de resposta (p95): `http_req_duration`
* Taxa de erro: `http_req_failed`
* Throughput: `http_reqs` por segundo

---

## CI/CD – GitHub Actions

Pipeline definido em `.github/workflows/ci.yml`.

### Estratégia adotada

* Jobs separados por tipo de teste:

  * E2E Smoke
  * E2E Regressão
  * API (Newman)
  * Performance (k6)
* Execução automática em:

  * push
  * pull_request
  * workflow_dispatch (manual)
* Upload de artifacts contendo relatórios e evidências

---

## Evidências e relatórios (como visualizar)

### E2E (Cypress) – vídeos e screenshots

Após executar os testes E2E, o Cypress gera evidências automaticamente:

* Vídeos: `cypress/videos/`
* Screenshots (quando há falha): `cypress/screenshots/`

Abrir a pasta de vídeos (Windows):

```bash
explorer.exe cypress\\videos
```

Abrir a pasta de screenshots (Windows):

```bash
explorer.exe cypress\\screenshots
```

### API (Newman) – relatório HTML

Após executar:

```bash
npm run api:run
```

O relatório HTML é gerado em:

* `reports/newman/report.html`

Abrir o relatório no navegador (Windows):

```bash
explorer.exe reports\\newman\\report.html
```

### Performance (k6) – summary JSON

Após executar:

```bash
npm run k6:load
```

O summary é gerado em:

* `reports/k6/load-summary.json`

Visualizar o JSON no terminal (rápido):

```bash
type reports\\k6\\load-summary.json | more
```

Opcional (PowerShell) – extrair métricas principais:

```powershell
$sum = Get-Content .\reports\k6\load-summary.json | ConvertFrom-Json
$sum.metrics.http_req_duration.values
$sum.metrics.http_req_failed.values
$sum.metrics.http_reqs.values
```

---

## Scripts disponíveis

```bash
npm run cy:open
npm run e2e:smoke
npm run e2e:regressao
npm run api:run
npm run k6:load
```

---

## Status do projeto

* [x] Testes E2E com Cypress + Cucumber (BDD pt-BR)
* [x] Separação smoke/regressão via tags e specs
* [x] Testes de API com Postman/Newman + relatório HTML
* [x] Teste de carga com k6 + summary exportado
* [x] Pipeline CI/CD configurado (GitHub Actions) com jobs separados e artifacts

Este projeto foi estruturado para simular um cenário real de atuação em times ágeis, priorizando clareza, manutenção, automação e integração contínua.
