## Minha Biblioteca Virtual (My Virtual Library)

O projeto da**Minha Biblioteca Virtual** foi construído primeiramente com o intuito de cumprir o desafio proposto durante a seleção para vaga de desenvolvedor pleno e segundamente por adquirir mais conhecimentos e práticas com novas stack's.

## Sobre o desafio

Criado para medir os conhecimentos, o desafio indicado foi a criação de uma plataforma web de gerenciamento de uma biblioteca com as seguintes funções obrigatórias que o(s) usuário(s) poderão realizar:

- Cadastro de livros contendo os seguintes campos (obrigatórios):
  - Nome;
  - Categoria;
  - Capa do livro;
  - Autor;
  - Data de publicação;
  - Quantidade de páginas
- Listar os livros cadastrados;
- Editar um livro cadastrado;
- Deletar um livro existente;

E adicionar algumas regras nestas tarefas:

* Não é permitido adicionar livros com o mesmo nome;
* A data de publicação dos livros deve está compreendida entre os anos de 1500 à 2022;
* O usuário precisa ser alertado através de notificações caso esteja infringindo algumas regra durante o cadastro ou atualização;

Este projeto consistia em medir os conhecimentos nas seguintes especialidades:

* Desenvolvimento Fullstack - Django;
* Banco de dados e modelagem relacional - PostgreSQL;
* Versionamento de código - Git;

## Pré-requisitos para iniciar o projeto no ambiente local

* Ter o python instalado;
* Ter o postgres instalado e confi
* Ter o node.js e npm instalados;

## Passo a passo para iniciar o projeto no ambiente local

Abra o terminal no diretório do projeto e execute os seguintes comandos:

```
$ $python3 -m venv venv
```

```
$ $source venv
```

```
$ $pip install < requirements.txt
```

```
$ $python3 manage.py makemigrations
```

```
$ $python3 manage.py migrations
```

**OBS:** Ao executar o comando abaixo, será solicitado um nome, e-mail e uma senha. Caso apareça uma mensagem informando sobre senha fraca, aperte a letra 'y' e aperte o ENTER. E importante citar que este cadastro servirá para acessar a área admin.

```
$ $python3 manage.py createsuperuser
```

```
$ $python3 manage.py runserver
```

Pronto! Agora o projeto Fullstack Django está funcionando e rodando no endereço [http://127.0.0.1:8000/admin](), ao acessar este endereço você irá se deparar com uma tela de login, digite as credenciais cadastradas anteriormente durante o passo a passo de inicialização do projeto e você entrará na plataforma adim onde poderá realizar ações de visualizar livros cadatrados, criar, atualizar e deletar livro.

**Importante:** Este passo a passo e foi passado iniciará a plataforma fullstack django e servirá como API pois foi instalado o Django Rest Framework e configurado para servir aplicações front-end's desacopladas do projeto.

## Passo a passo para iniciar o front-end criado em React JS

Abra o seu terminal no diretório /mv-library-reactjs encontrado na raiz deste diretório e execute os seguintes comandos:

```
$ npm i
```

```
$ npm run dev
```

Com isto a aplicação Front-end com React JS estará rodando no endereço [http://127.0.0.1:3000]().


## Planejamento de desenvolvimento

1 - Estudar sobre Django;

2 - Levantamento de requisitos;

3 - Criar a aplicação fullstack;

4 - Criar a API com o Django;

5 - Criar o front-end com reactjs;

6 - Integrar o front em reactjs com a API em Django;
