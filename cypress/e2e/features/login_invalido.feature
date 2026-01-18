# language: pt
@e2e
Funcionalidade: Login inválido

  @regressao @negativo
  Cenário: Usuário bloqueado não deve autenticar
    Dado que eu acesso a página de login
    Quando eu realizo login com usuário "locked"
    Então devo ver a mensagem de erro "Epic sadface: Sorry, this user has been locked out."
