class FormsPage {
  get inputField () {
    return $('~text-input');
  }

  get inputResult () {
    return $('~input-text-result');
  }

  get switchButton () {
    return $('~switch');
  }

  get activeButton () {
    return $('~button-Active');
  }

  get activeButtonMessage () {
    return $('android=new UiSelector().textContains("This button is active")');
  }

  get okButton () {
    return $('android=new UiSelector().text("OK")');
  }

  async fillInput (text) {
    await this.inputField.setValue(text);
  }

  async validateInputResult (text) {
    await expect(this.inputResult).toHaveText(text);
  }

  async enableSwitch () {
    await this.switchButton.click();
  }

  async clickActiveButton () {
    await this.activeButton.click();
  }

  async validateActiveButtonMessage () {
    await expect(this.activeButtonMessage).toBeDisplayed();
  }

  async closeModal () {
    await this.okButton.click();
  }
}

module.exports = new FormsPage();