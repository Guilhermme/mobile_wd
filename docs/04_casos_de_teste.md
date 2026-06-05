# Casos de Teste Automatizados

## 1. Objetivo

Este documento descreve os casos de teste implementados na automação mobile do aplicativo **Native Demo App**.

Os cenários foram organizados por funcionalidade, utilizando **WebdriverIO**, **Appium**, **Mocha** e **Page Object Model**.

---

# Smoke Tests

Arquivo:

```text
test/specs/smoke.spec.js
```

## CT-001 — Validar abertura do aplicativo

### Objetivo

Garantir que o aplicativo seja aberto corretamente e que os principais menus estejam visíveis.

### Pré-condição

* Emulador Android iniciado
* APK configurado no `wdio.conf.js`

### Passos

1. Abrir o aplicativo
2. Validar a aba Home
3. Validar a aba Login
4. Validar a aba Forms

### Resultado esperado

As abas principais devem ser exibidas corretamente.

### Status

Automatizado.

---

## CT-002 — Validar navegação para tela de Login

### Objetivo

Garantir que o usuário consiga acessar a tela de Login.

### Pré-condição

* Aplicativo aberto

### Passos

1. Clicar na aba Login
2. Validar o campo de e-mail
3. Validar o campo de senha
4. Validar o botão LOGIN

### Resultado esperado

A tela de Login deve ser exibida corretamente.

### Status

Automatizado.

---

# Login

Arquivo:

```text
test/specs/login.spec.js
```

## CT-003 — Validar tela de Login

### Objetivo

Garantir que os elementos da tela de Login estejam visíveis.

### Pré-condição

* Aplicativo aberto

### Passos

1. Acessar a aba Login
2. Validar campo de e-mail
3. Validar campo de senha
4. Validar botão LOGIN

### Resultado esperado

Todos os elementos da tela de Login devem estar visíveis.

### Status

Automatizado.

---

## CT-004 — Realizar login com credenciais válidas

### Objetivo

Validar o fluxo de login com dados válidos.

### Massa de teste

```text
E-mail: teste@email.com
Senha: 12345678
```

### Pré-condição

* Usuário na tela de Login

### Passos

1. Informar e-mail válido
2. Informar senha válida
3. Clicar no botão LOGIN
4. Validar mensagem de sucesso
5. Fechar modal de sucesso

### Resultado esperado

O sistema deve exibir a mensagem:

```text
You are logged in!
```

### Status

Automatizado.

---

## CT-005 — Validar erro ao informar e-mail inválido no Login

### Objetivo

Garantir que o sistema exiba mensagem de erro ao tentar logar com e-mail inválido.

### Massa de teste

```text
E-mail: email-invalido
Senha: 12345678
```

### Pré-condição

* Usuário na tela de Login

### Passos

1. Informar e-mail inválido
2. Informar senha
3. Clicar no botão LOGIN
4. Validar mensagem de erro

### Resultado esperado

O sistema deve exibir mensagem informando que o e-mail é inválido.

### Status

Automatizado.

---

# Cadastro

Arquivo:

```text
test/specs/signup.spec.js
```

## CT-006 — Validar tela de Cadastro

### Objetivo

Garantir que a tela de cadastro seja exibida corretamente.

### Pré-condição

* Aplicativo aberto
* Usuário na aba Login

### Passos

1. Acessar a aba Login
2. Clicar na opção Sign up
3. Validar campo de e-mail
4. Validar campo de senha
5. Validar campo de confirmação de senha
6. Validar botão SIGN UP

### Resultado esperado

Todos os elementos da tela de cadastro devem estar visíveis.

### Status

Automatizado.

---

## CT-007 — Realizar cadastro com dados válidos

### Objetivo

Validar o fluxo de cadastro com dados válidos.

### Massa de teste

```text
E-mail: cadastro@email.com
Senha: 12345678
Confirmação de senha: 12345678
```

### Pré-condição

* Usuário na tela de Cadastro

### Passos

1. Informar e-mail válido
2. Informar senha
3. Confirmar senha
4. Clicar no botão SIGN UP
5. Validar mensagem de sucesso
6. Fechar modal de sucesso

### Resultado esperado

O sistema deve exibir mensagem de cadastro realizado com sucesso.

### Status

Automatizado.

---

## CT-008 — Validar erro ao informar e-mail inválido no Cadastro

### Objetivo

Garantir que o sistema exiba mensagem de erro ao tentar cadastrar com e-mail inválido.

### Massa de teste

