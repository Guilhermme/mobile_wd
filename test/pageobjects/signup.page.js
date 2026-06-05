class SignUpPage {
  get emailInput () {
    return $('~input-email');
  }

  get passwordInput () {
    return $('~input-password');
  }

  get confirmPasswordInput () {
    return $('~input-repeat-password');
  }

  get signUpButton () {
    return $('~button-SIGN UP');
  }

  get successTitle () {
    return $('android=new UiSelector().text("Signed Up!")');
  }

  get successMessage () {
    return $('android=new UiSelector().text("You successfully signed up!")');
  }

  get okButton () {
    return $('android=new UiSelector().text("OK")');
  }

  get invalidEmailMessage () {
    return $('android=new UiSelector().textContains("Please enter a valid email address")');
  }

  async validateSignUpScreen () {
    await expect(this.emailInput).toBeDisplayed();
    await expect(this.passwordInput).toBeDisplayed();
    await expect(this.confirmPasswordInput).toBeDisplayed();
    await expect(this.signUpButton).toBeDisplayed();
  }

  async signUp (email, password, confirmPassword) {
    await this.emailInput.setValue(email);
    await this.passwordInput.setValue(password);
    await this.confirmPasswordInput.setValue(confirmPassword);
    await this.signUpButton.click();
  }

  async validateSuccessSignUp () {
    await expect(this.successTitle).toBeDisplayed();
    await expect(this.successMessage).toBeDisplayed();
  }

  async closeSuccessModal () {
    await this.okButton.click();
  }

  async validateInvalidEmailMessage () {
    await expect(this.invalidEmailMessage).toBeDisplayed();
  }
}

module.exports = new SignUpPage();