# Documentação - Calculadora de IMC

## Índice

1. [Visão Geral](#visao-geral)
2. [Tecnologias Utilizadas](#tecnologias-utilizadas)
3. [Funcionalidade](#funcionalidade)
4. [HTML - Estrutura da Interface](#html---estrutura-da-interface)
5. [JavaScript - Lógica da Aplicação](#javascript---logica-da-aplicacao)
6. [Instruções de Uso](#instrucoes-de-uso)

---

## 1. Visão Geral

A **Calculadora de IMC (Índice de Massa Corporal)** é uma aplicação web que permite aos usuários calcular seu IMC com base em seus dados de peso e altura. A aplicação exibe o valor calculado e fornece uma descrição indicando se o usuário está abaixo do peso, no peso ideal, com sobrepeso ou com obesidade.

---

## 2. Tecnologias Utilizadas

- **HTML5**: Para estruturar o conteúdo da aplicação.
- **CSS3**: Para estilizar a interface do usuário.
- **JavaScript**: Para adicionar a lógica de cálculo do IMC e a interação com o formulário.
- **Font Awesome**: Para ícones utilizados na interface.
- **Google Fonts**: Para personalizar a fonte da aplicação.

---

---

## 3. Funcionalidade

A aplicação realiza o cálculo do IMC com base na fórmula:

IMC = peso / (altura \* altura)

bash
Copiar código

A interface coleta os dados de peso e altura do usuário através de um formulário e, após o envio, exibe:

- O valor do IMC com duas casas decimais.
- Uma descrição correspondente ao estado físico do usuário, de acordo com a tabela padrão de IMC.

### Classificação do IMC

| Faixa de IMC  | Descrição          |
| ------------- | ------------------ |
| Menos de 18.5 | Abaixo do peso     |
| 18.5 - 24.9   | Peso ideal         |
| 25 - 29.9     | Sobrepeso          |
| 30 - 34.9     | Obesidade moderada |
| 35 - 39.9     | Obesidade severa   |
| 40 ou mais    | Obesidade mórbida  |

---

## 4. HTML - Estrutura da Interface

O arquivo `index.html` contém a estrutura principal da aplicação, com um formulário para entrada dos valores de peso e altura. Cada campo possui um ícone para melhorar a experiência do usuário.

### Exemplo de Estrutura HTML:

```html
<form id="forma">
  <h1 id="title">Calculadora - IMC</h1>

  <div class="input-box">
    <label for="weight">Peso Em KG</label>
    <div class="input-fild">
      <i class="fa-solid fa-weight-hanging"></i>
      <input type="number" id="weight" step="0.1" required />
      <span>KG</span>
    </div>
  </div>

  <div class="input-box">
    <label for="height">Altura em metros</label>
    <div class="input-fild">
      <i class="fa-solid fa-ruler"></i>
      <input type="number" id="height" step="0.01" required />
      <span>M</span>
    </div>
  </div>

  <button id="calculate" type="submit">Calcular</button>
</form>

<div id="infos" class="hidden">
  <div id="results">
    <div id="bmi">
      <span id="value"></span>
      <span>Seu IMC</span>
    </div>
    <div id="description">
      <span></span>
    </div>
  </div>
</div>
```

### 5. JavaScript - Lógica da Aplicação

O arquivo scripts.js contém a lógica para calcular o IMC e exibir o resultado. Quando o formulário é enviado, a função responsável captura os valores inseridos pelo usuário, calcula o IMC e atualiza o HTML para exibir o resultado.

Função JavaScript:
javascript
Copiar código
const form = document.querySelector("#forma");

form.addEventListener("submit", (event) => {
event.preventDefault();

const weight = parseFloat(document.querySelector("#weight").value);
const height = parseFloat(document.querySelector("#height").value);

const imc = (weight / (height \* height)).toFixed(2);

const value = document.querySelector("#value");
let description = "";

document.querySelector("#infos").classList.remove("hidden");

if (imc < 18.5) {
description = "Cuidado! Você está abaixo do peso.";
} else if (imc >= 18.5 && imc <= 25) {
description = "Parabéns, seu peso é o ideal.";
} else if (imc > 25 && imc <= 30) {
description = "Cuidado! Você está com sobrepeso!";
} else if (imc > 30 && imc <= 35) {
description = "Cuidado! Obesidade moderada.";
} else if (imc > 35 && imc <= 40) {
description = "Cuidado! Obesidade severa.";
} else {
description = "Cuidado! Você está com obesidade mórbida.";
}

value.innerHTML = imc.replace(".", ",");
document.querySelector("#description").innerHTML = description;
});

### 6. Instruções de Uso

O usuário deve inserir o peso em quilogramas (exemplo: 75) e a altura em metros (exemplo: 1.75).
Ao clicar em "Calcular", o IMC será calculado e o resultado será exibido na página, junto com uma descrição sobre o estado físico do usuário.
O valor do IMC aparecerá com duas casas decimais e o separador de decimal será alterado de ponto (.) para vírgula (,).
