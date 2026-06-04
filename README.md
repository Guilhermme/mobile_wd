# Desafio de Automação de Testes Mobile

Projeto de automação mobile utilizando **WebdriverIO**, **Appium**, **JavaScript**, **Mocha** e padrão **Page Object Model**.

O objetivo do projeto é automatizar cenários de teste no aplicativo **Native Demo App** do WebdriverIO, cobrindo funcionalidades como login/cadastro, navegação entre telas, preenchimento de formulários e validação de mensagens de erro.

---

## 1. Tecnologias utilizadas

* JavaScript
* Node.js
* NPM
* WebdriverIO
* Appium
* UiAutomator2
* Mocha
* Chai
* Android Studio
* Android SDK
* ADB
* Emulador Android
* Allure Report

---

## 2. Pré-requisitos do ambiente

Antes da criação do projeto, foram instaladas e validadas as seguintes ferramentas:

### Java

Versão instalada:

```bash
openjdk 17.0.19
```

Comando de validação:

```bash
java -version
```

### Node.js

Versão instalada:

```bash
v24.16.0
```

Comando de validação:

```bash
node -v
```

### NPM

Versão instalada:

```bash
11.3.0
```

Comando de validação:

```bash
npm -v
```

---

## 3. Android Studio, SDK e ADB

O Android Studio foi instalado para fornecer os recursos necessários para automação mobile Android:

* Android SDK
* Android Emulator
* Android SDK Platform-Tools
* Android SDK Build-Tools
* Android SDK Command-line Tools

No Android Studio, a configuração foi realizada em:

```text
More Actions > SDK Manager > Android SDK > SDK Tools
```

Foram instalados:

```text
Android SDK Platform-Tools
Android SDK Build-Tools
Android Emulator
Android SDK Command-line Tools
```

O ADB foi validado com o comando:

```bash
adb version
```

Resultado validado:

```bash
Android Debug Bridge version 1.0.41
Version 37.0.0
Installed as /home/guilherme/Android/Sdk/platform-tools/adb
```

---

## 4. Configuração das variáveis de ambiente

As variáveis do Android SDK foram adicionadas no arquivo:

```bash
~/.bashrc
```

Configuração adicionada:

```bash
export ANDROID_HOME=$HOME/Android/Sdk
export ANDROID_SDK_ROOT=$HOME/Android/Sdk
export PATH=$PATH:$ANDROID_HOME/platform-tools
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/cmdline-tools/latest/bin
```

Após a alteração, foi executado:

```bash
source ~/.bashrc
```

Para validar:

```bash
adb version
```

---

## 5. Configuração do KVM no Linux

Durante a criação do emulador, foi identificado o alerta:

```text
/dev/kvm is not found
```

Para habilitar a aceleração do emulador Android, foram instalados os pacotes necessários:

```bash
sudo apt update
sudo apt install qemu-system-x86 cpu-checker libvirt-daemon-system libvirt-clients bridge-utils -y
```

Após isso, foi necessário habilitar a virtualização na BIOS/UEFI da máquina.

Validação do KVM:

```bash
kvm-ok
```

Resultado esperado:

```bash
INFO: /dev/kvm exists
KVM acceleration can be used
```

---

## 6. Criação do emulador Android

O emulador foi criado pelo Android Studio em:

```text
More Actions > Virtual Device Manager > Create Device
```

Configuração utilizada:

```text
Device: Pixel 7
Android: 14.0
API: 34
System Image: Google Play Intel x86_64 Atom
Services: Google Play Store
```

Após iniciar o emulador, foi validado com:

```bash
adb devices
```

Resultado esperado:

```bash
List of devices attached
emulator-5554   device
```

---

## 7. Instalação do Appium

O Appium foi instalado globalmente via NPM:

```bash
npm install -g appium
```

Validação da versão:

```bash
appium -v
```

Versão instalada:

```bash
3.5.0
```

---

## 8. Instalação do driver UiAutomator2

Para automação Android com Appium, foi instalado o driver UiAutomator2:

```bash
appium driver install uiautomator2
```

Validação dos drivers instalados:

```bash
appium driver list
```

Resultado validado:

```bash
uiautomator2@7.6.0 [installed (npm)]
```

---

## 9. Inicialização do servidor Appium

Para iniciar o servidor Appium:

```bash
appium
```

Resultado esperado:

```bash
Appium REST http interface listener started on http://0.0.0.0:4723
```

O terminal do Appium deve permanecer aberto durante a execução dos testes.

---

## 10. Criação do projeto WebdriverIO

O projeto foi criado no diretório:

```bash
/home/guilherme/Documentos/projetos/mobile_wd
```

Comandos utilizados:

```bash
cd ~/Documentos/projetos
mkdir mobile_wd
cd mobile_wd
npm init -y
npm init wdio@latest .
```

---

## 11. Opções selecionadas no WDIO Configuration Wizard

Durante a configuração do WebdriverIO, foram escolhidas as seguintes opções:

```text
Project detected:
Yes

Type of testing:
E2E Testing - of Web or Mobile Applications

Automation backend:
On my local machine

Environment:
Mobile - native, hybrid and mobile web apps, on Android or iOS

Mobile environment:
Android - native, hybrid and mobile web apps, tested on emulators and real devices
using UiAutomator2

Framework:
Mocha

Use TypeScript:
No

Autogenerate test files:
Yes

Spec files location:
test/specs/**/*.js

Use Page Objects:
Yes

Page Objects location:
test/pageobjects/**/*.js

Reporter:
spec

Plugin:
wait-for

Visual Testing:
No

Service:
appium

Run npm install:
Yes

Continue with Appium installer:
No
```

Observação: o Appium Installer não foi utilizado porque o Appium e o driver UiAutomator2 já haviam sido instalados manualmente.

---

## 12. Estrutura inicial do projeto

Após a criação do projeto, a estrutura inicial ficou assim:

```text
mobile_wd
├── node_modules
├── package-lock.json
├── package.json
├── test
│   ├── pageobjects
│   └── specs
└── wdio.conf.js
```

---

## 13. Status atual do ambiente

Até o momento, foram concluídas as seguintes etapas:

```text
Java 17 instalado e validado
Node.js instalado e validado
NPM instalado e validado
Android Studio instalado
Android SDK instalado
ADB configurado no PATH
KVM habilitado
Emulador Android criado
Emulador reconhecido pelo ADB
Appium instalado
Driver UiAutomator2 instalado
Servidor Appium iniciado
Projeto WebdriverIO criado
Page Object habilitado no projeto
```
