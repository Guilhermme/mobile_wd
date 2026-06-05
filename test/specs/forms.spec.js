const HomePage = require('../pageobjects/home.page');
const FormsPage = require('../pageobjects/forms.page');

describe('Formulários', () => {
  beforeEach(async () => {
    await HomePage.goToForms();
  });

  it('Deve preencher o campo de texto e validar o resultado', async () => {
    await FormsPage.fillInput('Teste Appium');

    await FormsPage.validateInputResult('Teste Appium');
  });

  it('Deve acionar o botão ativo e validar a mensagem', async () => {
    await FormsPage.clickActiveButton();

    await FormsPage.validateActiveButtonMessage();
    await FormsPage.closeModal();
  });
});