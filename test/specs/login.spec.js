const HomePage = require('../pageobjects/home.page');
const LoginPage = require('../pageobjects/login.page');
const loginData = require('../data/login.data.json');

describe('Login', () => {
  beforeEach(async () => {
    await HomePage.goToLogin();
  });

  it('Deve exibir a tela de login corretamente', async () => {
    await LoginPage.validateLoginScreen();
  });

  it('Deve realizar login com credenciais válidas', async () => {
    await LoginPage.login(
      loginData.validUser.email,
      loginData.validUser.password
    );

    await LoginPage.validateSuccessLogin();
    await LoginPage.closeSuccessModal();
  });

  it('Deve validar mensagem de erro ao informar e-mail inválido', async () => {
    await LoginPage.login(
      loginData.invalidEmailUser.email,
      loginData.invalidEmailUser.password
    );

    await LoginPage.validateInvalidEmailMessage();
  });
});