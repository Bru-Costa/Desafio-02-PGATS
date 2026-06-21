# Carteira de Pagamentos — CI com GitHub Actions

## 📋 Descrição
Este projeto é uma aplicação simples de gerenciamento de pagamentos para demonstrar uma pipeline de Integração Contínua (CI).

## 🚀 Pipeline de CI
A pipeline foi configurada utilizando **GitHub Actions** e contempla:
- **Execução por Push**: Acionada a cada novo código enviado.
- **Execução Manual**: Via botão `workflow_dispatch`.
- **Agendamento (Schedule)**: Configurada para rodar a cada 7 minutos (`*/7 * * * *`).
- **Relatórios**: Geração e armazenamento de artefatos de teste.

## 🛠️ Tecnologias
- Javascript (ES6+)
- Node.js
- Mocha (Testes)
- GitHub Actions
