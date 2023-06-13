# CRUD básico de filme + teste Karate🎥

![Repo Size](https://img.shields.io/github/repo-size/joaodutra88/S206-karate)
![Linguagens usadas](https://img.shields.io/github/languages/count/joaodutra88/S206-karate)
![Linguagem mais usada](https://img.shields.io/github/languages/top/joaodutra88/S206-karate)
![Última atualização](https://img.shields.io/github/last-commit/joaodutra88/S206-karate)

Este projeto é uma API RESTful construída com Node.js, Express e MongoDB. Ele permite a criação, leitura, atualização e exclusão de informações sobre filmes.

# Configuração ⚙️

Certifique-se de ter as seguintes dependências instaladas antes de executar os testes:

-  Karate - Um framework de teste BDD para API em Java.
-  Maven - Gerenciamento de dependencias do Java.

Aqui estão as etapas para executar os testes do projeto:

-  Clone o repositório do projeto:

```bash
git clone https://github.com/joaodutra88/S206-karate
```

-  Navegue até o diretório do projeto:

```bash
cd aula_inatel
```

-  Instale as dependências necessárias:

Certifique-se de ter o Karate instalado corretamente. Consulte a documentação oficial do Karate para obter instruções sobre como instalá-lo.

## Configure a URL da API:

Abra o arquivo movie.feature e verifique se a URL da API está corretamente configurada na seção Background. A URL deve corresponder à localização da sua API de filmes.

-  Execute os testes:

```bash
mvn test -Dtest=mvRunner
```