```text
E-mail: email-invalido
Senha: 12345678
Confirmação de senha: 12345678
```

### Pré-condição

* Usuário na tela de Cadastro

### Passos

1. Informar e-mail inválido
2. Informar senha
3. Confirmar senha
4. Clicar no botão SIGN UP
5. Validar mensagem de erro

### Resultado esperado

O sistema deve exibir mensagem informando que o e-mail é inválido.

### Status

Automatizado.

---

# Navegação entre telas

Arquivo:

```text
test/specs/navigation.spec.js
```

## CT-009 — Navegar para tela Forms

### Objetivo

Garantir que o usuário consiga acessar a tela de formulários.

### Pré-condição

* Aplicativo aberto

### Passos

1. Clicar na aba Forms
2. Validar título ou elemento principal da tela

### Resultado esperado

A tela Forms deve ser exibida corretamente.

### Status

Automatizado.

---

## CT-010 — Navegar para tela Webview

### Objetivo

Garantir que o usuário consiga acessar a tela Webview.

### Pré-condição

* Aplicativo aberto

### Passos

1. Clicar na aba Webview
2. Validar carregamento do componente WebView

### Resultado esperado

A WebView deve ser exibida corretamente.

### Status

Automatizado.

---

## CT-011 — Navegar para tela Swipe

### Objetivo

Garantir que o usuário consiga acessar a tela Swipe.

### Pré-condição

* Aplicativo aberto

### Passos

1. Clicar na aba Swipe
2. Validar título ou elemento principal da tela

### Resultado esperado

A tela Swipe deve ser exibida corretamente.

### Status

Automatizado.

---

## CT-012 — Navegar para tela Drag

### Objetivo

Garantir que o usuário consiga acessar a tela Drag and Drop.

### Pré-condição

* Aplicativo aberto

### Passos

1. Clicar na aba Drag
2. Validar título ou elemento principal da tela

### Resultado esperado

A tela Drag and Drop deve ser exibida corretamente.

### Status

Automatizado.

---

# Formulários

Arquivo:

```text
test/specs/forms.spec.js
```

## CT-013 — Preencher campo de texto no formulário

### Objetivo

Validar o preenchimento de um campo de texto na tela Forms.

### Massa de teste

```text
Texto: Teste Appium
```

### Pré-condição

* Usuário na tela Forms

### Passos

1. Acessar a aba Forms
2. Preencher o campo de texto com `Teste Appium`
3. Validar o resultado exibido na tela

### Resultado esperado

O texto informado deve ser exibido corretamente no resultado do formulário.

### Status

Automatizado.

---

## CT-014 — Acionar botão ativo no formulário

### Objetivo

Validar a ação do botão ativo da tela Forms.

### Pré-condição

* Usuário na tela Forms

### Passos

1. Acessar a aba Forms
2. Clicar no botão ativo
3. Validar mensagem exibida
4. Fechar modal

### Resultado esperado

O sistema deve exibir mensagem confirmando que o botão ativo foi acionado.

### Status

Automatizado.

---

# Resumo da suíte

| ID     | Funcionalidade | Cenário                        | Status       |
| ------ | -------------- | ------------------------------ | ------------ |
| CT-001 | Smoke          | Validar abertura do aplicativo | Automatizado |
| CT-002 | Smoke          | Validar navegação para Login   | Automatizado |
| CT-003 | Login          | Validar tela de Login          | Automatizado |
| CT-004 | Login          | Login com credenciais válidas  | Automatizado |
| CT-005 | Login          | Erro com e-mail inválido       | Automatizado |
| CT-006 | Cadastro       | Validar tela de Cadastro       | Automatizado |
| CT-007 | Cadastro       | Cadastro com dados válidos     | Automatizado |
| CT-008 | Cadastro       | Erro com e-mail inválido       | Automatizado |
| CT-009 | Navegação      | Navegar para Forms             | Automatizado |
| CT-010 | Navegação      | Navegar para Webview           | Automatizado |
| CT-011 | Navegação      | Navegar para Swipe             | Automatizado |
| CT-012 | Navegação      | Navegar para Drag              | Automatizado |
| CT-013 | Formulários    | Preencher campo de texto       | Automatizado |
| CT-014 | Formulários    | Acionar botão ativo            | Automatizado |

---

# Comando de execução

Para executar todos os testes:

```bash
npm run wdio
```

Para executar um arquivo específico:

```bash
npm run wdio -- --spec ./test/specs/login.spec.js
```

Para gerar o relatório Allure:

```bash
npm run allure:generate
```
