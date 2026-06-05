# Desafio de Automação de Testes Mobile

![Mobile Automation CI](https://github.com/Guilhermme/mobile_wd/actions/workflows/ci.yml/badge.svg)

Projeto de automação mobile utilizando **WebdriverIO**, **Appium**, **JavaScript**, **Mocha**, **Chai**, **Allure Report** e padrão **Page Object Model**.

O objetivo do projeto é automatizar cenários de teste no aplicativo **Native Demo App** do WebdriverIO, cobrindo funcionalidades como login, cadastro, navegação entre telas, preenchimento de formulários e validação de mensagens de sucesso e erro.

---

## Tecnologias utilizadas

* JavaScript
* Node.js
* NPM
* WebdriverIO
* Appium
* UiAutomator2
* Mocha
* Chai
* Allure Report
* Android Studio
* Android SDK
* ADB
* Emulador Android

---

## Estrutura do projeto

```text
mobile_wd
├── app
│   └── android.wdio.native.app.apk
├── docs
│   ├── 01_ambiente.md
│   ├── 02_wdio_config.md
│   ├── 03_estrategia_testes.md
│   └── 04-casos-de-teste.md
├── screenshots
├── test
│   ├── data
│   ├── pageobjects
│   │   ├── forms.page.js
│   │   ├── home.page.js
│   │   ├── login.page.js
│   │   └── signup.page.js
│   ├── specs
│   │   ├── forms.spec.js
│   │   ├── login.spec.js
│   │   ├── navigation.spec.js
│   │   ├── signup.spec.js
│   │   └── smoke.spec.js
│   └── utils
├── package.json
├── README.md
└── wdio.conf.js
```

---

## Pré-requisitos

Antes de executar o projeto, é necessário ter o ambiente mobile configurado com:

* Java 17
* Node.js
* NPM
* Android Studio
* Android SDK
* ADB configurado no PATH
* Emulador Android criado
* Appium
* Driver UiAutomator2

A documentação detalhada de configuração está disponível em:

* [Configuração do ambiente](./docs/01_ambiente.md)
* [Configuração do WebdriverIO](./docs/02_wdio_config.md)

---

## Execução por plataforma

A execução foi implementada e validada em emulador Android local.

A estrutura pode ser evoluída para iOS com Appium e XCUITest, porém a execução local em iOS exige macOS, Xcode e iOS Simulator.

Mais detalhes estão disponíveis em:

- [Configuração do WebdriverIO](./docs/02_wdio_config.md)


## Aplicativo utilizado

O aplicativo utilizado nos testes é o **Native Demo App** do WebdriverIO.

O APK está localizado em:

```text
app/android.wdio.native.app.apk
```

A configuração do APK é feita no arquivo:

```text
wdio.conf.js
```

---

## Execução dos testes

Para executar toda a suíte de testes:

```bash
npm run wdio
```

Para executar uma spec específica:

```bash
npm run wdio -- --spec ./test/specs/login.spec.js
```

Exemplos:

```bash
npm run wdio -- --spec ./test/specs/smoke.spec.js
npm run wdio -- --spec ./test/specs/login.spec.js
npm run wdio -- --spec ./test/specs/signup.spec.js
npm run wdio -- --spec ./test/specs/navigation.spec.js
npm run wdio -- --spec ./test/specs/forms.spec.js
```

---

## Relatório Allure

Para gerar o relatório Allure:

```bash
npm run allure:generate
```

Para abrir o relatório:

```bash
npm run allure:open
```

Caso ocorra erro relacionado ao Java em ambiente Linux/Snap, o relatório pode ser aberto manualmente com:

```bash
cd allure-report
python3 -m http.server 8080
```

Depois acesse no navegador:

```text
http://localhost:8080
```

## Testes data-driven

Alguns cenários utilizam massa de dados externa em arquivos JSON.

Arquivos utilizados:

```text
test/data/login.data.json
test/data/signup.data.json
```

---

## BrowserStack

O projeto possui integração com BrowserStack App Automate para execução dos testes em dispositivos reais na nuvem.

A execução foi validada com o comando:

```bash
npm run wdio:browserstack
```

---

## Cobertura dos testes

A suíte automatizada cobre os seguintes grupos de cenários:

| Grupo       | Quantidade |
| ----------- | ---------: |
| Smoke       |          2 |
| Login       |          3 |
| Cadastro    |          3 |
| Navegação   |          4 |
| Formulários |          2 |
| Total       |         14 |

---

## CI/CD

O projeto possui configuração de pipeline para GitLab CI/CD no arquivo `.gitlab-ci.yml`.

A execução mobile em CI foi preparada para utilizar BrowserStack App Automate, evitando dependência de runner com Android Emulator e KVM.

Como o repositório está hospedado no GitHub, também foi adicionada uma configuração básica em `.github/workflows/ci.yml` para validação da estrutura do projeto.

Para executar o pipeline mobile real no GitLab, é necessário configurar as variáveis `BROWSERSTACK_USERNAME`, `BROWSERSTACK_ACCESS_KEY` e `BROWSERSTACK_APP_ID` nas variáveis protegidas do GitLab CI/CD.

---

## Funcionalidades cobertas

* Abertura do aplicativo
* Navegação para Login
* Login com credenciais válidas
* Validação de erro com e-mail inválido no Login
* Cadastro com dados válidos
* Validação de erro com e-mail inválido no Cadastro
* Navegação entre telas
* Preenchimento de formulário
* Validação de ação em botão ativo
* Geração de relatório de execução
* Captura automática de screenshot em falhas

---

## Documentação

* [Configuração do ambiente](./docs/01_ambiente.md)
* [Configuração do WebdriverIO](./docs/02_wdio_config.md)
* [Estratégia de testes](./docs/03_estrategia_testes.md)
* [Casos de teste automatizados](./docs/04_casos_de_teste.md)

---

## Status do projeto

Projeto configurado e suíte de testes executando com sucesso em emulador Android local.

Status atual:

```text
14 cenários automatizados
Todos os testes passando
Relatório Allure configurado
Page Object Model aplicado
Execução via WebdriverIO + Appium validada
```
