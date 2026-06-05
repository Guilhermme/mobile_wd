const HomePage = require('../pageobjects/home.page');
const LoginPage = require('../pageobjects/login.page');
const SignUpPage = require('../pageobjects/signup.page');
const signupData = require('../data/signup.data.json');

describe('Cadastro', () => {
  beforeEach(async () => {
    await HomePage.goToLogin();
    await LoginPage.goToSignUp();
  });

  it('Deve exibir a tela de cadastro corretamente', async () => {
    await SignUpPage.validateSignUpScreen();
  });

  it('Deve realizar cadastro com dados válidos', async () => {
    await SignUpPage.signUp(
      signupData.validUser.email,
      signupData.validUser.password,
      signupData.validUser.confirmPassword
    );

    await SignUpPage.validateSuccessSignUp();
    await SignUpPage.closeSuccessModal();
  });

  it('Deve validar mensagem de erro ao informar e-mail inválido no cadastro', async () => {
    await SignUpPage.signUp(
      signupData.invalidEmailUser.email,
      signupData.invalidEmailUser.password,
      signupData.invalidEmailUser.confirmPassword
    );

    await SignUpPage.validateInvalidEmailMessage();
  });
});