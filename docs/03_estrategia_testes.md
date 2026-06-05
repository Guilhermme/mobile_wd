# Estratégia de Testes Mobile

## 1. Objetivo

Este documento descreve a estratégia adotada para a automação dos testes mobile do aplicativo **Native Demo App**, utilizando **WebdriverIO**, **Appium**, **JavaScript**, **Mocha** e o padrão **Page Object Model**.

O objetivo da automação é validar os principais fluxos do aplicativo mobile, garantindo cobertura sobre:

* Login
* Cadastro
* Navegação entre telas
* Preenchimento de formulários
* Validação de mensagens de sucesso e erro
* Geração de evidências de execução

---

## 2. Abordagem adotada

A automação foi construída de forma incremental, iniciando pela configuração do ambiente e validação da comunicação entre as ferramentas.

A ordem adotada foi:

1. Configuração do ambiente local
2. Instalação do Android Studio, SDK, ADB e emulador
3. Instalação do Appium e driver UiAutomator2
4. Criação do projeto WebdriverIO
5. Configuração do `wdio.conf.js`
6. Execução de um teste smoke
7. Criação dos Page Objects
8. Criação dos cenários reais de teste
9. Configuração de evidências com Allure Report
10. Execução completa da suíte

Essa abordagem reduz riscos, pois cada camada foi validada antes da implementação dos cenários finais.

---

## 3. Ferramentas utilizadas

| Ferramenta     | Finalidade                           |
| -------------- | ------------------------------------ |
| JavaScript     | Linguagem utilizada nos testes       |
| WebdriverIO    | Framework de automação               |
| Appium         | Servidor de automação mobile         |
| UiAutomator2   | Driver Android utilizado pelo Appium |
| Mocha          | Framework de testes                  |
| Chai           | Biblioteca de asserções              |
| Allure Report  | Relatório de execução                |
| Android Studio | Gerenciamento do SDK e emulador      |
| ADB            | Comunicação com o emulador Android   |

---

## 4. Ambiente de execução

A execução dos testes foi realizada em ambiente local utilizando um emulador Android.

Configuração utilizada:

```text
Device: Pixel 7
Android: 14.0
API: 34
Automation Driver: UiAutomator2
App: Native Demo App
```

O emulador foi validado com:

```bash
adb devices
```

Resultado esperado:

```text
emulator-5554   device
```

---

## 5. Organização do projeto

A estrutura do projeto foi organizada da seguinte forma:

```text
mobile_wd
├── app
│   └── android.wdio.native.app.apk
├── docs
├── screenshots
├── test
│   ├── data
│   ├── pageobjects
│   │   ├── home.page.js
│   │   ├── login.page.js
│   │   ├── signup.page.js
│   │   └── forms.page.js
│   ├── specs
│   │   ├── smoke.spec.js
│   │   ├── login.spec.js
│   │   ├── signup.spec.js
│   │   ├── navigation.spec.js
│   │   └── forms.spec.js
│   └── utils
├── package.json
├── README.md
└── wdio.conf.js
```

---

## 6. Padrão Page Object Model

Foi utilizado o padrão **Page Object Model** para separar responsabilidades entre:

* Elementos da interface
* Ações executadas na tela
* Validações
* Cenários de teste

Exemplo de responsabilidade dos arquivos:

| Arquivo          | Responsabilidade                          |
| ---------------- | ----------------------------------------- |
| `home.page.js`   | Navegação entre abas principais           |
| `login.page.js`  | Ações e validações da tela de login       |
| `signup.page.js` | Ações e validações da tela de cadastro    |
| `forms.page.js`  | Ações e validações da tela de formulários |
| `*.spec.js`      | Escrita dos cenários de teste             |

Essa abordagem melhora a manutenção do projeto, evita duplicidade de código e facilita a evolução dos testes.

---

## 7. Estratégia de seletores

A prioridade foi utilizar seletores estáveis, principalmente:

```js
$('~accessibility-id')
```

Exemplo:

```js
$('~Login')
$('~input-email')
$('~button-LOGIN')
```

Quando necessário, foram utilizados seletores Android via UiSelector:

```js
$('android=new UiSelector().text("Success")')
$('android=new UiSelector().textContains("You are logged in!")')
$('android=new UiSelector().className("android.webkit.WebView")')
```

A estratégia foi priorizar seletores de acessibilidade sempre que possível, pois são mais estáveis em testes mobile.

---

## 8. Tipos de testes implementados

Foram implementados testes dos seguintes tipos:

### Smoke Test

Utilizado para validar se o aplicativo abre corretamente e se a navegação principal está disponível.

### Testes funcionais

Validam fluxos principais do aplicativo, como login, cadastro e formulários.

### Testes negativos

Validam mensagens de erro, como e-mail inválido.

### Testes de navegação

Garantem que as principais telas do aplicativo podem ser acessadas corretamente.

---

## 9. Evidências e relatórios

A suíte foi configurada para gerar evidências por meio do **Allure Report**.

Também foi configurada captura automática de screenshot em caso de falha:

```js
afterTest: async function (test, context, { error }) {
  if (error) {
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const screenshotPath = `./screenshots/${timestamp}.png`;

    await browser.saveScreenshot(screenshotPath);

    const screenshot = await browser.takeScreenshot();

    allureReporter.addAttachment(
      'Screenshot on failure',
      Buffer.from(screenshot, 'base64'),
      'image/png'
    );
  }
}
```

---

## 10. Execução dos testes

Para executar toda a suíte:

```bash
npm run wdio
```

Para executar uma spec específica:

```bash
npm run wdio -- --spec ./test/specs/login.spec.js
```

Para gerar o relatório Allure:

```bash
npm run allure:generate
```

Para abrir o relatório:

```bash
npm run allure:open
```

Alternativa para abrir manualmente:

```bash
cd allure-report
python3 -m http.server 8080
```

Acessar:

```text
http://localhost:8080
```

---

## 11. Cobertura final

A suíte automatizada cobre:

| Área        | Quantidade de cenários |
| ----------- | ---------------------: |
| Smoke       |                      2 |
| Login       |                      3 |
| Cadastro    |                      3 |
| Navegação   |                      4 |
| Formulários |                      2 |
| Total       |                     14 |

---

## 12. Considerações técnicas

Durante o desenvolvimento, alguns pontos importantes foram tratados:

* Correção da incompatibilidade de versão do `@wdio/mocha-framework`
* Ajuste da configuração inicial de mobile web para app nativo
* Validação do emulador com ADB
* Configuração do KVM para melhorar performance do emulador
* Uso do Appium Service para iniciar e encerrar o Appium automaticamente
* Organização dos testes com Page Object
* Geração de evidências com Allure Report

---

## 13. Conclusão

A estratégia adotada permitiu construir uma automação mobile estável, organizada e de fácil manutenção.

A suíte cobre os principais fluxos solicitados no desafio, utiliza boas práticas de automação mobile e gera evidências para análise das execuções.
