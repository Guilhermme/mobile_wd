class HomePage {
  get homeTab () {
    return $('~Home');
  }

  get webviewTab () {
    return $('~Webview');
  }

  get loginTab () {
    return $('~Login');
  }

  get formsTab () {
    return $('~Forms');
  }

  get swipeTab () {
    return $('~Swipe');
  }

  get dragTab () {
    return $('~Drag');
  }

  async validateHomeScreen () {
    await expect(this.homeTab).toBeDisplayed();
    await expect(this.webviewTab).toBeDisplayed();
    await expect(this.loginTab).toBeDisplayed();
    await expect(this.formsTab).toBeDisplayed();
    await expect(this.swipeTab).toBeDisplayed();
    await expect(this.dragTab).toBeDisplayed();
  }

  async goToHome () {
    await this.homeTab.click();
  }

  async goToWebview () {
    await this.webviewTab.click();
  }

  async goToLogin () {
    await this.loginTab.click();
  }

  async goToForms () {
    await this.formsTab.click();
  }

  async goToSwipe () {
    await this.swipeTab.click();
  }

  async goToDrag () {
    await this.dragTab.click();
  }
}

module.exports = new HomePage();