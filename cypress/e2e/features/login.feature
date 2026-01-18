# language: pt
@e2e
Funcionalidade: Login

  @smoke
  Cenário: Login com sucesso
    Dado que eu acesso a página de login
    Quando eu realizo login com usuário "standard"
    Então devo ver a página de produtos
