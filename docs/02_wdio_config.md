# Configuração do WebdriverIO

Este documento descreve as principais configurações realizadas no arquivo `wdio.conf.js` para execução dos testes mobile com **WebdriverIO**, **Appium** e **Android Emulator**.

---

## 1. Objetivo da configuração

O projeto foi configurado para executar testes automatizados em um aplicativo Android nativo utilizando:

* WebdriverIO
* Appium
* UiAutomator2
* Mocha
* Android Emulator
* JavaScript

O aplicativo utilizado na configuração inicial foi o **Native Demo App** do WebdriverIO.

---

## 2. Arquivo principal de configuração

O arquivo responsável pelas configurações do projeto é:

```bash
wdio.conf.js
```

Esse arquivo define:

* Runner de execução
* Porta do Appium
* Localização dos testes
* Capabilities do dispositivo Android
* Framework de testes
* Reporters
* Services
* Timeouts
* Hooks de execução

---

## 3. Runner

Configuração utilizada:

```js
runner: 'local',
```

Essa configuração indica que os testes serão executados localmente na máquina do usuário.

---

## 4. Porta do Appium

Configuração utilizada:

```js
port: 4723,
```

A porta `4723` é a porta padrão utilizada pelo Appium para receber comandos do WebdriverIO.

---

## 5. Localização dos testes

Configuração utilizada:

```js
specs: [
    './test/specs/**/*.js'
],
```

Isso indica que o WebdriverIO irá procurar os arquivos de teste dentro da pasta:

```bash
test/specs/
```

Qualquer arquivo `.js` dentro dessa estrutura poderá ser executado como teste.

---

## 6. Execução em apenas um emulador

Configuração ajustada:

```js
maxInstances: 1,
```

Foi utilizado `1` porque a execução local está sendo feita em apenas um emulador Android.

Essa configuração evita tentativas de execução paralela desnecessárias durante o desenvolvimento inicial.

---

## 7. Capabilities Android

O bloco de `capabilities` foi ajustado para executar o aplicativo nativo no emulador Android.

Configuração utilizada:

```js
capabilities: [{
    platformName: 'Android',
    'appium:automationName': 'UiAutomator2',
    'appium:deviceName': 'emulator-5554',
    'appium:platformVersion': '14.0',
    'appium:app': './app/android.wdio.native.app.apk',
    'appium:autoGrantPermissions': true,
    'appium:noReset': false
}],
```

---

## 8. Explicação das capabilities

### platformName

```js
platformName: 'Android'
```

Define que a execução será feita em ambiente Android.

---

### appium:automationName

```js
'appium:automationName': 'UiAutomator2'
```

Define o driver de automação utilizado pelo Appium para Android.

O `UiAutomator2` é o driver recomendado para automação de aplicativos Android nativos.

---

### appium:deviceName

```js
'appium:deviceName': 'emulator-5554'
```

Define o dispositivo/emulador onde o teste será executado.

Esse valor foi validado com o comando:

```bash
adb devices
```

Resultado obtido:

```bash
List of devices attached
emulator-5554   device
```

---

### appium:platformVersion

```js
'appium:platformVersion': '14.0'
```

Define a versão do Android utilizada no emulador.

O emulador configurado foi:

```text
Pixel 7
Android 14
API 34
```

---

### appium:app

```js
'appium:app': './app/android.wdio.native.app.apk'
```

Define o caminho do APK que será instalado e executado no emulador.

O APK foi salvo no projeto em:

```bash
app/android.wdio.native.app.apk
```

---

### appium:autoGrantPermissions

```js
'appium:autoGrantPermissions': true
```

Permite conceder automaticamente permissões solicitadas pelo aplicativo durante a instalação ou execução.

---

### appium:noReset

```js
'appium:noReset': false
```

Garante que o aplicativo seja iniciado em um estado limpo a cada execução.

Essa configuração ajuda a evitar interferência de dados de execuções anteriores.

---

## 9. Diferença entre configuração Web e Mobile Nativa

O projeto gerado inicialmente pelo WebdriverIO veio com uma configuração voltada para execução no navegador Chrome do Android:

```js
browserName: 'Chrome'
```

Essa configuração foi removida porque o desafio exige automação de um aplicativo nativo.

Para app nativo, o correto é informar o caminho do APK:

```js
'appium:app': './app/android.wdio.native.app.apk'
```

---

## 10. Service Appium

Configuração utilizada:

```js
services: ['appium'],
```

Essa configuração permite que o WebdriverIO inicialize e finalize o Appium automaticamente durante a execução dos testes.

Por esse motivo, não é obrigatório deixar um terminal separado com o comando `appium` rodando durante a execução via:

```bash
npm run wdio
```

---

## 11. Framework de testes

Configuração utilizada:

```js
framework: 'mocha',
```

O framework escolhido foi o **Mocha**, conforme solicitado no desafio.

---

## 12. Reporter

Configuração inicial utilizada:

```js
reporters: ['spec'],
```

O reporter `spec` exibe o resultado dos testes diretamente no terminal.

Posteriormente será adicionada a configuração do **Allure Report** para geração de evidências mais completas.

---

## 13. Timeout do Mocha

Configuração utilizada:

```js
mochaOpts: {
    ui: 'bdd',
    timeout: 60000
}
```

O timeout foi definido como `60000ms`, ou seja, 60 segundos.

Isso evita falhas prematuras em cenários mobile, onde a inicialização do app ou carregamento de telas pode demorar mais.

---

## 14. Primeiro teste de validação

Antes de iniciar a implementação dos cenários finais, foi criado um teste simples para validar a comunicação entre:

* WebdriverIO
* Appium
* Emulador Android
* APK nativo

Arquivo utilizado:

```bash
test/specs/test.e2e.js
```

Teste criado:

```js
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
```

---

## 15. Execução dos testes

Comando utilizado:

```bash
npm run wdio
```

---

## 16. Resultado da primeira execução

Resultado obtido:

```text
Native Demo App - Smoke Test
✓ Deve abrir o aplicativo e exibir a tela inicial
✓ Deve navegar para a tela de Login

2 passing
```

Também foi validado:

```text
Spec Files: 1 passed, 1 total
```

Esse resultado confirma que o ambiente mobile está configurado corretamente e que o WebdriverIO conseguiu executar comandos no aplicativo nativo através do Appium.

---

## 17. Status após configuração do WDIO

Até esta etapa, foram concluídos:

```text
Projeto WebdriverIO criado
Configuração Android ajustada no wdio.conf.js
APK adicionado ao projeto
Capabilities configuradas para app nativo
Execução local com Appium Service validada
Teste smoke executado com sucesso
Comunicação WebdriverIO + Appium + Emulador validada
```

---

## Execução em Android e iOS

O projeto foi implementado e validado em emulador Android local utilizando Appium com o driver UiAutomator2.

A estrutura do projeto permite evolução para execução em iOS utilizando Appium com o driver XCUITest. Para execução em iOS, é necessário ambiente macOS com Xcode, iOS Simulator e build iOS do aplicativo.

No ambiente atual Linux, a execução iOS não é suportada localmente, pois depende de ferramentas exclusivas do ecossistema Apple.
