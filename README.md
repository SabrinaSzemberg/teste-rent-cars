<h1>CRUD de veículos- RentCars</h1> 


## Descrição do projeto 

<p align="justify">
O projeto consiste na criação de uma aplicação que irá realizar o gerenciamento de um sistema de locação de veículos, onde o usuário pode adicionar, alterar e excluir produtos do catálogo e visualizar os produtos que constam no banco de dados.</p>

## Funcionalidades

Funcionalidade 1: Adicionar um produto ao catálogo da empresa;

Funcionalidade 2: Alterar os dados de um produto já existente;

Funcionalidade 3: Excluir o produto do catálogo;

Funcionalidade 4: Consultar os dados dos produtos existentes no banco de dados.


## Pré-requisitos

* Node JS LTS (versão 18)
* Docker


## Como rodar a aplicação

### No Backend
1. Execute o Docker
2. Verifique se o computador tem a pasta /tmp/mysql-data criada, caso não tenha crie com o comando:
```
$ mkdir /tmp/mysql-data
```
3. Execute o comando para iniciar o MySQL no Docker:
```
$ docker run --name basic-mysql --rm -v /tmp/mysql-data:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=ANSKk08aPEDbFjDO -e MYSQL_DATABASE=testing -p 3307:3306 -it mysql:8.0
```
4. Clone o repositório usando git clone https://github.com/SabrinaSzemberg/teste-rent-cars.git ou baixando os arquivos diretamente pelo GitHub, vá até a pasta criada com cd "Pasta criada".

5. No diretório atual, digite: npm install mysql sequelize express nodemon.

6.Execute o comando npm install.

7. No diretorio raiz do projeto, inicie o backend com o comando:
```
$ npm start
```

### No Frontend
1. Na pasta my_app/frontend abra no navegador o arquivo index.html

## Linguagens, dependencias e libs utilizadas

* Node JS LTS (versão 18):
  * Express;
  * Sequelize;
  * Nodemon;
* JavaScript;
* HTML;
* CSS;
* MySQL;
