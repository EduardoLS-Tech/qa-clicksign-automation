import { LoginPage } from "./pages/LoginPage";
import { MenuComponent } from "./pages/MenuComponent";

Cypress.Commands.add("loginSauceDemo", (tipoUsuario = "standard") => {
  cy.fixture("usuarios").then((u) => {
    const cred = u[tipoUsuario];
    const login = new LoginPage();

    login.visitar();
    login.login(cred.username, cred.password);
    login.validarLoginOk(); // garante que chegou na inventory/products
  });
});

Cypress.Commands.add("logoutSauceDemo", () => {
  const menu = new MenuComponent();
  menu.abrirMenu();
  menu.logout();
});
