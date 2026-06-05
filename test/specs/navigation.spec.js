const HomePage = require('../pageobjects/home.page');

describe('Navegação entre telas', () => {
  it('Deve navegar para a tela Forms', async () => {
    await HomePage.goToForms();

    const formsTitle = $('android=new UiSelector().text("Form components")');
    await expect(formsTitle).toBeDisplayed();
  });

  it('Deve navegar para a tela Webview', async () => {
    await HomePage.goToWebview();

    const webviewScreen = $('android=new UiSelector().className("android.webkit.WebView")');

    await webviewScreen.waitForDisplayed({
      timeout: 15000,
    });

    await expect(webviewScreen).toBeDisplayed();
  });

  it('Deve navegar para a tela Swipe', async () => {
    await HomePage.goToSwipe();

    const swipeTitle = $('android=new UiSelector().text("Swipe horizontal")');
    await expect(swipeTitle).toBeDisplayed();
  });

  it('Deve navegar para a tela Drag', async () => {
    await HomePage.goToDrag();

    const dragTitle = $('android=new UiSelector().text("Drag and Drop")');
    await expect(dragTitle).toBeDisplayed();
  });
});