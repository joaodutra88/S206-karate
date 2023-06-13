Feature: Testes da API de filmes

Background:
  * url 'http://localhost:5000'

Scenario: Criar um novo filme
  Given path '/movies'
  And request { "title": "Filme 1", "director": "Diretor 1", "cast": ["Ator 1", "Ator 2"], "year": 2023 }
  When method POST
  Then status 201
  And match response == { "title": "Filme 1", "director": "Diretor 1", "cast": ["Ator 1", "Ator 2"], "year": 2023 }

Scenario: Obter todos os filmes
  Given path '/movies'
  When method GET
  Then status 200

Scenario: Obter um filme específico
  Given path '/movies/{id}'
  And path id = "6487b2ee8e833e8e130ee7e0"
  When method GET
  Then status 200

Scenario: Atualizar um filme existente
  Given path '/movies/{id}'
  And path id = "6487b2ee8e833e8e130ee7e0"
  And request { "title": "Novo Filme", "director": "Novo Diretor", "cast": ["Ator 3", "Ator 4"], "year": 2022 }
  When method PUT
  Then status 200
  And match response == { "title": "Novo Filme", "director": "Novo Diretor", "cast": ["Ator 3", "Ator 4"], "year": 2022 }

Scenario: Excluir um filme existente
  Given path '/movies/{id}'
  And path id = "6487b2ee8e833e8e130ee7e0"
  When method DELETE
  Then status 204

Scenario: Obter um filme inexistente
  Given path '/movies/{id}'
  And path id = 12
  When method GET
  Then status 404
