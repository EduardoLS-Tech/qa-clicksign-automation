import { loginEl } from "../elements/login.elements";

export class LoginPage {
  visitar() {
    cy.visit("/");
  }

  preencherUsuario(usuario) {
    cy.get(loginEl.username).clear().type(usuario);
  }

  preencherSenha(senha) {
    cy.get(loginEl.password).clear().type(senha);
  }

  clicarLogin() {
    cy.get(loginEl.loginBtn).click();
  }

  login(usuario, senha) {
    this.preencherUsuario(usuario);
    this.preencherSenha(senha);
    this.clicarLogin();
  }

  validarLoginOk() {
    cy.url().should("include", "/inventory.html");
    cy.get(loginEl.title).should("contain", "Products");
  }

  validarErro(mensagem) {
    cy.get(loginEl.error).should("contain", mensagem);
  }
}
