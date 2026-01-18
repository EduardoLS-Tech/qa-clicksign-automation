import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { ProductsPage } from "../pages/ProductsPage";
import { CartPage } from "../pages/CartPage";
import { CheckoutPage } from "../pages/CheckoutPage";

const products = new ProductsPage();
const cart = new CartPage();
const checkout = new CheckoutPage();

Given("que estou logado como {string}", (tipo) => {
  cy.loginSauceDemo(tipo);
  products.validarPaginaProdutos();
});

When("eu adiciono o produto {string} ao carrinho", (nome) => {
  products.adicionarProdutoPorNome(nome);
  products.abrirCarrinho();
  cart.validarProdutoNoCarrinho(nome);
  cart.irParaCheckout();
});

When("eu finalizo o checkout com os dados:", (dataTable) => {
  const data = dataTable.hashes()[0];
  checkout.preencherDados(data.firstName, data.lastName, data.zip);
  checkout.continuar();
  checkout.finalizar();
});

Then("devo ver a confirmação de compra", () => {
  checkout.validarCompraFinalizada();
});
