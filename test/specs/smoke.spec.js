const HomePage = require('../pageobjects/home.page');
const LoginPage = require('../pageobjects/login.page');

describe('Native Demo App - Smoke Test', () => {
  it('Deve abrir o aplicativo e exibir a tela inicial', async () => {
    await HomePage.validateHomeScreen();
  });

  it('Deve navegar para a tela de Login', async () => {
    await HomePage.goToLogin();
    await LoginPage.validateLoginScreen();
  });
});