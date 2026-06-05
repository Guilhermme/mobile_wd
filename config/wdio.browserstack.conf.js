require('dotenv').config();

exports.config = {
  user: process.env.BROWSERSTACK_USERNAME,
  key: process.env.BROWSERSTACK_ACCESS_KEY,

  // Para economizar minutos do trial, a execução no BrowserStack está validando apenas o smoke test.
  // Para rodar a suíte completa, substituir por: '../test/specs/**/*.js'
  specs: [
    '../test/specs/smoke.spec.js'
  ],

  maxInstances: 1,

  capabilities: [{
    platformName: 'Android',
    'appium:automationName': 'UiAutomator2',
    'appium:deviceName': 'Samsung Galaxy S23',
    'appium:platformVersion': '13.0',
    'appium:app': process.env.BROWSERSTACK_APP_ID,
    'bstack:options': {
      projectName: 'Desafio Mobile WDIO Appium',
      buildName: 'Build Android BrowserStack',
      sessionName: 'Smoke Test Android',
      debug: true,
      networkLogs: true
    }
  }],

  logLevel: 'info',
  bail: 0,
  waitforTimeout: 20000,
  connectionRetryTimeout: 180000,
  connectionRetryCount: 3,

  services: [
    ['browserstack', {
      testObservability: false,
      browserstackLocal: false
    }]
  ],

  framework: 'mocha',

  reporters: [
    'spec',
    ['allure', {
      outputDir: 'allure-results',
      disableWebdriverStepsReporting: false,
      disableWebdriverScreenshotsReporting: false
    }]
  ],

  mochaOpts: {
    ui: 'bdd',
    timeout: 120000
  }
};