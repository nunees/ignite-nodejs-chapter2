# Rent X - Rent a car application (Aluguel de carros)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
[![Tempo](https://wakatime.com/badge/user/91a1b1d1-ad80-4563-91e2-93999f5e4311/project/1fe87bc9-b71a-4469-8866-90fd5559e572.svg?style=for-the-badge)](https://wakatime.com/badge/user/91a1b1d1-ad80-4563-91e2-93999f5e4311/project/1fe87bc9-b71a-4469-8866-90fd5559e572)
![License](https://img.shields.io/github/license/nunees/rentx-backend.svg?style=for-the-badge)

## **Sobre**
Essa API foi construída com **NodeJS** + **Typescript** como uma empresa fictícia de **aluguel de carros** chamada **RentX** durante o curso **Ignite de NodeJS** da [**Rocketseat**](https://github.com/Rocketseat).
A aplicação possui as seguintes funcionalidades:
- Cadastro de usuários
- Autenticação de usuários e geração de token
- Cadastro de carros e itens relacionados ao carro como especificações e categorias
- Realização de um aluguel e devolução do carro
- Recuperação de senha do usuário através de e-mail

Foram utilizados as seguintes ferramentas e padrões:
  - S.O.L.I.D Principles
  - Testes de integração e unitarios
  - TypeORM e TSyringe
  - TDD e DDD
  - Docker containers
  - Postgres Database
  - Upload de arquivos

## 💻 Instalação, Dependências e Executando o Projeto
**1.** Clone este repositório 
```
git clone git@github.com:nunees/rentx-backend.git
``` 
**2.** Vá até o diretório raiz do projeto
```
cd rentx-backend
``` 
**3.** Instale as dependências necessárias
```
yarn 
ou
npm install
```
**4.** Execute a aplicação
```
yarn dev
```

## :floppy_disk: Usando a Aplicação
Para realização de **requisições** na aplicação, deve ser utilizado o **Insomnia** ou **Postman**, importando o [arquivo](insomnia_requests) de requisições já existente neste diretório.
Atentar-se aos parâmetros necessários no **Header**.

## :syringe: Evidência de Testes
Nesta aplicação, são contemplados **Testes Unitários e Testes de Integração** utilizando o framework de testes **Jest**, visando garantir o correto funcionamento das funcionalidades e manter a aplicação de acordo com os requisitos. <br/>
