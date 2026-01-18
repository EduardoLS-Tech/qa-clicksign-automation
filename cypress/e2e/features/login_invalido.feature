# language: pt
@regressao @e2e

Funcionalidade: Login inválido

  Cenário: Usuário bloqueado não deve autenticar
    Dado que eu acesso a página de login
    Quando eu realizo login com usuário "locked"
    Então devo ver a mensagem de erro "Sorry, this user has been locked out."
