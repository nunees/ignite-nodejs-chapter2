# Rent X - Rent a car application (Aluguel de carros)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
[![Tempo](https://wakatime.com/badge/user/91a1b1d1-ad80-4563-91e2-93999f5e4311/project/1fe87bc9-b71a-4469-8866-90fd5559e572.svg?style=for-the-badge)](https://wakatime.com/badge/user/91a1b1d1-ad80-4563-91e2-93999f5e4311/project/1fe87bc9-b71a-4469-8866-90fd5559e572)
![License](https://img.shields.io/github/license/nunees/rentx-backend.svg?style=for-the-badge)

## **Sobre**


Aplicação desenvolvida utilizando typescript e nodejs como servidor backend, foram utilizados conceitos e ferramentas como:
  - S.O.L.I.D Principles
  - Testes de integração e unitarios
  - TypeORM e TSyringe
  - TDD e DDD
  - Docker containers
  - Postgres Database
  - Upload de arquivos

## **Requisitos da aplicação**

### Cadastro de carro

**RF**
- Deve ser possível cadastrar um novo carro.


**RN** 
- Não deve ser possível cadastrar um carro com uma placa já existente.
- O carro deve ser cadastrado, por padrão, com disponibilidade.
- O usuário responsável pelo cadastro deve ser um usuário administrador.

### Listagem de carros

**RF** 
- Deve ser possível listar todos os carros disponíveis
- Deve ser possível listar todos os carros disponíveis pelo - nome da categoria
- Deve ser possível listar todos os carros disponíveis pelo - nome da marca
- Deve ser possível listar todos os carros disponíveis pelo - nome do carro

**RN**
- O usuário não precisar estar logado no sistema.


### Cadastro de Especificação no carro

**RF**
- Deve ser possível cadastrar uma especificação para um carro


**RN**
- Não deve ser possível cadastrar uma especificação para um - carro não cadastrado.
- Não deve ser possível cadastrar uma especificação já - existente para o mesmo carro.
- O usuário responsável pelo cadastro deve ser um usuário - administrador.


### Cadastro de imagens do carro

**RF**
- Deve ser possível cadastrar a imagem do carro

**RNF**
- Utilizar o multer para upload dos arquivos

**RN**
- O usuário deve poder cadastrar mais de uma imagem para o - mesmo carro
- O usuário responsável pelo cadastro deve ser um usuário - administrador.


### Alugel de carro

**RF**
- Deve ser possível cadastrar um aluguel


**RN**
- O aluguel deve ter duração mínima de 24 horas.
- Não deve ser possível cadastrar um novo aluguel caso já - exista um aberto para o mesmo usuário
- Não deve ser possível cadastrar um novo aluguel caso já - exista um aberto para o mesmo carro
- O usuário deve estar logado na aplicação
- Ao realizar um aluguel, o status do carro deverá ser - alterado para indisponível


### Devolução de carro 

**RF**
- Deve ser possível realizar a devolução de um carro

**RN**
- Se o carro for devolvido com menos de 24 horas, deverá - ser cobrado diária completa.
- Ao realizar a devolução, o carro deverá ser liberado para - outro aluguel.
- Ao realizar a devolução, o usuário deverá ser liberado - para outro aluguel.
- Ao realizar a devolução, deverá ser calculado o total do - aluguel. 
- Caso o horário de devolução seja superior ao horário - previsto de entrega, deverá ser cobrado multa - proporcional aos dias de atraso.
- Caso haja multa, deverá ser somado ao total do aluguel.
- O usuário deve estar logado na aplicação


### Listagem de Alugueis para usuário

**RF**
- Deve ser possível realizar a busca de todos os alugueis para o usuário

**RN**
- O usuário deve estar logado na aplicação


### Recuperar Senha

**RF**
- Deve ser possível o usuário recuperar a senha informando o e-mail
- O usuário deve receber um e-mail com o passo a passo para a recuperação da senha
- O usuário deve conseguir inserir uma nova senha

**RN**
- O usuário precisa informar uma nova senha
- O link enviado para a recuperação deve expirar em 3 horas