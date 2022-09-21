## Crud - Usuários
Crud utilizando Express e MongoDb como banco de dados (NoSQL).
É possível a inserção de **nome** e **idade** dos usuários.
Pretendo aumentar as propriedades e incluir novas funcionalidades.

>Programas necessários

- Visual Code (ou ide de sua preferência)
- MongoDb 6.0
- Studio 3T
- Node16
- Postman (Para as consultas Get/Post/Put/Delete)

> Instalando o Projeto

Ao clonar o repositório você irá abrir um novo terminal e dentro da pasta ***/Projeto*** irá rodar o comando **"npm install"** ou **"npm i"** (forma abreviada), para realizar a instalação das dependendias do projeto.
 Após finalizar o processo irá surgir a pasta _"node_modules"_, onde ficam as dependecias instaladas.

 >Iniciando o Projeto

 Ao finalizar as instalações, na caminho final ***/Projeto*** você poderá rodar o comando **npm start**.
 Será criado um banco e dados com o nome **usuarios** (vide linha 36, logo abaixo para alterar o nome).
 
 >Atenção:

 As portas utilizadas para conexão são as seguintes:
 Servidor express: 3000
 MongoDb: 27017

 Caso seu computador já esteja utilizando essas portas será necessário realizar a alteração conforme abaixo:

 #### Express
 Na pasta Projeto há um arquivo chamado **index.js**, na linha 5 você irá conseguir alterar a porta:
  const porta = **3000**;

  #### MongoDb
  Dentro da pasta Projeto você deverá entrar na pasta **data**, a seguir no arquivo **database.js**, linha 2 você encontrará a conexão ao mongodb:
"mongodb://localhost:**27017**/usuarios"

Alterar o nome do banco de dados, basta substituir o nome usuários pelo de sua preferência:
"mongodb://localhost:27017/**usuarios**"


Obrigado por estar aqui, e estou aberto a sugestões.