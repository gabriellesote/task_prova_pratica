<img src="assets/banners (1).png"/>

 <h4 align="center"> <em> Candidata: Gabrielle Soares Teixeira </em></h4>

<div align=center> 

[![Github](https://img.shields.io/badge/Github-pink?style=for-the-badge&logo=github&logoColor=black)](https://github.com/gabriellesote?tab=repositories)
[![Linkedin](https://img.shields.io/badge/Linkedin-0e76a8?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/gabrielle-teixeira-a9624329a/)
[![Artístico](https://img.shields.io/badge/Artístico-833AB4?style=for-the-badge&logo=instagram)](https://www.instagram.com/ga_baralou/)
[![pessoal](https://img.shields.io/badge/pessoal-5B51D8?style=for-the-badge&logo=instagram)](https://www.instagram.com/gabi.sote/)
![gabrielle.sote@gmail.com](https://img.shields.io/badge/gabrielle.sote%40gmail.com-black?style=for-the-badge&logo=gmail&logoColor=red)
</div>

# 🧭 Sobre

<p> Processo seletivo para estágio em desenvolvimento na empresa Task. </p>

### Arquivos

[![PDF - prova teórica](https://img.shields.io/badge/PDF-prova_teórica-pink?style=for-the-badge&logo=googledocs&logoColor=white)](https://)
[![PDF - prova prática](https://img.shields.io/badge/PDF-prova_prática-CDC1FF?style=for-the-badge&logo=googledocs&logoColor=white)](https://)

# Soluções
## 🤓 Prova Teórica

[![Prova teórica  - Solução](https://img.shields.io/badge/Prova_teórica_-Solução-BFECFF?style=for-the-badge&logo=googledocs&logoColor=white)](https://)


## 🚀 Prova prática

### Tecnologias utilizadas

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![MySQL](https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![prisma](https://img.shields.io/badge/prisma-A888B5?style=for-the-badge&logo=prisma&logoColor=white)
![Git](https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white)

## Documentação

<p> Abaixo terá a explicação de como utilizar a aplicação </p>

<h3> 📋 Dê gitclone no repositório </h3>

<p> Primeiro passo é clonar todo o repositório para ter acesso aos arquivos.
  Em um lugar da sua preferência execute o comando:
</p>

```
git clone https://github.com/gabriellesote/task_prova_pratica.git
```

<h3> 🔨 Configurando o banco de dados</h3>

>❗Você deve ter o MySQL baixado, caso não tenha confira aqui:  [MySQL🔗](https://www.mysql.com/)
>
> 👣 [Tutorial de como baixar MSQL🔗](https://www.youtube.com/watch?v=IEUgVwjXF0o&t=574s&pp=ygURY29tbyBiYWl4YXIgbXlzcWw%3D)
>
> ❔ [Como importar um .sql🔗](https://www.youtube.com/watch?v=RkLB0aQh5Es)
> 

<br> 
<p>

Navegue até  `sistema/backend/banco_de_dados/` e importe o .sql que está nesta pasta. </p>

<h2> ⚙️ Configurando o Backend </h2>

<h3> 🪛 Depedências </h3>
<p> 

  Na pasta `sistema` execute o seguinte comando para instalar todas as depedências do projeto: </p>

```
npm install
```

<h3> ⛓️ .ENV </h3>
<p> Para que a api tenha aceso ao banco de dados, é necessário das suas credenciais do banco de dados. </p>

<p> 

No arquivo `.env` na pasta `sistema/backend`, se NECESSÁRIO, troque o usuário, senha e a porta do localhost. Um exemplo:</p>

```
DATABASE_URL="mysql://johndoe:randompassword@localhost:3306/mydb"
```

<h3> ▶️ Rodando o BackEnd </h3>
<p>

 Para rodar o backend, execute o seguinte comando na pasta `sistema/backend`: </p>

```
nodemon server.js
```

<h2> ⚙️ Configurando o FrontEnd </h2>

<p> Como não usei nenhum framework no front, para rodá-lo é necessário apenas a extensão Live Server do VSCode</p>

<img src="assets/live_server.png" width=80% alt="imagem do live serve">

<p>

 Abra o arquivo `index.html` na pasta `sistema/frontend` e  no canto inferior direito do VSCode, clique em `Go Live` para rodar o projeto. </p>

<img src="assets/go_live.png" width=80% alt="imagem do live serve">


<h2> 📜 Sobre a API </h2>


<p> Para testar a API, você pode usar o Postman ou o Insomnia. Mas eu usei o Postman, caso queira conferir os testes no Postman, só clicar abaixo  ↓↓↓.  </p> 

[![testes - postman](https://img.shields.io/badge/testes-postman-orange?style=for-the-badge&logo=postman&logoColor=white)](https://documenter.getpostman.com/view/38261292/2sAYX8HLWA)


<h3> 📍 Endpoints </h3>

<h4> ⚜️ GET </h4>
<p> Para pegar todos os produtos, você pode usar o seguinte endpoint: </p

```
http://localhost:2002/produtos/listar
```


<h4> ⚜️ PUT </h4>
<p> Para atualizar um produto, você pode usar o seguinte endpoint: </p>

```
http://localhost:2002/produtos/editar/:id
```


<h4> ⚜️ POST </h4>

<p> Para criar um novo produto, você pode usar o seguinte endpoint: </p>

```
http://localhost:2002/produtos/editar/:id
```


<h4> ⚜️ DELETE  </h4>

<p> Para deletar um produto, você pode usar o seguinte endpoint: </p>

```
http://localhost:2002/produtos/deletar/:id
```


<h4 align="center" > ·͙*̩̩͙˚̩̥̩̥*̩̩̥͙　✩ Muito obrigada pela atenção!! ✩　*̩̩̥͙˚̩̥̩̥*̩̩͙‧͙ </h4>