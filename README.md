# Projeto de Automação QA – E2E, API, Performance e CI/CD

Este repositório apresenta um projeto completo de automação de testes desenvolvido como **prova prática para a posição de Engenheiro(a) de Qualidade Pleno**.
O objetivo é demonstrar organização, boas práticas, capacidade de análise e integração dos testes em um fluxo de **CI/CD**, cobrindo diferentes níveis de validação de qualidade.

---

## Objetivos do projeto

* Validar **fluxos críticos do usuário** através de testes End-to-End
* Garantir **contrato e consistência de dados** via testes de API
* Avaliar **comportamento sob carga** com testes de performance
* Integrar todas as camadas de teste em um **pipeline automatizado**

---

## Tecnologias utilizadas

* **Cypress** – Testes E2E
* **Cucumber (BDD)** – Escrita de cenários em linguagem natural (português)
* **Page Object Model + Elements** – Organização e manutenção do código
* **Postman** – Criação de collections de API
* **Newman** – Execução automatizada de testes de API
* **k6** – Testes de carga e estresse
* **GitHub Actions** – Integração e entrega contínua (CI/CD)
* **Node.js / npm**

---

## Aplicações testadas

### Aplicação Web (E2E)

* **SauceDemo**
  [https://www.saucedemo.com](https://www.saucedemo.com)
  Fluxos testados:

  * Login com sucesso
  * Login inválido (usuário bloqueado)
  * Checkout completo

### API (Funcional e Performance)

* **JSONPlaceholder**
  [https://jsonplaceholder.typicode.com](https://jsonplaceholder.typicode.com)
  Endpoints utilizados:

  * `/posts/1`
  * `/posts`
  * `/comments?postId=1`

---

## Pré-requisitos

* Node.js (LTS recomendado)
* npm
* Git
* k6 instalado localmente (necessário para executar testes de carga)

> Observação: o Postman não é obrigatório para execução local, pois os testes de API são executados via **Newman** a partir dos arquivos JSON versionados.

---

## Instalação do projeto

Na raiz do repositório:

```bash
npm install
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
│   ├── step_definitions/          # Implementação Given / When / Then
│   ├── pages/                     # Page Objects (ações por página)
│   ├── elements/                  # Seletores centralizados (locators)
│   ├── commands.js                # Custom commands (ex.: login)
│   └── e2e.js                     # Configurações globais do Cypress
├── screenshots/                  # Evidências automáticas (falhas)
├── videos/                       # Evidências de execução

k6/
├── load_posts_ramping.js          # Script de teste de carga
├── stress_posts.js               # Script de stress (opcional)

postman/
├── jsonplaceholder.collection.json
├── jsonplaceholder.env.json

reports/
├── newman/
│   └── report.html               # Evidência dos testes de API
├── k6/
│   └── load-summary.json          # Evidência dos testes de carga

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

1. Login com sucesso
2. Login inválido (usuário bloqueado)
3. Checkout completo

Os cenários são escritos em **BDD (português)** e organizados por tags para facilitar a execução seletiva no pipeline.

### Tags utilizadas

* `@smoke` – Execução rápida para validação essencial
* `@regressao` – Fluxos completos
* `@wip` – Cenários em desenvolvimento (não executados no CI)

### Executar localmente

Abrir o Cypress em modo interativo:

```bash
npm run cy:open
```

Executar testes smoke:

```bash
npm run e2e:smoke
```

Executar regressão:

```bash
npm run e2e:regressao
```

---

## Testes de API (Postman + Newman)

### Validações realizadas

* Status Code
* Headers (Content-Type)
* Estrutura e campos principais do body
* Regras simples de consistência dos dados

### Executar localmente

```bash
npm run api:run
```

### Evidência gerada

* `reports/newman/report.html`

---

## Testes de Carga e Estresse (k6)

### Teste de carga (ramping)

Simula aumento progressivo de usuários virtuais (VUs) no endpoint `/posts`.

```bash
npm run k6:load
```

### Teste de estresse (opcional)

```bash
npm run k6:stress
```

### Métricas avaliadas

* Tempo de resposta (p95)
* Taxa de erro
* Throughput (requisições por segundo)

### Evidências geradas

* `reports/k6/load-summary.json`
* `reports/k6/stress-summary.json` (quando executado)

---

## CI/CD – GitHub Actions

Pipeline definido em `.github/workflows/ci.yml`.

### Estratégia adotada

* Jobs separados por tipo de teste:

  * E2E Smoke
  * E2E Regressão
  * API
  * Performance (k6)
* Execução automática em:

  * push
  * pull_request
  * workflow_dispatch (manual)
* Upload de artifacts contendo relatórios e evidências

### Benefícios

* Isolamento de falhas
* Execução paralela
* Fácil diagnóstico do ponto de quebra

---

## Relatórios e evidências

* **API (Newman)**: `reports/newman/report.html`
* **Carga (k6)**: `reports/k6/load-summary.json`
* **E2E (Cypress)**: screenshots e vídeos disponíveis como artifacts no GitHub Actions

---

## Scripts disponíveis

```bash
npm run cy:open
npm run e2e:smoke
npm run e2e:regressao
npm run api:run
npm run k6:load
npm run k6:stress
```

---

## Status do projeto

* [x] Testes E2E com Cypress + Cucumber
* [x] Testes de API com Postman/Newman
* [x] Testes de carga/estresse com k6
* [x] Pipeline CI/CD configurado
* [x] Relatórios e evidências anexadas

---

Este projeto foi estruturado para simular um cenário real de atuação em times ágeis, priorizando clareza, manutenção, automação e integração contínua.

