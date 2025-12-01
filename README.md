# 🏮 Guia Turístico do Mundo Espiritual (A Viagem de Chihiro)

> Projeto final da disciplina de Introdução à Programação Web - UNICAP.

Este projeto consiste em um website temático que serve como um guia turístico interativo para o universo do filme *"A Viagem de Chihiro"* do Studio Ghibli. O site explora a estrutura de navegação em árvore, estilização centralizada e interatividade com JavaScript.

## 📋 Sobre o Projeto

O objetivo foi desenvolver um site completo utilizando apenas **HTML, CSS e JavaScript** puros, focado na estruturação semântica, design padronizado e usabilidade.

O site simula uma agência de turismo para espíritos e humanos perdidos, permitindo navegar pelos locais icônicos do filme, visualizar detalhes de serviços e até simular uma "reserva".

## 🚀 Funcionalidades e Requisitos

O projeto cumpre os requisitos propostos na atividade:

* **Página Inicial Interativa:** Mapa do mundo com pontos de navegação posicionados via CSS.
* **Hierarquia de Navegação (3 Níveis):** Estrutura de links que aprofunda o conteúdo (Home → Locais → Detalhes Específicos).
* **CSS Centralizado e Customizado:** Uso de um único arquivo `style.css` para todo o site, incluindo animações customizadas (`@keyframes`) nos pontos do mapa.
* **Integração JavaScript:** Formulário funcional que gera um link dinâmico para envio de mensagens via API do WhatsApp Web para "reservas".
* **Elementos HTML Diversos:** Uso semântico de tabelas (preços), listas (paradas do trem), âncoras e imagens.

## 📂 Estrutura de Arquivos

A organização do projeto segue a árvore de navegação exigida:

```text
/projeto-chihiro
│
├── index.html          # (Nível 1) Página Inicial com Mapa Interativo
├── style.css           # Estilização Global (Design System)
├── script.js           # Lógica do botão de WhatsApp
│
├── banhos.html         # (Nível 2) Página sobre a Casa de Banhos
├── trem.html           # (Nível 2) Página sobre a Estação de Trem
│
├── yubaba.html         # (Nível 3) Detalhes sobre a Yubaba
└── reserva.html        # (Nível 3) Página de Reserva com JS
