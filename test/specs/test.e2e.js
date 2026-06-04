describe('Native Demo App - Smoke Test', () => {
  it('Deve abrir o aplicativo e exibir a tela inicial', async () => {
    const homeTab = await $('~Home');
    const loginTab = await $('~Login');
    const formsTab = await $('~Forms');

    await expect(homeTab).toBeDisplayed();
    await expect(loginTab).toBeDisplayed();
    await expect(formsTab).toBeDisplayed();
  });

  it('Deve navegar para a tela de Login', async () => {
    const loginTab = await $('~Login');

    await loginTab.click();

    const emailInput = await $('~input-email');
    const passwordInput = await $('~input-password');
    const loginButton = await $('~button-LOGIN');

    await expect(emailInput).toBeDisplayed();
    await expect(passwordInput).toBeDisplayed();
    await expect(loginButton).toBeDisplayed();
  });
});