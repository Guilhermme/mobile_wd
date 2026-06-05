# Configuração do Ambiente

Este documento descreve o processo de configuração do ambiente utilizado para executar os testes automatizados mobile com **WebdriverIO**, **Appium**, **Android Emulator** e **UiAutomator2**.

---

## 1. Objetivo

Preparar o ambiente local para execução de testes automatizados mobile em Android, utilizando:

* Java
* Node.js
* NPM
* Android Studio
* Android SDK
* ADB
* KVM
* Emulador Android
* Appium
* Driver UiAutomator2

---

## 2. Pré-requisitos validados

Antes da criação do projeto, foram instaladas e validadas as principais dependências necessárias para automação mobile.

---

## 3. Java

O Java é necessário para execução de componentes relacionados ao Android SDK, Appium e ferramentas auxiliares.

### Comando de validação

```bash
java -version
```

### Versão utilizada

```bash
openjdk 17.0.19
```

### Resultado esperado

O terminal deve retornar a versão instalada do Java, confirmando que o ambiente está preparado para uso com as ferramentas Android.

---

## 4. Node.js

O Node.js é necessário para instalar e executar o WebdriverIO, Appium e demais dependências do projeto.

### Comando de validação

```bash
node -v
```

### Versão utilizada

```bash
v24.16.0
```

---

## 5. NPM

O NPM é utilizado para instalar pacotes JavaScript, dependências do projeto, Appium, WebdriverIO e bibliotecas auxiliares.

### Comando de validação

```bash
npm -v
```

### Versão utilizada

```bash
11.3.0
```

---

## 6. Android Studio

O Android Studio foi instalado para fornecer os recursos necessários para automação mobile Android.

Componentes utilizados:

* Android SDK
* Android Emulator
* Android SDK Platform-Tools
* Android SDK Build-Tools
* Android SDK Command-line Tools
* Virtual Device Manager

---

## 7. Configuração do Android SDK

No Android Studio, a configuração foi realizada em:

```text
More Actions > SDK Manager > Android SDK > SDK Tools
```

Foram marcados e instalados os seguintes componentes:

```text
Android SDK Platform-Tools
Android SDK Build-Tools
Android Emulator
Android SDK Command-line Tools
```

---

## 8. Android SDK Location

O SDK foi instalado no seguinte caminho:

```bash
/home/guilherme/Android/Sdk
```

Esse caminho foi utilizado na configuração das variáveis de ambiente.

---

## 9. Configuração das variáveis de ambiente

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

Após salvar o arquivo, foi executado:

```bash
source ~/.bashrc
```

Essa configuração permite executar comandos como `adb` e `emulator` diretamente pelo terminal.

---

## 10. Validação do ADB

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

## 11. Validação de dispositivos Android

Para verificar se existe algum dispositivo ou emulador conectado, foi utilizado:

```bash
adb devices
```

Antes de iniciar o emulador, o resultado pode aparecer apenas como:

```text
List of devices attached
```

Após iniciar o emulador, o resultado esperado é:

```text
List of devices attached
emulator-5554   device
```

Esse retorno confirma que o emulador está disponível para execução dos testes.

---

## 12. Configuração do KVM no Linux

Durante a criação do emulador Android, foi identificado o alerta:

```text
/dev/kvm is not found
```

Esse alerta indica que a aceleração de virtualização ainda não estava disponível para o Android Emulator.

---

## 13. Instalação dos pacotes do KVM

Foram instalados os pacotes necessários com os comandos:

```bash
sudo apt update
sudo apt install qemu-system-x86 cpu-checker libvirt-daemon-system libvirt-clients bridge-utils -y
```

---

## 14. Validação inicial do KVM

Após a instalação, foi executado:

```bash
kvm-ok
```

Inicialmente, o ambiente indicou que a virtualização não estava ativa.

Após validação, foi identificado que a virtualização estava desabilitada na BIOS/UEFI da máquina.

---

## 15. Habilitação da virtualização na BIOS/UEFI

Foi necessário reiniciar a máquina e habilitar a virtualização na BIOS/UEFI.

Dependendo do fabricante, essa opção pode aparecer como:

```text
Intel Virtualization Technology
VT-x
AMD-V
SVM Mode
Virtualization
```

Após habilitar a virtualização e reiniciar o sistema, o KVM foi validado novamente.

---

## 16. Validação final do KVM

Comando utilizado:

```bash
kvm-ok
```

Resultado esperado:

```bash
INFO: /dev/kvm exists
KVM acceleration can be used
```

Esse resultado confirma que o emulador Android pode utilizar aceleração de hardware.

---

## 17. Criação do emulador Android

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

---

## 18. Inicialização do emulador

Após a criação do dispositivo virtual, o emulador foi iniciado pelo **Virtual Device Manager** clicando no botão de execução do dispositivo.

Após o carregamento completo do Android, foi realizada a validação pelo terminal:

```bash
adb devices
```

Resultado esperado:

```text
List of devices attached
emulator-5554   device
```

---

## 19. Instalação do Appium

O Appium foi instalado globalmente via NPM:

```bash
npm install -g appium
```

---

## 20. Validação do Appium

Comando utilizado:

```bash
appium -v
```

Versão instalada:

```bash
3.5.0
```

---

## 21. Instalação do driver UiAutomator2

Para automação Android com Appium, foi instalado o driver **UiAutomator2**.

Comando utilizado:

```bash
appium driver install uiautomator2
```

---

## 22. Validação dos drivers instalados

Comando utilizado:

```bash
appium driver list
```

Resultado validado:

```bash
uiautomator2@7.6.0 [installed (npm)]
```

Esse retorno confirma que o Appium está preparado para automatizar aplicações Android.

---

## 23. Inicialização manual do servidor Appium

Durante a configuração inicial, o servidor Appium foi iniciado manualmente para validar a instalação.

Comando utilizado:

```bash
appium
```

Resultado esperado:

```bash
Appium REST http interface listener started on http://0.0.0.0:4723
```

Também foi validado que o driver UiAutomator2 estava disponível:

```text
Available drivers:
- uiautomator2@7.6.0
```

---

## 24. Observação sobre o Appium Service

Apesar da validação manual com o comando `appium`, no projeto final o WebdriverIO foi configurado com o serviço do Appium:

```js
services: ['appium']
```

Com isso, ao executar:

```bash
npm run wdio
```

o próprio WebdriverIO inicia e encerra o Appium automaticamente.

Portanto, para a execução normal dos testes do projeto, não é necessário manter um terminal separado com o comando `appium` rodando.

---

## 25. Status final do ambiente

Ao final da configuração, foram validados os seguintes itens:

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
Servidor Appium validado
Ambiente pronto para execução com WebdriverIO
```

---

## 26. Comandos úteis

### Validar Java

```bash
java -version
```

### Validar Node.js

```bash
node -v
```

### Validar NPM

```bash
npm -v
```

### Validar ADB

```bash
adb version
```

### Listar dispositivos Android

```bash
adb devices
```

### Validar KVM

```bash
kvm-ok
```

### Validar Appium

```bash
appium -v
```

### Listar drivers Appium

```bash
appium driver list
```

---

## 27. Conclusão

O ambiente foi configurado com sucesso para execução de testes automatizados mobile Android.

A configuração contempla Android SDK, emulador, ADB, KVM, Appium e driver UiAutomator2, permitindo a execução dos testes do projeto com WebdriverIO e Appium em um emulador Android local.
