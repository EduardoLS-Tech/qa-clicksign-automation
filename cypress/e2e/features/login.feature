# language: pt
@smoke @e2e
Funcionalidade: Login

  Cenário: Login com sucesso
    Dado que eu acesso a página de login
    Quando eu realizo login com usuário "standard"
    Então devo ver a página de produtos
