import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { LoginPage } from "../pages/LoginPage";

const login = new LoginPage();

Given("que eu acesso a página de login", () => {
  login.visitar();
});

When("eu realizo login com usuário {string}", (tipo) => {
  cy.fixture("usuarios").then((u) => {
    const cred = u[tipo];
    login.login(cred.username, cred.password);
  });
});

Then("devo ver a página de produtos", () => {
  login.validarLoginOk();
});

Then("devo ver a mensagem de erro {string}", (msg) => {
  login.validarErro(msg);
});
